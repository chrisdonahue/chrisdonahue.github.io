window.nustring = window.nustring || {};

(function (nustring) {
  var debug = true;

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


  var KarplusStrong = nustring.KarplusStrong = function (audioCtx, config) {
    this.stringAudioCtx = audioCtx;

    this.ksLength = 256;
    this.pluckRemaining = 0;
    this.pluckIntensity = 0;
    this.rmsAmp = 0.0;

    var scriptProcessor = this.scriptProcessor = audioCtx.createScriptProcessor(1024, 1, 1);
    var delayLine = this.delayLine = new DelayLine(config.maxDelaySamps);
    var filterPrev = 0.0;

    var that = this;
    scriptProcessor.onaudioprocess = function (event) {
      var input = event.inputBuffer;
      var output = event.outputBuffer;

      var rmsTotal = 0.0;

      for (var channel = 0; channel < output.numberOfChannels; ++channel) {
        var inputChannel = input.getChannelData(channel);
        var outputChannel = output.getChannelData(channel);

        for (var i = 0; i < input.length; ++i) {
          var noise = 0.0;
          if (that.pluckRemaining > 0) {
            noise = (Math.random() * 2.0) - 1.0;
            noise *= that.pluckIntensity;
            --that.pluckRemaining;
          }

          var feedback = delayLine.readOne(that.ksLength);
          var filteredFeedback = (filterPrev + feedback) * 0.5;
          filterPrev = feedback;

          var output = noise + filteredFeedback;

          outputChannel[i] = output;
          delayLine.writeOne(output);

          rmsTotal += output * output;
        }
        that.rmsAmp = Math.sqrt(rmsTotal / input.length);
      }
    };
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

    this.maxDeviation = config.maxDeviation;
    this.thickness = config.thickness;
    this.phaseInc = config.phaseInc;

    this.phase = 0.0;

    this.mouseLast = null;
    this.mouse = null;
    this.canvas.addEventListener('mousemove', this._onMouseMove.bind(this));

    setInterval(this._controlTimeout.bind(this), config.controlTimeoutMs);
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
    var rmsAmp = this.stringAudio.getRmsAmp();
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
  CanvasPluckString.prototype._onMouseMove = function (event) {
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
          console.log(pluckIntensity);
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

})(window.nustring);