let modal = document.getElementById('myModal');
let modalImg = document.getElementById("img01");
let span = document.getElementsByClassName("close")[0];

let zoomIcon = document.getElementById("i-1");
zoomIcon.addEventListener("click", modalHandler);

function modalHandler(){
    modal.style.display = "block";
    /*modalImg.src = this.src;*/
}

span.onclick = function() {
    modal.style.display = "none";
};