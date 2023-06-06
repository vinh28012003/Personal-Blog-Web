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
    var path = String(window.location.href);
    var lastFive = path.substr(path.length - 8);
    
    console.log(lastFive);
    if (lastFive == "ies.html") {
        
        document.getElementById("mangas").style.background = "#0005";
    } else if (lastFive=="hwa.html") {
        document.getElementById("manhwas").style.background = "#0005";
    }else if (lastFive=="how.html") {
        document.getElementById("tvshows").style.background = "#0005";
    }else if (lastFive=="ame.html") {
        document.getElementById("videogames").style.background = "#0005";
    }
}

