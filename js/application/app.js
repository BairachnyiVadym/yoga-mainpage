import {submitButton, nameValidationHandler, phoneValidationHandler} from '../formValidation.js';
import {buyNowButtons, pricesCollectionEventAttach} from '../lightingPrice.js';
import {zoomIcons, galleryCollectionEventAttach} from '../modalBox.js';
import {slideShowButtons, aboutUsCollectionEventAttach} from '../slideShow.js';
import {bullets, blockquoteButtons, blockQuotesCollectionEventAttach} from '../nextTrainer.js';
import {menuButton, menuLinks, toggleMenuHandler, layoutOrderHandler, headerCollectionEventAttach} from '../toggleMenu.js';

submitButton.addEventListener("click", nameValidationHandler);
submitButton.addEventListener("click", phoneValidationHandler);

pricesCollectionEventAttach(buyNowButtons);

galleryCollectionEventAttach(zoomIcons);

aboutUsCollectionEventAttach(slideShowButtons);

blockQuotesCollectionEventAttach(bullets, blockquoteButtons);

menuButton.addEventListener("click", toggleMenuHandler);
menuButton.addEventListener("click", layoutOrderHandler);
headerCollectionEventAttach(menuLinks);
