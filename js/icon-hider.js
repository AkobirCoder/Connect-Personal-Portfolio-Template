function hideIcons() {
    if (window.innerWidth > 991 && window.innerWidth < 1199) {
        document.querySelectorAll(".customAbout .container .row .col-10 .about-section__card-item .about-section__card-btn i")
            .forEach(element => {
                element.style.display = "none";
        });
    } else {
        document.querySelectorAll(".customAbout .container .row .col-10 .about-section__card-item .about-section__card-btn i")
            .forEach(element => {
                element.style.display = "";
        });
    }
}

hideIcons();

window.addEventListener("resize", hideIcons);