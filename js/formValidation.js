let submitButton = document.getElementById("slider-form-submit");

submitButton.addEventListener("click", nameValidationHandler);
submitButton.addEventListener("click", phoneValidationHandler);

function nameValidationHandler() {
    let fld = document.getElementsByName("name")[0];
    let error = "";
    let illegalChars = /\W/; // allow letters, numbers, and underscores

    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter a username.\n";
        alert(error);
        return false;

    } else if ((fld.value.length < 2) || (fld.value.length > 15)) {
        fld.style.background = 'Yellow';
        error = "The username is the wrong length.\n";
        alert(error);
        return false;

    } else if (illegalChars.test(fld.value)) {
        fld.style.background = 'Yellow';
        error = "The username contains illegal characters.\n";
        alert(error);
        return false;

    } else {
        fld.style.background = "#F2F2F2";
    }
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
    } else if (!(stripped.length == 12)) {
        error = "The phone number is the wrong length. Make sure you included an area code. " +
            "Don't include plus sign('+') and parentheses ('()')\n";
        fld.style.background = 'Yellow';
        alert(error);
        return false;
    } else {
        fld.style.background = "#F2F2F2";
    }
    return true;
}