let buyNowButtons = document.getElementsByClassName("prices-button");

for (let i = 0; i < buyNowButtons.length; i++) {
    let pricesHeader = buyNowButtons[i].parentElement.firstElementChild;
    const current = buyNowButtons[i];

    current.onmouseenter = function lightingPrice() {
        pricesHeader.classList.add('lighting-price');
        current.classList.add('lighting-price');
    };

    current.onmouseleave = function lightingPrice() {
        pricesHeader.classList.remove('lighting-price');
        current.classList.remove('lighting-price');
    }
}

