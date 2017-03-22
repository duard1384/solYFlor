var url;
var namePage;
var imageMedio;
var portada;
var portadaDiv;
var serviceItem;
var menu;
/*menu off-canvas    */

var menu = document.getElementById("menu");

var bLazy = new Blazy({
    selector: 'img'
});

function gestosMenu() {
    var body = document.body;

    /*plugin HammerJs para gestos de dedo*/

    var gestos = new Hammer(body);

    gestos.on('swipeleft', function(ev) {
        if (document.getElementById("menu").classList.contains("active")) {
            document.getElementById("buttonDes").style.color = "white";
            document.getElementById("buttonDes").style.backgroundColor = "#FE7174";
            document.getElementById("menu").classList.toggle("active");
        }

    });
    gestos.on('swiperight', function(ev) {
        if (!document.getElementById("menu").classList.contains("active")) {
            document.getElementById("buttonDes").style.color = "#FE7174";
            document.getElementById("buttonDes").style.backgroundColor = "white";
            document.getElementById("menu").classList.toggle("active");
        }
    });
}

function menuDesplegable() {
    menu = document.getElementById("menu");
    menu.classList.toggle("active");

    if (menu.classList.contains("active") == true) {
        document.getElementById("buttonDes").style.color = "#FE7174";
        document.getElementById("buttonDes").style.backgroundColor = "white";
    } else {
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
        case " ":
            imageMedio.style.backgroundImage = 'url(image/img2.jpg)';
            break;
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
/*funcion para sacar el nombre de la pagina*/

function changePathName() {
    url = location.pathname;
    namePage = url.substring((url.lastIndexOf('/') + 1), (url.length - 5));
    changeImg(namePage);
}

function eventos() {

    var buttonDes = document.getElementById("buttonDes");
    if (document.readyState = "complete ") {
        addEventListener("load", changePathName);
        buttonDes.addEventListener('touchstart', menuDesplegable);
        document.addEventListener("DOMContentLoaded", gestosMenu);
    }
}
document.addEventListener('readystatechange', eventos);

/*
window.onload = function nameFunction() {
              <--code-->
}*/
