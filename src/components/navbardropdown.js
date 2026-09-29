/* Close menu on clicking outside of menu */
window.onclick = function(event) {
    if (event.target.id === "navmenu-button") {
        return;
    }

    let navmenu = document.getElementById("navmenu");
    if (navmenu.classList.contains("show-nav-menu")) {
        navmenu.classList.toggle("show-nav-menu");
    }
}

/* Toggle menu */
function toggleNavMenu() {
    document.getElementById("navmenu").classList.toggle("show-nav-menu");
}

document.querySelector('#navmenu-button').addEventListener('click', toggleNavMenu);