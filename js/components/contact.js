/**
 * contact.js
 * -----------------------------------------
 * Renders the Contact section content.
 *
 * Responsibilities:
 * - Later: inject HTML into <section id="contact">
 * - Later: connect with form.js for validation and submission
 *
 * This file will be imported and called from main.js
 * via renderContact().
 */

/**
 * renderContact()
 * -----------------------------------------
 * Inserts the Contact section markup.
 * Currently empty — will be implemented once
 * the HTML structure and text content are approved.
 */
export function renderContact() {
    const section = document.querySelector("#contact");
    if (!section) return;

    section.innerHTML = `
        <div class="contact__content">
            <h2 class="contact__title">Work With Me</h2>

            <p class="contact__text">
                I’m currently open for part‑time SWE roles, internships and junior developer opportunities.
            </p>

            <div class="contact__links">
                <a href="mailto:tiffanylarsson.dev@gmail.com" class="contact__link">Mail</a>
                <a href="https://github.com/tiffanystud" target="_blank" class="contact__link">GitHub</a>
                <a href="https://www.linkedin.com/in/tiffany-e-larsson" target="_blank" class="contact__link">LinkedIn</a>
            </div>
        </div>
    `;
}
