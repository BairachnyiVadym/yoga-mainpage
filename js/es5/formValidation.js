"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nameValidationHandler = nameValidationHandler;
exports.phoneValidationHandler = phoneValidationHandler;
var nameCheck, phoneCheck;

var setErrorState = function setErrorState(errorText, input) {
  input.style.background = 'Yellow';
  return alert(errorText);
};

function nameValidationHandler() {
  var fld = document.querySelector("input[name=name]");
  var fldValue = document.querySelector("input[name=name]").value;
  var legalChars = /^[a-zA-Z][a-zA-Z\s]*$/; // allow letters and spaces

  if (!fldValue) {
    return setErrorState("You didn't enter a username.\n", fld);
  }

  if (fldValue.length < 2 || fldValue.length > 20) {
    return setErrorState("The username is the wrong length.\n", fld);
  }

  if (!fldValue.match(legalChars)) {
    return setErrorState("The username contains illegal characters.\n", fld);
  }

  fld.style.background = "#F2F2F2";
  nameCheck = true;
}

function phoneValidationHandler() {
  var fld = document.querySelector("input[name=phone]");
  var stripped = fld.value.replace(/[\(\)\.\-\ ]/g, '');

  if (fld.value === "") {
    return setErrorState("You didn't enter a phone number.\n", fld);
  }

  if (isNaN(parseInt(stripped))) {
    return setErrorState("The phone number contains illegal characters. Don't include dash (-)\n", fld);
  }

  if (stripped.length !== 12) {
    return setErrorState("The phone number is the wrong length. Make sure you included an area code. " + "Don't include plus sign('+') and parentheses ('()')\n", fld);
  }

  fld.style.background = "#F2F2F2";
  phoneCheck = true;

  if (nameCheck && phoneCheck) {
    alert("Your information was accepted. Please, wait for a call from our administrator!\n");
  }
}