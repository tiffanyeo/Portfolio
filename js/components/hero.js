/*  js/components/hero.js */


/**
 * @returns {void}
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
                
                <div class="hero__carousel">
                <div class="hero__carousel__track">
                        <div class="hero__carousel__item">
                            <div class="hero__carousel__projects_text">
                                <p class="carusel__item__tags">RBAC</p>
                            </div>
                        </div>
                        <div class="hero__carousel__item">
                            <div class="hero__carousel__projects_text">
                                <p class="carusel__item__tags">RBAC</p>
                                <p class="carusel__item__tags">JWT</p>
                                <p class="carusel__item__tags">DENO</p>
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
                                <p class="carusel__item__tags">API</p>
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
                        <div class="hero__carousel__item">
                            <div class="hero__carousel__projects_text">
                                <p class="carusel__item__tags">RBAC</p>
                                <p class="carusel__item__tags">CRUD</p>
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

/**
 * 
 * @returns {void}
 */
export function initHeroCarousel() {

    const track = document.querySelector('.hero__carousel__track');
    if (!track) return;

    let position = 0;

    // Clone items to create an infinite loop effect
    const items = Array.from(track.children);
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });


    function autoScroll() {

        // Calculate the width of one project card including margin
        const itemWidth = track.children[0].offsetWidth + parseInt(getComputedStyle(track).gap);
        // Get the total width of the track
        position -= itemWidth;

        // Reset position if we've scrolled through all items
        if (Math.abs(position) >= itemWidth * items.length) {
            position = 0;
        }

        // Apply the transform to the track
        track.style.transform = `translateX(${position}px)`;
    }

    // Scroll every 2 seconds
    setInterval(autoScroll, 2000);

}