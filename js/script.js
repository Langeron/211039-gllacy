var link = document.querySelector(".address-btn");
var feedbackPopup = document.querySelector(".modal-feedback");
var modalClose = document.querySelector(".modal-close");
var form = feedbackPopup.querySelector("form");
var login = feedbackPopup.querySelector("[name=name]");
var password = feedbackPopup.querySelector("[name=mail]");
var blackout = document.querySelector(".wrap-blackout")

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.add("modal-show");
	blackout.classList.add("blackout");
	login.focus();
});

modalClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.remove("modal-show");	
	feedbackPopup.classList.remove("modal-error");
	blackout.classList.remove("blackout");
})


form.addEventListener("submit", function (evt) {
	if (!name.value || !mail.value) {
		evt.preventDefault();
		feedbackPopup.classList.remove("modal-error");
		feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
		feedbackPopup.classList.add("modal-error");
	}  
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (feedbackPopup.classList.contains("modal-show")) {
			feedbackPopup.classList.remove("modal-show");
			feedbackPopup.classList.remove("modal-error");
			blackout.classList.remove("blackout");
		}
	}
});

// Карта

ymaps.ready(init);

function init() {

	var myMap;

	myMap = new ymaps.Map("map", {
		center: [59.93937397, 30.32929868],
		zoom: 16,
		controls: []
	});

	var myPlacemark = new ymaps.Placemark([59.93873873, 30.32299013] , {}, {
		iconLayout: "default#image",
		iconImageHref: "img/pin.png",
		iconImageSize: [218, 142],
		iconImageOffset: [-40, -131] });     

	myMap.geoObjects.add(myPlacemark);
}