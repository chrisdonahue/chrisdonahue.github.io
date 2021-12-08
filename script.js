window.cd = window.cd || {};

/*
  Main
*/
(function(href, cd) {
  // Check if development mode
  let DEV_MODE = false;
  try {
    DEV_MODE = href.includes("glitch.me");
  } catch {}

  // Configuration
  const CONFIG = {
    permutedEmail: {
      str: "cudtf.ohe.@dronasseanduc",
      order: [
        9,
        23,
        19,
        13,
        16,
        20,
        2,
        5,
        7,
        11,
        8,
        22,
        18,
        17,
        3,
        14,
        12,
        10,
        21,
        4,
        15,
        1,
        6,
        0
      ]
    }
  };

  function onDomReady() {
    if (DEV_MODE) {
      const newsList = document.getElementById("news-list");
      const pubsList = document.getElementById("pubs-list");
      for (let i = 0; i < 9; ++i) {
        newsList.appendChild(newsList.lastElementChild.cloneNode(true));
        pubsList.appendChild(pubsList.lastElementChild.cloneNode(true));
      }
    }
  }

  if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", onDomReady, false);
  else if (document.attachEvent)
    document.attachEvent("onreadystatechange", onDomReady);
  else window.onload = onDomReady;
})(window.location.href, window.cd);
