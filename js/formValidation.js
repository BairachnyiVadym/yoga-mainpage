let submitButton = document.getElementById("slider-form-submit");
let nameCheck, phoneCheck, accept = "";

submitButton.addEventListener("click", nameValidationHandler);
submitButton.addEventListener("click", phoneValidationHandler);

const setErrorState = (errorText, input) => {
    input.style.background = 'Yellow';
    return alert(errorText);
};

function nameValidationHandler() {
    let fld = document.getElementsByName("name")[0];
    let legalChars = /^[a-zA-Z][a-zA-Z\s]*$/; // allow letters and spaces

    if (!fld.value) {
        return setErrorState("You didn't enter a username.\n", fld);
    }

    if ((fld.value.length < 2) || (fld.value.length > 20)) {
        return setErrorState("The username is the wrong length.\n", fld);
    }

    if (!fld.value.match(legalChars)) {
        return setErrorState("The username contains illegal characters.\n", fld);
    }

    fld.style.background = "#F2F2F2";
    nameCheck = true;
    return true;
}

function phoneValidationHandler() {
    let fld = document.getElementsByName("phone")[0];
    let error = "";
    let stripped = fld.value.replace(/[\(\)\.\-\ ]/g, '');

    if (fld.value == "") {
        error = "You didn't enter a phone number.\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;

    } else if (isNaN(parseInt(stripped))) {
        error = "The phone number contains illegal characters. Don't include dash (-)\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;
    } else if (stripped.length != 12) {
        error = "The phone number is the wrong length. Make sure you included an area code. " +
            "Don't include plus sign('+') and parentheses ('()')\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;
    } else {
        fld.style.background = "#F2F2F2";
    }
    phoneCheck = true;

    if (nameCheck && phoneCheck) {
        accept = "Your information was accepted. Please, wait for a call from our administrator!\n";
        alert(accept);
    }
    return true;
}


// TODO phoneValidationHandler - needs to be refactored now!!!
