window.nustring = window.nustring || {};

(function (nustring) {
    nustring.classes = {};
    (function (classes) {
        var DelayLine = classes.DelayLine = function (maxDelaySamps) {
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

        var KarplusStrong = classes.KarplusStrongStringAudio = function (audioCtx, config) {
            this.audioCtx = audioCtx;

            this.ksLength = 256;
            this.pluckRemaining = 0;
            this.pluckIntensity = 0;
            this.rmsAmp = 0.0;

            var scriptProcessor = audioCtx.createScriptProcessor(1024, 1, 1);
            var delayLine = new DelayLine(config.maxDelaySamps);
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

            this.scriptProcessor = scriptProcessor;
        };
        KarplusStrongString.prototype.pluck = function(pluckIntensity) {
            this.pluckRemaining = this.ksLength;
            this.pluckIntensity = pluckIntensity;
            if (config.debug) {
                console.log(this.pluckRemaining);
            }
        };
        KarplusStrongString.prototype.setLength = function(lengthSamples) {
            this.ksLength = lengthSamples;
        };
        KarplusStrongString.prototype.getRmsAmp = function() {
            return this.rmsAmp;
        };

        var CanvasPluckString = classes.CanvasPluckString = function (stringAudio, canvas, config) {
            this.stringAudio = stringAudio;
            this.canvas = canvas;

            this.maxDeviation = config.stringMaxDeviation;
            this.thickness = config.stringThickness;
            this.phaseInc = config.stringPhaseInc;
            this.controlPointSpacing = config.controlPointSpacing;
        };
        KarplusStrongStringVideo
    })(nustring.classes);

        var onWindowResize = function (event) {
            canvasWidth = $(window).width();
            canvasBuffer.width = canvasWidth;
            canvas.width = canvasWidth;

            string.setLength(Math.min(Math.round(canvasWidth / 2), config.maxDelaySamps));

            repaintFull();
        };

        var repaintBuffer = function () {
            var ctx = canvasBufferCtx;

            // clear buffer
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            if (config.debug) {
                ctx.fillStyle = 'green';
                ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            }
        };

        var repaintObjects = function () {
            var ctx = canvasCtx;

            // draw buffer
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(canvasBuffer, 0, 0);

            // draw line
            var stringY = config.stringMaxDeviation - (config.stringThickness / 2);
            var rmsAmp = string.getRmsAmp();
            var stringDevRel = Math.sin(stringGfxPhase) * rmsAmp;
            var stringDevAbs = stringDevRel * config.stringMaxDeviation;

            ctx.strokeStyle = 'black';
            ctx.lineWidth = config.stringThickness;
            ctx.beginPath();
            ctx.moveTo(0, stringY);
            ctx.bezierCurveTo(
                0, stringY + stringDevAbs,
                canvasWidth, stringY + stringDevAbs,
                canvasWidth, stringY
            )
            ctx.stroke();

            stringGfxPhase += config.stringGfxPhaseInc;
        };

        var repaintFull = function () {
            repaintBuffer();
            repaintObjects();
        };

        var animate = function () {
            repaintFull();
            window.requestAnimationFrame(animate);
        };

        // exports
        client.onDomReady = function (event) {
            /*
            $canvas.on('mousedown', onCanvasMouseDown);
            $canvas.on('mousemove', onCanvasMouseMove)
            */

            // init video
            var $canvas = $('#nustring');
            canvas = $canvas.get(0);
            canvasCtx = canvas.getContext('2d');
            canvasHeight = config.stringMaxDeviation * 2;
            canvas.height = canvasHeight;
            canvasBuffer.height = canvasHeight;

            // attach callbacks
            $(window).resize(onWindowResize);
            onWindowResize();
            var button = $('#pluck');
            button.on('click', function () {string.pluck.call(string, Math.random());});

            // start animation
            animate();
        };
    })($, nustring.config, nustring.classes, nustring.client);

})(window.nustring);