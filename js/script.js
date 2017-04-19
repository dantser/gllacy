var clickSignin = document.querySelector(".header-signin");
var enterPopup = document.querySelector(".modal-enter");
var overlay = document.querySelector(".modal-overlay");
var activeLink = clickSignin.querySelector("a");
var changeBackground1 = document.querySelector("#btn-1");
var changeBackground2 = document.querySelector("#btn-2");
var changeBackground3 = document.querySelector("#btn-3");

clickSignin.addEventListener("click", function (event) {
	"use strict";
	event.preventDefault();
	activeLink.classList.add("active-enter");
	overlay.classList.add("modal-overlay-show");
	enterPopup.classList.add("modal-enter-show");
});

overlay.addEventListener("click", function (event) {
	"use strict";
	event.preventDefault();
	activeLink.classList.remove("active-enter");
	overlay.classList.remove("modal-overlay-show");
	enterPopup.classList.remove("modal-enter-show");
});

changeBackground1.addEventListener("click", function (event) {
	"use strict";
	document.querySelector("body").style.backgroundImage = "url(img/mainbackground.jpg)";
});
changeBackground2.addEventListener("click", function (event) {
	"use strict";
	document.querySelector("body").style.backgroundImage = "url(img/background2.png)";
});
changeBackground3.addEventListener("click", function (event) {
	"use strict";
	document.querySelector("body").style.backgroundImage = "url(img/background3.jpg)";
});