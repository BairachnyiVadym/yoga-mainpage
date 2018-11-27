let buyNowButtons = document.getElementsByClassName("prices-button");

function pricesCollectionEventAttach(collection) {
    for (let i = 0; i < collection.length; i++) {
        const pricesHeader = collection[i].parentElement.firstElementChild;
        const current = collection[i];

        current.onmouseenter = function lightingPrice() {
            pricesHeader.classList.add('lighting-price');
            current.classList.add('lighting-price');
        };

        current.onmouseleave = function lightingPrice() {
            pricesHeader.classList.remove('lighting-price');
            current.classList.remove('lighting-price');
        }
    }
}

export {buyNowButtons, pricesCollectionEventAttach};

