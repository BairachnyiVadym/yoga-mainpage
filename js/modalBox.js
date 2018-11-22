let modal = document.getElementById('myModal');
let modalImg = document.getElementById("img01");
let closeButton = document.querySelector(".close");

let zoomIcons = document.getElementsByClassName("icon");

for (let i = 0; i < zoomIcons.length; i++) {
    zoomIcons[i].onclick = function(){
        modalImg.src = zoomIcons[i].parentElement.parentElement.firstElementChild.src;
        modal.classList.add('show-modal');
    }
}

closeButton.onclick = function() {
    modal.classList.remove('show-modal');
};