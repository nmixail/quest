"use strict";

function show() {
	count++;
	document.querySelector(`div.class.stage_${count}`).classList.add("b-show");
	document.querySelector(`div.arrow.stage_${count}`).classList.add("b-show");
	if (count < 8) {
		input.focus();
	}
}

function error_show() {
	bg_layer.style.display = "block";
	modal_error.style.display = "block";
}

function check(number) {
	if (count == number) {
		show();
		if (count == 7) {
			document.querySelector(".secret_word").style.display = "none";
			document.querySelector(".remember").classList.add("b-show");
		}
	} else {
		error_show();
	}
}