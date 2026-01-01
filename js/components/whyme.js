/**
 * whyme.js
 * -----------------------------------------
 * Renders the "Why Me" section content.
 *
 * Responsibilities:
 * - Inject HTML into <section id="whyme">
 *
 * Imported and called from main.js via renderWhyMe().
 */

/**
 * renderWhyMe()
 * -----------------------------------------
 * Inserts the Why Me section markup.
 */
export function renderWhyMe() {
    const section = document.querySelector("#whyme");
    if (!section) return;

    section.innerHTML = `
        <div class="whyme__content">
            <h2 class="whyme__title">Not your average CS‑“student”?</h2>

            <p class="whyme__text">
                I’m not a traditional CS student. My double background in computer science and media technology gives me both the engineering foundation and the human‑tech understanding needed to build products that actually work in the real world.
            </p>

            <p class="whyme__text">
                I think in systems, but I never forget the people using them.
            </p>
        </div>
    `;
}
