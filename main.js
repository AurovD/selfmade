const primaryHeader = document.querySelector(".primary-header ");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-item-inactive");

navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible") ?
        navToggle.setAttribute("aria-expanded", false) :
        navToggle.setAttribute("aria-expanded", true)
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
});


function setActiveElementOnClick(elements) {
    elements.forEach((element, index) => {
        element.addEventListener('click', () => {
            // Remove "active" class from all elements
            elements.forEach((el) => {
                el.classList.remove('nav-item-active');
            });
            // Add "active" class to clicked element
            element.classList.add('nav-item-active');
        });
    });
}
setActiveElementOnClick(navItems);

