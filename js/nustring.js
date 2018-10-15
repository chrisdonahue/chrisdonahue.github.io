// shim
window.requestAnimationFrame = (function () {
  return  window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          };
})();

window.nustring = window.nustring || {};

(function (nustring) {
  var debug = false;

  var DelayLine = nustring.DelayLine = function (maxDelaySamps) {
    this.buffer = new Float32Array(maxDelaySamps);
    this.bufferLen = maxDelaySamps;
    this.writeIdx = 0;
  };
  DelayLine.prototype.readOne = function (delaySamps) {
    var readIdx = this.writeIdx - delaySamps;
    while (readIdx < 0) {
      readIdx += this.bufferLen;
    }
    return this.buffer[readIdx];
  };
  DelayLine.prototype.writeOne = function (value) {
    this.buffer[this.writeIdx] = value;
    ++this.writeIdx;
    while (this.writeIdx >= this.bufferLen) {
      this.writeIdx -= this.bufferLen;
    }
  };
  DelayLine.prototype.getLength = function () {
    return this.bufferLen;
  };

  var globalAudioCtxChromeWorkaround = null;
  var KarplusStrong = nustring.KarplusStrong = function (audioCtx, config) {
    this.stringAudioCtx = audioCtx;
    globalAudioCtxChromeWorkaround = audioCtx;

    this.ksLength = 256;
    this.pluckRemaining = 0;
    this.pluckIntensity = 0;
    this.rmsAmp = 0.0;
    this.decayFactor = config.decayFactor;
    this.delayLine = new DelayLine(config.maxDelaySamps);
    this.filterPrev = 0.0;

    this.scriptProcessor = audioCtx.createScriptProcessor(config.blockSize, 1, 1);
    this.scriptProcessor.onaudioprocess = this._onAudioProcess.bind(this)
  };
  KarplusStrong.prototype.pluck = function(pluckIntensity) {
    this.pluckRemaining = this.ksLength;
    this.pluckIntensity = pluckIntensity;
  };
  KarplusStrong.prototype.setLength = function(lengthSamples) {
    this.ksLength = Math.min(lengthSamples, this.delayLine.getLength());
  };
  KarplusStrong.prototype.getRmsAmp = function() {
    return this.rmsAmp;
  };
  KarplusStrong.prototype._onAudioProcess = function (event) {
    var input = event.inputBuffer;
    var output = event.outputBuffer;

    var rmsTotal = 0.0;

    for (var channel = 0; channel < output.numberOfChannels; ++channel) {
      var inputChannel = input.getChannelData(channel);
      var outputChannel = output.getChannelData(channel);

      for (var i = 0; i < input.length; ++i) {
        var noise = 0.0;
        if (this.pluckRemaining > 0) {
          noise = (Math.random() * 2.0) - 1.0;
          noise *= this.pluckIntensity;
          --this.pluckRemaining;
        }

        var feedback = this.delayLine.readOne(this.ksLength);
        var filteredFeedback = (this.filterPrev + feedback) * 0.5;
        this.filterPrev = feedback;

        var output = noise + filteredFeedback;

        outputChannel[i] = output;
        this.delayLine.writeOne(output * this.decayFactor);

        rmsTotal += output * output;
      }
      this.rmsAmp = Math.sqrt(rmsTotal / input.length);
    }
  };

  var CanvasPluckString = nustring.CanvasPluckString = function (stringAudio, canvas, config) {
    this.stringAudio = stringAudio;
    this.canvas = canvas;
    this.canvasCtx = this.canvas.getContext('2d');

    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;

    this.canvasBuffer = document.createElement('canvas');
    this.canvasBufferCtx = this.canvasBuffer.getContext('2d');
    this.canvasBuffer.width = this.canvasWidth;
    this.canvasBuffer.height = this.canvasHeight;

    this.rmsSaturator = config.rmsSaturator;
    this.maxDeviation = config.maxDeviation;
    this.thickness = config.thickness;
    this.phaseInc = config.phaseInc;

    this.phase = 0.0;

    this.mouseLast = null;
    this.mouse = null;
    this.canvas.addEventListener('mousemove', this._onMouseMove.bind(this));

    setInterval(this._controlTimeout.bind(this), config.controlTimeoutMs);
  };
  CanvasPluckString.prototype.setMaxDeviation = function (maxDeviation) {
    this.maxDeviation = maxDeviation;
  };
  CanvasPluckString.prototype.setDimensions = function (width, height) {
    if (width !== null) {
      this.canvasBuffer.width = width;
      this.canvas.width = width;
      this.canvasWidth = width;

      this.stringAudio.setLength(Math.round(this.canvasWidth / 2));
    }

    if (height !== null) {
      this.canvasBuffer.height = height;
      this.canvas.height = height;
      this.canvasHeight = height;
    }

    this.repaint();
  };
  CanvasPluckString.prototype.repaint = function () {
    var ctx = this.canvasCtx;

    // draw background
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    if (debug) {
      ctx.fillStyle = 'green';
      ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    // draw mouse
    if (debug) {
      if (this.mouse !== null) {
        ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.mouse.x, this.mouse.y, 10, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
      }
      if (this.mouseLast !== null) {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.mouseLast.x, this.mouseLast.y, 10, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
      }
    }

    // draw line
    var stringY = this._relToAbs(0.0);
    var rmsAmp = Math.min(this.stringAudio.getRmsAmp() * this.rmsSaturator, 1.0);
    var stringDevRel = Math.sin(this.phase) * rmsAmp;
    var stringDevAbs = stringDevRel * this.maxDeviation;

    ctx.strokeStyle = 'black';
    ctx.lineWidth = this.thickness;
    ctx.beginPath();
    ctx.moveTo(0, stringY);
    ctx.bezierCurveTo(
      0, stringY + stringDevAbs,
      this.canvasWidth, stringY + stringDevAbs,
      this.canvasWidth, stringY
    )
    ctx.stroke();

    // increment phase
    this.phase += this.phaseInc;
  };
  CanvasPluckString.prototype.startAnimation = function () {
    this.animating = true;
    this._animate();
  }
  CanvasPluckString.prototype.stopAnimation = function () {
    console.log('lul');
    console.log(this);
    this.animating = false;
  }
  CanvasPluckString.prototype._onMouseMove = function (event) {
    if (globalAudioCtxChromeWorkaround !== null) {
        globalAudioCtxChromeWorkaround.resume();
    }

    var canvasBb = this.canvas.getBoundingClientRect();
    this.mouse = {
      x: event.clientX - canvasBb.left,
      y: event.clientY - canvasBb.top
    };
  };
  CanvasPluckString.prototype._controlTimeout = function () {
    if (this.mouseLast !== null) {
      var mouseLastYRel = this._absToRel(this.mouseLast.y);
      var mouseYRel = this._absToRel(this.mouse.y);
      if (mouseYRel * mouseLastYRel < 0.0) {
        var pluckIntensity = Math.min(Math.abs(mouseYRel - mouseLastYRel) * 0.5, 1.0);
        if (debug) {
          console.log('Pluck intensity: ' + String(pluckIntensity));
        }
        this.stringAudio.pluck(pluckIntensity);
      }
    }

    this.mouseLast = this.mouse;
  };
  CanvasPluckString.prototype._relToAbs = function (yRel) {
    var canvasHeightHalf = this.canvasHeight * 0.5;

    var yNorm = yRel * this.maxDeviation;
    var yAbs = canvasHeightHalf - yNorm;

    return yAbs;
  };
  CanvasPluckString.prototype._absToRel = function (yAbs) {
    var canvasHeightHalf = this.canvasHeight * 0.5;

    var yNorm = canvasHeightHalf - yAbs;
    var yRel = yNorm / this.maxDeviation;

    return yRel;
  };
  CanvasPluckString.prototype._animate = function () {
    if (this.animating) {
      this.repaint();
      window.requestAnimationFrame(this._animate.bind(this));
    }
  };


})(window.nustring);
