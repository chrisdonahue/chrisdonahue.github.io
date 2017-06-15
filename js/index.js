(function () {
  var config = {
    debug: true,
    email: {
      permuted: 'rmniaocughcsto@opdhlahrm.eei',
      permutation: [2, 20, 13, 3, 21, 12, 25, 16, 19, 1, 0, 4, 5, 26, 18, 6, 7, 11, 8, 23, 14, 15, 10, 27, 24, 17, 9, 22]
    },
    stringAudio: {
      blockSize: 1024,
      maxDelaySamps: 960,
      decayFactor: 0.98
    },
    stringVideo: {
      maxDeviation: 80,
      thickness: null,
      phaseInc: 0.5, 
      controlTimeoutMs: 50
    },
    gain: 0.3
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
    var stringPlaceholder = document.getElementById('sep-placeholder');
    var stringBb = stringPlaceholder.getBoundingClientRect();
    var stringY = (stringBb.bottom + stringBb.top) / 2.0;

    var bodyBb = document.getElementsByTagName('body')[0].getBoundingClientRect();
    var stringWidth = bodyBb.right - bodyBb.left;

    var stringHeight = stringY * 2;

    stringVideo.setDimensions(stringWidth, stringHeight);
  };

  /* DOM ready callback */
  var domReady = function () {
    initEmailScramble();
    
    initString();
    window.addEventListener('resize', onResize);
    onResize();

    // show
    document.getElementById('nostring-sep').style.display = 'none';
    document.getElementById('string-sep').style.display = 'block';
  };

  /* Attach callbacks */
  if (document.addEventListener) document.addEventListener("DOMContentLoaded", domReady, false);
  else if (document.attachEvent) document.attachEvent("onreadystatechange", domReady);
  else window.onload = domReady;
})();