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

    // Duplicate items for seamless infinite loop
    const items = Array.from(track.children);
    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });

    let position = 0;
    let speed = 0.5; 

    // Animation loop
    function update() {

        // Calculate width of one full set of items
        const itemWidth = track.children[0].offsetWidth + parseInt(getComputedStyle(track).gap);
        const fullSetWidth = itemWidth * items.length;

        // Update position
        position -= speed;

        // When scrolled past the first full set -> teleport back
        if (Math.abs(position) >= fullSetWidth) {
            position = 0;
        }

        track.style.transform = `translateX(${position}px)`;

        // Continue the loop
        requestAnimationFrame(update);
    }

    update();
}
