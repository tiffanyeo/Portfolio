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
export function initNavbar() {

    const navbar = document.querySelector("#navbar");

    if (!navbar) return;

    navbar.innerHTML = `
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
                <li><a hclass="displayNoneLink" ref="#education">Education</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    `;

    console.log("from navbar.js in initNavbar()");
}