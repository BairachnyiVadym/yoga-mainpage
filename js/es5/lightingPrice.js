"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pricesCollectionEventAttach = pricesCollectionEventAttach;

function pricesCollectionEventAttach(collection) {
  var _loop = function _loop(i) {
    var pricesHeader = collection[i].parentElement.firstElementChild;
    var current = collection[i];

    current.onmouseenter = function lightingPrice() {
      pricesHeader.classList.add('lighting-price');
      current.classList.add('lighting-price');
    };

    current.onmouseleave = function lightingPrice() {
      pricesHeader.classList.remove('lighting-price');
      current.classList.remove('lighting-price');
    };
  };

  for (var i = 0; i < collection.length; i++) {
    _loop(i);
  }
}