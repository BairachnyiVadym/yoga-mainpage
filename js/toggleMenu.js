let menuButton = document.getElementById("menu-btn");

menuButton.addEventListener("click", toggleMenuHandler);
menuButton.addEventListener("click", layoutOrderHandler);

let mainMenu = document.querySelectorAll('.main-menu');
let menuLinks = document.querySelectorAll('.links');

for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onclick = function () {
        mainMenu[0].style.maxHeight = "";
        mainMenu[1].style.maxHeight = "";
        menuButton.checked = false;
        layoutOrderHandler();
    }
}

function toggleMenuHandler() {
    for(let i = 0; i < mainMenu.length; i++) {
        if(menuButton.checked) {
            mainMenu[i].style.maxHeight = "240px";
        } else {
            mainMenu[i].style.maxHeight = "";
        }
    }
}

function layoutOrderHandler() {
    let mobHeader = document.getElementById('mobile-header');
    let mainMenuLeft = document.getElementById('change-order');

    if(menuButton.checked) {
        mobHeader.parentNode.insertBefore(mobHeader, mainMenuLeft);
    } else {
        mobHeader.parentNode.insertBefore(mainMenuLeft, mobHeader);
    }
}