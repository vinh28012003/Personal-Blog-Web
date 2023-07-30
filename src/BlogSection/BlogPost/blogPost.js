let openMenu = document.querySelector(".navbar .navOpen"); 
let closeMenu = document.querySelector(".navbar .navClose"); 
let navigation = document.querySelector(".navbar .menu"); 


openMenu.addEventListener("click", () => {
	navigation.style.right = "0";
});

closeMenu.addEventListener("click", () => {
	navigation.style.right = "-100%";
});