var url;
var namePage;
var imageMedio;
var portada;
var portadaDiv;
var serviceItem;
var menu;
/*menu off-canvas    */

var menu = document.getElementById("menu");

function menuDesplegable() {
    menu = document.getElementById("menu");
    menu.classList.toggle("active");

    if (menu.classList.contains("active") == true) {
        document.getElementById("buttonDes").style.color = "#FE7174";
        document.getElementById("buttonDes").style.backgroundColor = "white";
    } else{
        document.getElementById("buttonDes").style.color = "white";
    document.getElementById("buttonDes").style.backgroundColor = "#FE7174";
    }
}


function changeImg(namePag) {
    imageMedio = document.getElementById("changeImg");
    portada = document.getElementById("portada");
    portadaDiv = document.getElementById("portadaDiv");
    serviceItem = document.getElementsByClassName("serviceItem");

    switch (namePag) {
        case "index":
            imageMedio.style.backgroundImage = 'url(image/img2.jpg)';

            break;
        case "finca":
            imageMedio.style.backgroundImage = 'url(image/img3.jpg)';
            break;
        case "eventos":
            imageMedio.style.backgroundImage = 'url(image/img4.jpg)';
            break;
        case "servicios":
            imageMedio.style.backgroundImage = 'url(image/img5.jpg)';
            break;
        default:
            break;
    }
}

function changePathName() {
    url = location.pathname;
    namePage = url.substring((url.lastIndexOf('/') + 1), (url.length - 5));
    changeImg(namePage);
}

function eventos() {
    var buttonDes = document.getElementById("buttonDes");
    if (document.readyState = "interactive ") {
        addEventListener("load", changePathName);
        buttonDes.addEventListener('touchstart', menuDesplegable);
    }
}
document.addEventListener('readystatechange', eventos);

/*
window.onload = function nameFunction() {
              <--code-->
}*/