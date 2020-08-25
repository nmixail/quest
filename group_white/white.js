"use strict";
let button = document.querySelector("button");
let input = document.querySelector("input");
let btn_close = document.querySelector(".modal_error button");
let modal_error = document.querySelector(".modal_error");
let bg_layer = document.querySelector(".bg_layer");
let count = 1;

input.focus();

button.onclick = function () {
	let text = input.value.toLowerCase();
	if (text.endsWith(" ")) {
		text = text.slice(0, text.length - 1);
	}
	input.value = "";
	switch (text) {
		case "школа": {
			check(1);
			break;
		}

		case "тебя": {
			check(2);
			break;
		}

		case "с": {
			check(3);
			break;
		}

		case "нетерпением,": {
			check(4);
			break;
		}

		case "в класс пятый": {
			check(5);
			break;
		}

		case "ступай": {
			check(6);
			break;
		}
		case "ты смелее!": {
			check(7);
			break;
		}
		default: {
			error_show();
		}
	}
	document.body.scrollIntoView(false);
};

btn_close.onclick = function () {
	bg_layer.style.display = "none";
	modal_error.style.display = "none";
	input.focus();
};