/* main.js */

// Navbar
import { initNavbar } from './navbar.js';

// Sections
import { renderHero } from "./components/hero.js";
import { initHeroCarousel } from "./components/hero.js";
import { renderAbout } from "./components/about.js";
import { renderFunlines } from "./components/funlines.js";
import { renderWhyMe } from "./components/whyme.js";
import { renderHowIWork } from "./components/howiwork.js";
import { renderSkills } from "./components/skills.js";
import { renderSelectedWork } from "./components/selectedwork.js";
import { renderProjects } from "./components/projects.js";
import { renderEducation } from "./components/education.js";
import { renderContact } from "./components/contact.js";

/** 
 * initApp()
 * -----------------------------------------
 * Runs all initialization logic.
 */
async function initApp() {

    initNavbar();
    await renderHero();
    initHeroCarousel();
    renderAbout();
    renderFunlines();
    renderWhyMe();
    renderHowIWork();
    renderSkills();
    renderSelectedWork();
    renderProjects();
    renderEducation();
    renderContact();

}

// Change document title on tab change
const originalTitle = document.title;
document.addEventListener( "visibilitychange", () => {
    if (document.hidden) {
        document.title = "You still there..?";
    } else {
        document.title = originalTitle;
    }
})


// When file is loaded, run initApp()
document.addEventListener("DOMContentLoaded", initApp);