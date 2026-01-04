/**
 * about.js
 * -----------------------------------------
 * Renders the About section content.
 *
 * Responsibilities:
 * - Inject HTML into <section id="about">
 * - Later: handle animations or interactive elements
 *
 * Imported and called from main.js via renderAbout().
 */

/**
 * renderAbout()
 * -----------------------------------------
 * Inserts the About section markup.
 */
export function renderAbout() {
    const section = document.querySelector("#about");
    if (!section) return;

    section.innerHTML = `

        <div class="about__visual visual">
            <!-- Placeholder for future image or illustration -->
        </div>
        
        <div class="about__content">
            <h2 class="about__title">About Me</h2>

            <p class="about__text">
                I'm a developer who loves building clean, scalable, and thoughtful digital products.
                I combine technical depth with strong communication and a structured workflow.
            </p>

            <p class="about__text">
                My background spans computer science, media technology, and hands-on product development.
                I enjoy solving real problems, improving systems, and creating meaningful user experiences.
            </p>
        </div>
    `;
}
