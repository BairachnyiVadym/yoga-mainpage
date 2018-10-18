let submitButton = document.getElementById("slider-form-submit");

submitButton.addEventListener("click", nameValidationHandler);

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