const view = document.querySelector("header");
const hiddenMenu = document.querySelector(".hidden_menu");
const allmenu = document.querySelector(".all_menu");

function active() {
    hiddenMenu.classList.toggle('active');
}

view.addEventListener("mouseover", active);
allmenu.addEventListener("click", active);