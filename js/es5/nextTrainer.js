"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blockQuotesCollectionEventAttach = blockQuotesCollectionEventAttach;
exports.bullets = void 0;
var thumbSlideIndex = 2,
    mainSlideIndex = 1;
var bullets = document.getElementsByClassName("dot");
exports.bullets = bullets;

function blockQuotesCollectionEventAttach(coll, coll2) {
  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', currentSlide);
    coll2[i].addEventListener('click', plusSlides);
  }
} //init with default index values


thumbNextTrainer(thumbSlideIndex);
nextTrainer(mainSlideIndex);

function plusSlides(event) {
  var currentButtonData = parseInt(event.target.getAttribute('data-button-index'), 10);
  thumbNextTrainer(thumbSlideIndex += currentButtonData);
  nextTrainer(mainSlideIndex += currentButtonData);
}

function currentSlide(event) {
  var currentBulletData = parseInt(event.target.getAttribute('data-bullet-index'), 10);
  thumbNextTrainer(thumbSlideIndex = currentBulletData + 1);
  nextTrainer(mainSlideIndex = currentBulletData);
}

function thumbNextTrainer(n) {
  var slideThumbs = document.getElementsByClassName("change-trainer");
  var len = slideThumbs.length;

  if (n > len) {
    thumbSlideIndex = 1;
  }

  if (n < 1) {
    thumbSlideIndex = len;
  }

  for (var i = 0; i < len; i++) {
    slideThumbs[i].classList.remove("show-slides");
    slideThumbs[i].classList.add("hide-slides");
  }

  slideThumbs[thumbSlideIndex - 1].classList.remove("hide-slides");
  slideThumbs[thumbSlideIndex - 1].classList.add("show-slides");
}

function nextTrainer(n) {
  var mainSlides = document.getElementsByClassName("comments");
  var i,
      len = mainSlides.length;

  if (n > len) {
    mainSlideIndex = 1;
  }

  if (n < 1) {
    mainSlideIndex = len;
  }

  for (i = 0; i < len; i++) {
    mainSlides[i].classList.remove("show-slides");
    mainSlides[i].classList.add("hide-slides");
  } //bullets defined in the outer scope


  for (i = 0; i < bullets.length; i++) {
    bullets[i].className = bullets[i].className.replace(" active", "");
  }

  mainSlides[mainSlideIndex - 1].classList.remove("hide-slides");
  mainSlides[mainSlideIndex - 1].classList.add("show-slides");
  bullets[mainSlideIndex - 1].className += " active";
}