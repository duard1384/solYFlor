var url;
var namePage;
var imageMedio

function typeLetter() {
    /*  var h2 = document.querySelectorAll("h2");
      var h1 = document.querySelectorAll("h1");
      for (var i = 0; i < h1.length; i++) {
          h1[i].style.fontFamily = "'Kaushan Script', cursive";
          h1[i].style.color = "#FE7174 !important";
      }
      for (var j = 0; j < h2.length; j++) {
          h2[j].style.color = "#FE7174";
          h2[j].style.fontFamily = "Kaushan Script, cursive";
      }*/
}

function changeImg(namePag) {
    imageMedio = document.getElementById("changeImg");
    switch (namePag) {
        case "index":
            imageMedio.style.backgroundImage = 'url(image/img2.jpg)';
            document.getElementById("portadaDiv").style.fontSize = "6.0em";
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
        case "contacto":
            document.getElementById("portada").style.backgroundImage = "url(image/img7.jpg)";
            document.getElementById("portada").style.height = "250px";
            document.getElementById("portadaDiv").style.width = "auto";
            document.getElementById("portadaDiv").style.marginTop = "50px";
            document.getElementById("portadaDiv").style.marginLeft = "auto";
            document.getElementById("portadaDiv").style.textAlign = "center";
            document.getElementsByClassName("serviceItem")[0].style.height = "550px";
            document.getElementsByClassName("serviceItem")[1].style.height = "550px";
            if (window.innerWidth < 800) {
                document.getElementById("portadaDiv").style.fontSize = "2.0em";
            } else
                document.getElementById("portadaDiv").style.fontSize = "3.0em";
            break;
        default:
            imageMedio.style.backgroundColor = "red";
    }
}

function changePathName() {
    url = location.pathname;
    namePage = url.substring((url.lastIndexOf('/') + 1), (url.length - 5));
    changeImg(namePage);
}

function eventos() {
    if (document.readyState = "complete ") {
        addEventListener('load', typeLetter);
        addEventListener("load", changePathName);
    }
}
document.addEventListener('readystatechange', eventos);

/*
window.onload = function what() {
    document.getElementById("demo").innerHTML = "My First Page";
    document.getElementsByClassName("portada").innerHTML = "Date();";
}
what();
"Kaushan Script";
function que() {
    document.getElementById("que").innerHTML = "My First click";
}*/