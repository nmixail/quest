"use strict";
let button = document.querySelector("button");
let input = document.querySelector("input");
let btn_close = document.querySelector(".modal_error button");
let modal_error = document.querySelector(".modal_error");
let bg_layer = document.querySelector(".bg_layer");

button.onclick = function () {
	let text = input.value.toLowerCase();
	if (text.endsWith(" ")) {
		text = text.slice(0, text.length - 1);
	}
	input.value = "";
	switch (text) {
		case "ты в": {
			window.location.href = "group_red/index.html";
			break;
		}
		case "в пятом классе": {
			window.location.href = "group_yellow/index.html";
			break;
		}
		case "ты в пятый": {
			window.location.href = "group_green/index.html";
			break;
		}
		case "ждет": {
			window.location.href = "group_white/index.html";
			break;
		}
		case "учебный": {
			window.location.href = "group_blue/index.html";
			break;
		}
		case "в пятый": {
			window.location.href = "group_black/index.html";
			break;
		}
		default: {
			error_show();
		}
	}
};

btn_close.onclick = function () {
	bg_layer.style.display = "none";
	modal_error.style.display = "none";
	input.focus();
};