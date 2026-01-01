/**
 * education.js
 * -----------------------------------------
 * Renders the Education section content.
 *
 * Responsibilities:
 * - Later: inject HTML into <section id="education">
 * - Later: handle any timeline or interactive elements
 *
 * This file will be imported and called from main.js
 * via renderEducation().
 */

/**
 * renderEducation()
 * -----------------------------------------
 * Inserts the Education section markup.
 * Currently empty — will be implemented once
 * the HTML structure and text content are approved.
 */
export function renderEducation() {
    
    const section = document.querySelector("#education");
    if (!section) return;

    section.innerHTML = `
        <div class="education__content">
            <h2 class="education__title">Education</h2>

            <div class="education__item">
                <h3 class="education__item-title">Malmö University</h3>
                <p class="education__item-text">B.Sc. Media Technology, 3.5 GPA</p>
            </div>

            <div class="education__item">
                <h3 class="education__item-title">Mid Sweden University</h3>
                <p class="education__item-text">B.Sc. Computer Science, 4.0 GPA</p>
            </div>
        </div>
    `;
}
