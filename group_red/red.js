"use strict";
let button = document.querySelector("button");
let input = document.querySelector("input");
let count = 1;

button.onclick = function (event) {
	let text = input.value.toLowerCase();
	if (text.endsWith(" ")) {
		text = text.slice(0, text.length - 1);
	}
	input.value = "";
	switch (text) {
		case "одетый": {
			if (count == 1) {
				count++;
				document.querySelector(`div.class.stage_${count}`).classList.add('b-show');
				document.querySelector(`div.arrow.stage_${count}`).classList.add('b-show');
			}
			break;
		}

		case "в": {
			if (count == 2) {
				count++;
				document.querySelector(`div.class.stage_${count}`).classList.add('b-show');
				document.querySelector(`div.arrow.stage_${count}`).classList.add('b-show');
			}
			break;
		}

		case "форму,": {
			if (count == 3) {
				count++;
				document.querySelector(`div.class.stage_${count}`).classList.add('b-show');
				document.querySelector(`div.arrow.stage_${count}`).classList.add('b-show');
			}
			break;
		}

		case "спешишь начать": {
			if (count == 4) {
				count++;
				document.querySelector(`div.class.stage_${count}`).classList.add('b-show');
				document.querySelector(`div.arrow.stage_${count}`).classList.add('b-show');
			}
			break;
		}

		case "еще один": {
			if (count == 5) {
				count++;
				document.querySelector(`div.class.stage_${count}`).classList.add('b-show');
				document.querySelector(`div.arrow.stage_${count}`).classList.add('b-show');
			}
			break;
		}

		case "учебный год!": {
			if (count == 6) {
				count++;
				document.querySelector(`div.class.stage_${count}`).classList.add('b-show');
				document.querySelector(`div.arrow.stage_${count}`).classList.add('b-show');
			}
			break;
		}

	}
};