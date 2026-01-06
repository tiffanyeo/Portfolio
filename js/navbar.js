/**
 * navbar.js
 * -----------------------------------------
 * Builds and injects the navigation bar.
 *
 * Responsibilities:
 * - Insert navbar HTML into <header id="navbar">
 * - Later: handle sticky behavior
 * - Later: handle active section highlighting
 * - Later: handle smooth scrolling
 *
 * Imported and initialized in main.js via initNavbar().
 */

/**
 * initNavbar()
 * -----------------------------------------
 * Injects the navbar markup into the page.
 */

let lastScrollY = 0;

export function initNavbar() {
   
    const navbarContainer = document.querySelector("#navbar");
    if (!navbarContainer) return;

    navbarContainer.innerHTML = `
        <nav class="navbar">
            <div class="navbar__logo">Tiffany</div>

            <ul class="navbar__links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a class="displayNoneLink" href="#funlines">Fun Lines</a></li>
                <li><a href="#whyme">Why Me</a></li>
                <li><a class="displayNoneLink" href="#howiwork">How I Work</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a class="displayNoneLink" href="#selectedwork">Selected Work</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a class="displayNoneLink" href="#education">Education</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    `;

    const navbar = navbarContainer.querySelector(".navbar");

    // Scroll‑logic
    window.addEventListener("scroll", () => {

        const currentY = window.scrollY;

        // 1. If top = 0, hide navbar
        if (currentY === 0) {
            navbar.classList.remove("navbar--visible");
        }
        // 2. Scroll up, hide navbar
        else if (currentY > lastScrollY) {
            navbar.classList.remove("navbar--visible");
        }
        // 3. Scroll up, show navbar
        else {
            navbar.classList.add("navbar--visible");
        }

        lastScrollY = currentY;
    });

}
