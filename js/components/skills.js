/**
 * skills.js
 * -----------------------------------------
 * Renders the Skills section content.
 *
 * Responsibilities:
 * - Inject HTML into <section id="skills">
 *
 * Imported and called from main.js via renderSkills().
 */

/**
 * renderSkills()
 * -----------------------------------------
 * Inserts the Skills section markup.
 */
export function renderSkills() {
    const section = document.querySelector("#skills");
    if (!section) return;

    section.innerHTML = `
        <div class="skills__content">
            <h2 class="skills__title">Skills</h2>

            <div class="skills__group">
                <h3 class="skills__subtitle">Core</h3>
                <p class="skills__text">
                    JavaScript (OOP, async, DOM), TypeScript, Java, Deno, REST APIs, JWT, RBAC, SQLite, HTML, CSS
                </p>
            </div>

            <div class="skills__group">
                <h3 class="skills__subtitle">Tools</h3>
                <p class="skills__text">
                    Git, GitHub, VS Code, Figma
                </p>
            </div>

            <div class="skills__group">
                <h3 class="skills__subtitle">Currently expanding</h3>
                <p class="skills__text">
                    React, Flutter/Dart, cybersecurity fundamentals
                </p>
            </div>
        </div>
    `;
}
