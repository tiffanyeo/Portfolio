/**
 * projects.js
 * -----------------------------------------
 * Renders the Projects section content.
 *
 * Responsibilities:
 * - Later: inject HTML into <section id="projects">
 * - Later: handle project cards, interactions, or filters
 *
 * This file will be imported and called from main.js
 * via renderProjects().
 */

/**
 * renderProjects()
 * -----------------------------------------
 * Inserts the Projects section markup.
 * Currently empty — will be implemented once
 * the HTML structure and text content are approved.
 */

export async function renderProjects() {

    const section = document.querySelector("#projects");
    if (!section) return;

    // Get pproject data from JSON file
    const response = await fetcch("../../data/projects.json");
    const data = await response.json();

    let projectHTML = "";

    // Build project cards HTML
    data.projects.forEach(currProj => {

        let techStackHTML = "";

        // Build each projects tech stack HTML
        currProj.forEach(currTech => {
            techStackHTML += `<span class="project__tag">${currTech}</span>`;
        })

        // Build each projects card HTML
        projectHTML += `
            <div class="project__card">
                <h3 class="project__title">${currProj.name}</h3>
                <div class="project__tech>${techStackHTML}</div>
                <div class="project__description">
                    <p class="project__text">The problem: ${currProj.description.problem}</p>
                    <p class="project__text">The solution: ${currProj.description.solution}</p>
                </div>
            </div>
        `;



    })



}














/* export function renderProjects() {
    const section = document.querySelector("#projects");
    if (!section) return;

    section.innerHTML = `
        <div class="projects__content">


            <h2 class="projects__title">Projects</h2>

            <div class="projects__list">

                <!-- ShelfWise -->
                <div class="project__card">
                    <h3 class="project__title">ShelfWise</h3>

                    <div class="project__tech">
                        <span class="project__tag">React</span>
                        <span class="project__tag">TypeScript</span>
                        <span class="project__tag">SQLite</span>
                        <span class="project__tag">JWT</span>
                        <span class="project__tag">RBAC</span>
                        <span class="project__tag">Deno</span>
                        <span class="project__tag">Modular API Arch</span>
                    </div>

                    <p class="project__text">
                        Problem: Teams needed a simple way to track inventory with secure role separation.
                    </p>
                    <p class="project__text">
                        Solution: I built a full‑stack system with JWT auth, RBAC and a modular API.
                    </p>
                    <p class="project__text">
                        Approach: Typed React frontend + structured backend flows for predictable data handling.
                    </p>
                </div>

                <!-- PackIT -->
                <div class="project__card">
                    <h3 class="project__title">PackIT</h3>

                    <div class="project__tech">
                        <span class="project__tag">Deno</span>
                        <span class="project__tag">JavaScript OOP</span>
                        <span class="project__tag">REST API</span>
                        <span class="project__tag">JWT</span>
                        <span class="project__tag">External APIs</span>
                        <span class="project__tag">SPA</span>
                        <span class="project__tag">Testing</span>
                    </div>

                    <p class="project__text">
                        Problem: Users needed a way to organize packing lists dynamically and across devices.
                    </p>
                    <p class="project__text">
                        Solution: I built a full‑stack service with custom API architecture, JWT auth and external API integrations.
                    </p>
                    <p class="project__text">
                        Approach: Clean OOP structure, SPA navigation and automated tests for reliability.
                    </p>
                </div>

                <!-- City Management Web Service -->
                <div class="project__card">
                    <h3 class="project__title">City Management Web Service</h3>

                    <div class="project__tech">
                        <span class="project__tag">Deno</span>
                        <span class="project__tag">Fetch API</span>
                        <span class="project__tag">CRUD</span>
                        <span class="project__tag">Validation</span>
                        <span class="project__tag">Error Handling</span>
                        <span class="project__tag">DOM</span>
                    </div>

                    <p class="project__text">
                        Problem: Managing city data required a simple CRUD interface with real‑time updates.
                    </p>
                    <p class="project__text">
                        Solution: I built the full API, validation logic and dynamic DOM rendering.
                    </p>
                    <p class="project__text">
                        Approach: Clear error handling and predictable UI behavior for a smooth workflow.
                    </p>
                </div>

                <!-- City Distance Visualizer -->
                <div class="project__card">
                    <h3 class="project__title">City Distance Visualizer</h3>

                    <div class="project__tech">
                        <span class="project__tag">JavaScript</span>
                        <span class="project__tag">Functional Programming</span>
                        <span class="project__tag">DOM</span>
                        <span class="project__tag">Responsive UI</span>
                    </div>

                    <p class="project__text">
                        Problem: Users needed a visual way to understand distances between cities.
                    </p>
                    <p class="project__text">
                        Solution: I created an interactive tool that calculates and displays distances.
                    </p>
                    <p class="project__text">
                        Approach: Reusable components + functional logic for clean calculations and UI clarity.
                    </p>
                </div>

            </div>
        </div>
    `;
} */
