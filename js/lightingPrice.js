let buyNowButtons = document.getElementsByClassName("prices-button");

for (let i = 0; i < buyNowButtons.length; i++) {
    let pricesHeader = buyNowButtons[i].parentElement.firstElementChild;
    const current = buyNowButtons[i];

    current.onmouseenter = function lightingPrice() {
        pricesHeader.style.boxShadow = "0 0 30px rgba(83, 99, 219, 0.5)";
        current.style.boxShadow = "0 0 30px rgba(83, 99, 219, 0.5)";
    };

    current.onmouseleave = function lightingPrice() {
        pricesHeader.style.boxShadow = "";
        current.style.boxShadow = "";
    }
}

