let mainMenu = document.querySelectorAll('.main-menu');
let menuButton = document.getElementById("menu-btn");
let menuLinks = document.querySelectorAll('.links');

function headerCollectionEventAttach(collection) {
    for (let i = 0; i < collection.length; i++) {
        collection[i].addEventListener('click', linkClickStateHandler);
    }
}

function linkClickStateHandler() {
    for (let i = 0; i < mainMenu.length; i++) {
        mainMenu[i].classList.remove("menu-open");
    }
    menuButton.checked = false;
    layoutOrderHandler();
}

function toggleMenuHandler() {
    for(let i = 0; i < mainMenu.length; i++) {
        if(menuButton.checked) {
            mainMenu[i].classList.add("menu-open");
        } else {
            mainMenu[i].classList.remove("menu-open");
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

export {menuButton, menuLinks, toggleMenuHandler, layoutOrderHandler, headerCollectionEventAttach};