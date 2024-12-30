document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const menu = document.querySelector(".menu");

    hamburgerMenu.addEventListener("click", function() {
        menu.classList.toggle("hidden");
    });

    const submenuToggles = document.querySelectorAll(".menu > li > a");

    submenuToggles.forEach(function(toggle) {
        toggle.addEventListener("click", function(event) {
            const submenu = toggle.nextElementSibling;
            if (submenu && submenu.classList.contains("submenu")) {
                event.preventDefault();
                submenu.classList.toggle("hidden");
            }
        });
    });
});
