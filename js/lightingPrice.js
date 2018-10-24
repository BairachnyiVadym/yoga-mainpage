let buyNowButtons = document.getElementsByClassName("prices-button");

for (let i = 0; i < buyNowButtons.length; i++) {
    let pricesHeader = buyNowButtons[i].parentElement.firstElementChild;

    buyNowButtons[i].onmouseenter = function lightingPrice() {
        pricesHeader.style.boxShadow = "0 0 30px rgba(83, 99, 219, 0.5)";
        buyNowButtons[i].style.boxShadow = "0 0 30px rgba(83, 99, 219, 0.5)";
    };

    buyNowButtons[i].onmouseleave = function lightingPrice() {
        pricesHeader.style.boxShadow = "";
        buyNowButtons[i].style.boxShadow = "";
    }
}

