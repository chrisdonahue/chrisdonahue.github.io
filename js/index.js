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

(function () {
  var config = {
    debug: true,
    email: {
      permuted: 'rmniaocughcsto@opdhlahrm.eei',
      permutation: [2, 20, 13, 3, 21, 12, 25, 16, 19, 1, 0, 4, 5, 26, 18, 6, 7, 11, 8, 23, 14, 15, 10, 27, 24, 17, 9, 22]
    },
    stringAudio: {
      maxDelaySamps: 960
    },
    stringVideo: {
      maxDeviation: 32,
      thickness: 3,
      phaseInc: 0.5, 
      controlPointSpacing: 50
    },
    gain: 1.0
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
  var initString = function () {
    // audio
    if (!(supportsAudio && supportsCanvas))
      return;

    var audioCtx = new window.AudioContext();
    var stringAudio = new nustring.KarplusStrong(audioCtx, config.stringAudio);

    // video
    var stringCanvas = document.getElementById('string-canvas');
    var stringVideo = new nustring.CanvasPluckString(stringAudio, stringCanvas, config.stringVideo);

    // hear
    var gainNode = audioCtx.createGain();
    gainNode.gain.value = config.gain;
    stringAudio.scriptProcessor.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    // see
    var animate = function () {
      stringVideo.repaintFull();
      window.requestAnimationFrame(animate);
    }
    animate();

    // show
    document.getElementById('nostring-sep').style.display = 'none';
    document.getElementById('string-sep').style.display = 'block';
  };

  /* Resize callback */
  var onResize = function ()  {
    var stringPlaceholder = document.getElementById('sep-placeholder');
    var stringBb = stringPlaceholder.getBoundingClientRect();
    var stringY = (stringBb.bottom + stringBb.top) / 2.0;

    var stringDiv = document.getElementById('string-sep');
    var stringCanvas = document.getElementById('string-canvas');
    stringDiv.style.top = stringY;
    console.log(stringY);
  };

  /* DOM ready callback */
  var domReady = function () {
    window.addEventListener('resize', onResize);
    onResize();

    initEmailScramble();
    initString();
  };

  /* Attach callbacks */
  if (document.addEventListener) document.addEventListener("DOMContentLoaded", domReady, false);
  else if (document.attachEvent) document.attachEvent("onreadystatechange", domReady);
  else window.onload = domReady;
})();