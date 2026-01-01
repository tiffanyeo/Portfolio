/**
 * selectedwork.js
 * -----------------------------------------
 * Renders the Selected Work section content.
 *
 * Responsibilities:
 * - Later: inject HTML into <section id="selectedwork">
 * - Later: handle carousel or interactive elements if needed
 *
 * This file will be imported and called from main.js
 * via renderSelectedWork().
 */

/**
 * renderSelectedWork()
 * -----------------------------------------
 * Inserts the Selected Work section markup.
 * Currently empty — will be implemented once
 * the HTML structure and text content are approved.
 */
export function renderSelectedWork() {
    const section = document.querySelector("#selectedwork");
    if (!section) return;

    section.innerHTML = `
        <div class="selectedwork__content">
            <h2 class="selectedwork__title">Selected Work</h2>

            <div class="selectedwork__items">

                <div class="selectedwork__item">
                    <h3 class="selectedwork__item-title">
                        Double B.Sc. — Computer Science + Media Technology
                    </h3>
                    <p class="selectedwork__item-text">
                        Building a combined engineering + human‑tech foundation through CS courses,
                        software development and media‑tech analysis.
                    </p>
                </div>

                <div class="selectedwork__item">
                    <h3 class="selectedwork__item-title">
                        Security Operations — Alarm Operator
                    </h3>
                    <p class="selectedwork__item-text">
                        Incident response, secure protocols. Worked in a high‑security environment
                        requiring precision, calm decision‑making and structured problem‑solving.
                    </p>
                </div>

                <div class="selectedwork__item">
                    <h3 class="selectedwork__item-title">
                        Kodcentrum — Volunteer Programming Mentor
                    </h3>
                    <p class="selectedwork__item-text">
                        Python, Scratch. Guided children through beginner programming tasks.
                        Helped them understand logic, problem‑solving and creative coding.
                    </p>
                </div>

            </div>

            <div class="selectedwork__cta">
                <a href="#" class="btn btn-primary">Download Resumé</a>
            </div>
        </div>
    `;
}
