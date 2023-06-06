window.onscroll = function () { scrollFunction() };
window.onload = function () {navFunction()};
function scrollFunction() {

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("hobbies_nav").style.background = "#0005";
        
    } else {
        document.getElementById("hobbies_nav").style.background = "";
    }


}


function navFunction() {
    console.log(window.location.href);
    var path = window.location.href;
    if (path == "http://127.0.0.1:5500/src/HobbiesSection/hobbies.html" || path == "http://127.0.0.1:5500/src/HobbiesSection/hobbies.html#mangas") {
        document.getElementById("mangas").style.background = "#0005";
    } else if (path=="http://127.0.0.1:5500/src/HobbiesSection/HobbiesCategories/manhwa.html") {
        document.getElementById("manhwas").style.background = "#0005";
    }else if (path=="http://127.0.0.1:5500/src/HobbiesSection/HobbiesCategories/tvshow.html") {
        document.getElementById("tvshows").style.background = "#0005";
    }else if (path=="http://127.0.0.1:5500/src/HobbiesSection/HobbiesCategories/videogame.html") {
        document.getElementById("videogames").style.background = "#0005";
    }
}

