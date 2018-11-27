"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.galleryCollectionEventAttach = galleryCollectionEventAttach;
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var closeButton = document.querySelector(".close");

function galleryCollectionEventAttach(collection) {
  var _loop = function _loop(i) {
    collection[i].onclick = function () {
      modalImg.src = collection[i].parentElement.parentElement.firstElementChild.src;
      modal.classList.add('show-modal');
    };
  };

  for (var i = 0; i < collection.length; i++) {
    _loop(i);
  }

  closeButton.onclick = function () {
    modal.classList.remove('show-modal');
  };
}