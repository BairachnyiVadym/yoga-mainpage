let modal = document.getElementById('myModal');
let modalImg = document.getElementById("img01");
let closeButton = document.getElementsByClassName("close")[0];

let zoomIcons = document.getElementsByClassName("icon");

for (let i = 0; i < zoomIcons.length; i++) {
    zoomIcons[i].onclick = function(){
        let imgSrc = zoomIcons[i].parentElement.parentElement.firstElementChild.src;
        modal.style.display = "block";
        modalImg.src = imgSrc;
    }
}

closeButton.onclick = function() {
    modal.style.display = "none";
};