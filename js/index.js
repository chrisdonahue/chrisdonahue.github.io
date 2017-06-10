(function () {
	var initEmailScramble = function () {
		emailScrambleLeaky = new scrambledString(document.getElementById('email'), 'emailScrambleLeaky', 'rmniaocughcsto@opdhlahrm.eei', [2, 20, 13, 3, 21, 12, 25, 16, 19, 1, 0, 4, 5, 26, 18, 6, 7, 11, 8, 23, 14, 15, 10, 27, 24, 17, 9, 22]);
	};

	/*
	<div id="string" style="visibility: hidden; display: none;">
	<img id="amod" src="img/amod.png"/>
	<canvas id="string-canvas"></canvas>
	</div>
	*/

	var initString = function() {
		var stringPlaceholder = document.getElementById('string-placeholder');
		var stringBb = stringPlaceholder.getBoundingClientRect();
		var stringDiv = document.getElementById('string');
		var stringDivY = (stringBb.bottom + stringBb.top) / 2.0;
		var stringCanvas = document.getElementById('string-canvas');
		stringDiv.style.top = stringDivY;
		stringDiv.style.display = 'block';
		console.log(stringDivY);
	};

	var initAll = function () {
		initEmailScramble();
		initString();
	}

	if (document.addEventListener) document.addEventListener("DOMContentLoaded", initAll, false);
	else if (document.attachEvent) document.attachEvent("onreadystatechange", initAll);
	else window.onload = initAll;
})();
