"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aboutUsCollectionEventAttach = aboutUsCollectionEventAttach;
var slideIndex = 1;
showSlides(slideIndex);

function aboutUsCollectionEventAttach(collection) {
  for (var i = 0; i < collection.length; i++) {
    collection[i].addEventListener('click', changeSlides);
  }
}

function changeSlides(event) {
  var currentButtonData = parseInt(event.target.getAttribute('data-button-index'), 10);
  showSlides(slideIndex += currentButtonData);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("show-slides");
    slides[i].classList.add("hide-slides");
  }

  slides[slideIndex - 1].classList.remove("hide-slides");
  slides[slideIndex - 1].classList.add("show-slides");
}