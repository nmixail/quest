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
		case "желтый": {
			window.location.href = "group_yellow/index.html";
			break;
		}
		case "зеленый": {
			window.location.href = "group_green/index.html";
			break;
		}
		case "белый": {
			window.location.href = "group_white/index.html";
			break;
		}
		case "синий": {
			window.location.href = "group_blue/index.html";
			break;
		}
		case "коричневый": {
			window.location.href = "group_brown/index.html";
			break;
		}
		default: {
			alert("Неверный код!");
		}
	}
};