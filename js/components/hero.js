/**
 * hero.js
 * -----------------------------------------
 * Renders the Hero section content.
 *
 * Responsibilities:
 * - Inject HTML into <section id="hero">
 * - Later: handle animations or interactive elements
 *
 * Imported and called from main.js via renderHero().
 */

/**
 * renderHero()
 * -----------------------------------------
 * Inserts the Hero section markup.
 */
export function renderHero() {
    const section = document.querySelector("#hero");
    if (!section) return;

    section.innerHTML = `
        <div class="hero__content">
            <h1 class="hero__title">Hi, I'm Tiffany</h1>
            <p class="hero__subtitle">
                Developer. Builder. Problem Solver.
            </p>

            <div class="hero__cta">
                <a href="#projects" class="btn btn-primary">View Projects</a>
                <a href="#contact" class="btn btn-secondary">Get in Touch</a>
            </div>
        </div>

        <div class="hero__visual">
            <!-- Placeholder for future image or animation -->
        </div>
    `;
}
