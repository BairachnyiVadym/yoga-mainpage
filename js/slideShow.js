let slideIndex = 1;
showSlides(slideIndex);

let slideShowButtons = document.getElementById('slide-show').children;

for (let i = 0; i < slideShowButtons.length; i++) {
    slideShowButtons[i].addEventListener('click', changeSlides);
}

function changeSlides(event) {
    let currentButtonData = parseInt(event.target.getAttribute('data-button-index'), 10);
    showSlides(slideIndex += currentButtonData);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show-slides");
        slides[i].classList.add("hide-slides");
    }

    slides[slideIndex-1].classList.remove("hide-slides");
    slides[slideIndex-1].classList.add("show-slides");
}