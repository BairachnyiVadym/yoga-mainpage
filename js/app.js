import {nameValidationHandler, phoneValidationHandler} from './formValidation.js';

let submitButton = document.getElementById("slider-form-submit");

submitButton.addEventListener("click", nameValidationHandler);
submitButton.addEventListener("click", phoneValidationHandler);
