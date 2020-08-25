"use strict";
let button = document.querySelector("button");
let input = document.querySelector("input");

button.onclick = function () {
	let text = input.value.toLowerCase();
	if (text.endsWith(" ")) {
		text = text.slice(0, text.length - 1);
	}
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
			window.location.href = "group_brown/index.html";
			break;
		}
		default: {
			alert("Неверный код!");
		}
	}
};