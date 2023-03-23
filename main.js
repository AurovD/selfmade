const primaryHeader = document.querySelector(".primary-header ");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".navigation");
const navItem = document.querySelector(".nav-item");

navToggle.addEventListener("click", () => {
    primaryNav.hasAttribute("data-visible") ?
        navToggle.setAttribute("aria-expanded", false) :
        navToggle.setAttribute("aria-expanded", true)
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
});

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

if (isMobileDevice()) {
    alert("its mobile")
} else {
    console.log("its desktop")
}

