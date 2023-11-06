(function (jeff) {
    const CONFIG = {
        email: {
            // https://colab.research.google.com/drive/1VqplzbC8JBBUyrAdYlBAQ4TBiBfKwbGt?usp=sharing
            permuted: 'nmhadd.euccsuihouer@',
            permutation: [7, 14, 9, 8, 18, 5, 16, 11, 10, 13, 0, 4, 19, 3, 1, 6, 15, 17, 2, 12]
        },
    };

    /* Email scrambler */
    function initEmailScramble() {
        new jeff.scrambledString(document.getElementById('email-scrambler'), CONFIG.email.permuted, CONFIG.email.permutation);
    };

    /* DOM ready callback */
    async function domReady() {
        initEmailScramble();
    };

    /* Attach callbacks */
    if (document.addEventListener) document.addEventListener("DOMContentLoaded", domReady, false);
    else if (document.attachEvent) document.attachEvent("onreadystatechange", domReady);
    else window.onload = domReady;
})(window.jeffDonahue);