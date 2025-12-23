const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");

menuButton.addEventListener("click", () => {
    sideMenu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
    sideMenu.classList.remove("open");
});
