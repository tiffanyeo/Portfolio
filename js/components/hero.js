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
            <div class="hero__text__container">
                <h1 class="hero__title">Tiffany Larsson</h1>
                <div class="heroDiv"> 
                    <p class="hero__subtitle">Software Developer</p>
                    <p class="hero__subtitle">Modular Solutions</p>
                </div>
                <div class="hero__carusel"> 
                    <div class="hero__carusel__track"> 
                        <div class="hero__carousel__item">
                            <div class="hero__carousel__projects_text">
                                <p class="carusel__item__tags">RBAC</p>
                            </div>
                        </div>
                        <div class="hero__carousel__item">
                            <div class="hero__carousel__projects_text">
                                <p class="carusel__item__tags">RBAC</p>
                                <p class="carusel__item__tags">JWT</p>
                            </div>
                        </div>
                        <div class="hero__carousel__item">
                            <div class="hero__carousel__projects_text">
                                <p class="carusel__item__tags">RBAC</p>
                            </div>
                        </div>
                        <div class="hero__carousel__item">
                            <div class="hero__carousel__projects_text">
                                <p class="carusel__item__tags">RBAC</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="hero__cta">
                <a href="#projects" class="btn btn-primary">View Projects</a>
                <a href="#contact" class="btn btn-secondary">Get in Touch</a>
            </div>
        </div>
    `;
}
