"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleMenuHandler = toggleMenuHandler;
exports.layoutOrderHandler = layoutOrderHandler;
exports.headerCollectionEventAttach = headerCollectionEventAttach;
exports.menuLinks = exports.menuButton = void 0;
var mainMenu = document.querySelectorAll('.main-menu');
var menuButton = document.getElementById("menu-btn");
exports.menuButton = menuButton;
var menuLinks = document.querySelectorAll('.links');
exports.menuLinks = menuLinks;

function headerCollectionEventAttach(collection) {
  for (var i = 0; i < collection.length; i++) {
    collection[i].addEventListener('click', linkClickStateHandler);
  }
}

function linkClickStateHandler() {
  for (var i = 0; i < mainMenu.length; i++) {
    mainMenu[i].classList.remove("menu-open");
  }

  menuButton.checked = false;
  layoutOrderHandler();
}

function toggleMenuHandler() {
  for (var i = 0; i < mainMenu.length; i++) {
    if (menuButton.checked) {
      mainMenu[i].classList.add("menu-open");
    } else {
      mainMenu[i].classList.remove("menu-open");
    }
  }
}

function layoutOrderHandler() {
  var mobHeader = document.getElementById('mobile-header');
  var mainMenuLeft = document.getElementById('change-order');

  if (menuButton.checked) {
    mobHeader.parentNode.insertBefore(mobHeader, mainMenuLeft);
  } else {
    mobHeader.parentNode.insertBefore(mainMenuLeft, mobHeader);
  }
}