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
    this.controlPointSpacing = config.controlPointSpacing;

    this.phase = 0.0;
  };
  CanvasPluckString.prototype.onCanvasResize = function (event) {
    this.canvasWidth = $(window).width();
    canvasBuffer.width = this.canvasWidth;
    canvas.width = this.canvasWidth;

    this.stringAudio.setLength(Math.round(this.canvasWidth / 2));

    repaintFull();
  };
  CanvasPluckString.prototype.repaintBuffer = function () {
    var ctx = this.canvasBufferCtx;

    // clear buffer
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    if (debug) {
      ctx.fillStyle = 'green';
      ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
  };
  CanvasPluckString.prototype.repaintObjects = function () {
    var ctx = this.canvasCtx;

    // draw buffer
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    ctx.drawImage(this.canvasBuffer, 0, 0);

    // draw line
    var stringY = this.maxDeviation - (this.thickness / 2);
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

    this.phase += this.phaseInc;
  };
  CanvasPluckString.prototype.repaintFull = function () {
    this.repaintBuffer();
    this.repaintObjects();
  };

})(window.nustring);