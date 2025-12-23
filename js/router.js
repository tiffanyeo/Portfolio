/* import external funcs */


// Set correct styling
function loadCSS(href) {
    // Check if the CSS file is already loaded
    if (document.querySelector(`link[href="${href}"]`)) return;

    // Create link element and append to head
    const link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
}


// Reset to default style
function setdefaultStyle() {
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
        if (!link.href.includes('styles/common.css')) link.remove();
    })

    /* Empty containers */
}


// Navigate to different views
export function navigateTo(view, data = {}) {

    setdefaultStyle();

    switch (view) {
        case "loading":
            /* Funcs */
            break;

        case "projects":
            /* Funcs */
            break;
    }
}


// Initial load
window.addEventListener("DOMContentLoaded", () => navigateTo());

