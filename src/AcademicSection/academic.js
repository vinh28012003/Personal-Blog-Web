window.onscroll = function () { scrollFunction() };
window.onload = function () {navFunction()};
function scrollFunction() {

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("academic_nav").style.background = "#0005";
        
    } else {
        document.getElementById("academic_nav").style.background = "";
    }


}


function navFunction() {
    var path = String(window.location.href);
    var lastFive = path.substr(path.length - 8);
    
    console.log(lastFive);
    if (lastFive == "dia.html") {
        
        document.getElementById("about").style.background = "#0005";
    } else if (lastFive=="ool.html") {
        document.getElementById("school").style.background = "#0005";
    }else if (lastFive=="ces.html") {
        document.getElementById("experiences").style.background = "#0005";
    }else if (lastFive=="ect.html") {
        document.getElementById("personalProject").style.background = "#0005";
    }
}