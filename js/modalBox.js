let modal = document.getElementById('myModal');
let modalImg = document.getElementById("img01");
let closeButton = document.querySelector(".close");

let zoomIcons = document.getElementsByClassName("icon");

function galleryCollectionEventAttach(collection) {
    for (let i = 0; i < collection.length; i++) {
        collection[i].onclick = function(){
            modalImg.src = collection[i].parentElement.parentElement.firstElementChild.src;
            modal.classList.add('show-modal');
        }
    }

    closeButton.onclick = function() {
        modal.classList.remove('show-modal');
    }
}

export {zoomIcons, galleryCollectionEventAttach};

