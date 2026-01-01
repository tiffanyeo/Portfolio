/**
 * funlines.js
 * -----------------------------------------
 * Renders the Fun Lines section content.
 *
 * Responsibilities:
 * - Inject HTML into <section id="funlines">
 *
 * Imported and called from main.js via renderFunlines().
 */

/**
 * renderFunlines()
 * -----------------------------------------
 * Inserts the Fun Lines section markup.
 */
export function renderFunlines() {
    const section = document.querySelector("#funlines");
    if (!section) return;

    section.innerHTML = `
        <div class="funlines__content">
            <h2 class="funlines__title">Fun Lines</h2>

            <ul class="funlines__list">
                <li class="funlines__item">“Always walking a little faster than everyone else.”</li>
                <li class="funlines__item">“Most of my ideas arrive somewhere between cafés and crosswalks.”</li>
            </ul>
        </div>
    `;
}