(function () {
  var config = {
    debug: true,
    email: {
      // https://colab.research.google.com/drive/1VqplzbC8JBBUyrAdYlBAQ4TBiBfKwbGt?usp=sharing
      permuted: 'nmhadd.euccsuihouer@',
      permutation: [7, 14, 9, 8, 18, 5, 16, 11, 10, 13, 0, 4, 19, 3, 1, 6, 15, 17, 2, 12]
    },
    stringAudio: {
      blockSize: 1024,
      maxDelaySamps: 960,
      decayFactor: 0.98
    },
    stringVideo: {
      rmsSaturator: 2.0,
      maxDeviation: 37,
      thickness: null,
      phaseInc: 0.5,
      controlTimeoutMs: 50
    },
    gain: 0.03
  };

  /* Email scrambler */
  var initEmailScramble = function () {
    emailScrambleLeaky = new scrambledString(document.getElementById('email'), 'emailScrambleLeaky', config.email.permuted, config.email.permutation);
  };

  /* Dependencies */
  var supportsAudio = 'AudioContext' in window || 'MozAudioContext' in window;
  var supportsCanvas = (function() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
  })();

  /* Pluck string widget */
  var stringVideo = null;
  var initString = function () {
    // audio
    if (!(supportsAudio && supportsCanvas))
      return;

    var audioCtx = new window.AudioContext();
    var stringAudio = new nustring.KarplusStrong(audioCtx, config.stringAudio);

    // video
    var stringCanvas = document.getElementById('string-canvas');
    var nostringBb = document.getElementById('nostring-sep').getBoundingClientRect();
    config.stringVideo.thickness = nostringBb.bottom - nostringBb.top;
    stringVideo = new nustring.CanvasPluckString(stringAudio, stringCanvas, config.stringVideo);

    // hear
    var gainNode = audioCtx.createGain();
    gainNode.gain.value = config.gain;
    stringAudio.scriptProcessor.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    // see
    stringVideo.startAnimation();
  };

  /* Resize callback */
  var onResize = function ()  {
    var bodyBb = document.getElementsByTagName('body')[0].getBoundingClientRect();
    var stringWidth = bodyBb.right - bodyBb.left;

    var aboveStringBb = document.getElementById('above-sep').getBoundingClientRect();
    var belowStringBb = document.getElementById('below-sep').getBoundingClientRect();
    var stringHeight = belowStringBb.top - aboveStringBb.bottom;

    document.getElementById('string-sep').style.top = String(aboveStringBb.bottom) + 'px';

    stringVideo.setDimensions(stringWidth, stringHeight);
    stringVideo.setMaxDeviation(Math.floor(stringHeight / 2));
  };

  /* DOM ready callback */
  var domReady = function () {
    initEmailScramble();
    
    initString();
    window.addEventListener('resize', onResize);
    onResize();

    var body = document.getElementsByTagName('body')[0];
    body.addEventListener('mousemove', stringVideo._onMouseMove.bind(stringVideo));

    // show
    document.getElementById('nostring-sep').style.display = 'none';
    document.getElementById('string-sep').style.display = 'block';
  };

  /* Attach callbacks */
  if (document.addEventListener) document.addEventListener("DOMContentLoaded", domReady, false);
  else if (document.attachEvent) document.attachEvent("onreadystatechange", domReady);
  else window.onload = domReady;
})();
