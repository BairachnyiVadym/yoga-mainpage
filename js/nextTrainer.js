let thumbSlideIndex = 1, mainSlideIndex = 2;

thumbNextTrainer(thumbSlideIndex);
nextTrainer(mainSlideIndex);

function plusSlides(n) {
    thumbNextTrainer(thumbSlideIndex += n);
    nextTrainer(mainSlideIndex += n);
}

function currentSlide(n) {
    thumbNextTrainer(thumbSlideIndex = n);
    nextTrainer(mainSlideIndex = n+1);
}

function thumbNextTrainer(n) {
    let slideThumbs = document.getElementsByClassName("change-trainer");

    if (n > slideThumbs.length) {thumbSlideIndex = 1}
    if (n < 1) {thumbSlideIndex = slideThumbs.length}

    for (let i = 0; i < slideThumbs.length; i++) {
        slideThumbs[i].style.display = "none";
    }

    slideThumbs[thumbSlideIndex-1].style.display = "block";
}

function nextTrainer(n) {
    let i;
    let mainSlides = document.getElementsByClassName("comments");
    let bullets = document.getElementsByClassName("dot");

    if (n > mainSlides.length) {mainSlideIndex = 1}
    if (n < 1) {mainSlideIndex = mainSlides.length}

    for (i = 0; i < mainSlides.length; i++) {
        mainSlides[i].style.display = "none";
    }

    for (i = 0; i < bullets.length; i++) {
        bullets[i].className = bullets[i].className.replace(" active", "");
    }

    mainSlides[mainSlideIndex-1].style.display = "block";
    bullets[mainSlideIndex-1].className += " active";
}