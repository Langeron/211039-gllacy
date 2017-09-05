var link = document.querySelector(".address-btn");
var feedbackPopup = document.querySelector(".modal-feedback");
var modalClose = document.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.add("modal-show");
});

modalClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	feedbackPopup.classList.remove("modal-show");	
})