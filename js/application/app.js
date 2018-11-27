import {nameValidationHandler, phoneValidationHandler} from '../formValidation.js';
import {pricesCollectionEventAttach} from '../lightingPrice.js';
import {galleryCollectionEventAttach} from '../modalBox.js';
import {aboutUsCollectionEventAttach} from '../slideShow.js';
import {bullets, blockQuotesCollectionEventAttach} from '../nextTrainer.js';
import {menuButton, toggleMenuHandler, layoutOrderHandler, headerCollectionEventAttach} from '../toggleMenu.js';

let submitButton = document.getElementById("slider-form-submit");
let buyNowButtons = document.getElementsByClassName("prices-button");
let zoomIcons = document.getElementsByClassName("icon");
let slideShowButtons = document.getElementById('slide-show').children;
let blockquoteButtons = document.getElementById("blockquote-buttons").children;
let menuLinks = document.querySelectorAll('.links');

submitButton.addEventListener("click", nameValidationHandler);
submitButton.addEventListener("click", phoneValidationHandler);

pricesCollectionEventAttach(buyNowButtons);

galleryCollectionEventAttach(zoomIcons);

aboutUsCollectionEventAttach(slideShowButtons);

blockQuotesCollectionEventAttach(bullets, blockquoteButtons);

menuButton.addEventListener("click", toggleMenuHandler);
menuButton.addEventListener("click", layoutOrderHandler);
headerCollectionEventAttach(menuLinks);
