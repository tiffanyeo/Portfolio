/* main.js */

/* init, imports, eventlisterners, etc. */

/* 
import { initNavbar } from './navbar.js');
import { initFooter } from './footer.js';
...
import { renderHero } from './components/hero.js';
...
*/

/* 
renderHero();
...
initNavbar();
initFooter();
...
*/

/* TODO: import navbar -logic */
/* TODO: import contact -logic */
/* TODO: import render funcs 
    * hero
    * about
    * funlines
    * whyme
    * howiwork
    * skills
    * selectedwork
    * projects
    * education
    * contact
*/

// Navbaar
import { initNavbar } from './navbar.js';

// Sections
import { renderHero } from "./components/hero.js"; 
import { renderAbout } from "./components/about.js"; 
import { renderFunlines } from "./components/funlines.js"; 
import { renderWhyMe } from "./components/whyme.js"; 
import { renderHowIWork } from "./components/howiwork.js"; 
import { renderSkills } from "./components/skills.js"; 
import { renderSelectedWork } from "./components/selectedwork.js"; 
import { renderProjects } from "./components/projects.js"; 
import { renderEducation } from "./components/education.js"; 
import { renderContact } from "./components/contact.js";

function initApp() {






}

// When file is loaded, run initApp()
document.addEventListener("DOMContentLoaded", initApp);


