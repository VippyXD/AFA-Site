document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuButton");
    const closeBtn = document.getElementById("closeMenu");
    const sideMenu = document.getElementById("sideMenu");

    if (!menuBtn || !sideMenu || !closeBtn) return;

    menuBtn.addEventListener("click", () => {
        sideMenu.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
        sideMenu.classList.remove("open");
    });
});
