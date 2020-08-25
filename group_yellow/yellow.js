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
		case "учиться": {
			check(1);
			break;
		}

		case "ты": {
			check(2);
			break;
		}

		case "начинаешь,": {
			check(3);
			break;
		}

		case "к новым": {
			check(4);
			break;
		}

		case "знаниям": {
			check(5);
			break;
		}

		case "путь": {
			check(6);
			break;
		}
		case "открываешь!": {
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