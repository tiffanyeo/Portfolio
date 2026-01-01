# Project Structure

project-root/
│
├── index.html
│
├── styles/
│   ├── common.css
│   ├── layout.css
│   │
│   ├── sections/
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── funlines.css
│   │   ├── whyme.css
│   │   ├── howiwork.css
│   │   ├── skills.css
│   │   ├── selectedwork.css
│   │   ├── projects.css
│   │   ├── education.css
│   │   └── contact.css
│   │
│   └── components/
│       ├── buttons.css
│       └── cards.css
│
├── js/
│   ├── main.js
│   ├── navbar.js
│   ├── form.js
│   │
│   └── components/
│       ├── hero.js
│       ├── about.js
│       ├── funlines.js
│       ├── whyme.js
│       ├── howiwork.js
│       ├── skills.js
│       ├── selectedwork.js
│       ├── projects.js
│       ├── education.js
│       └── contact.js
│
└── assets/
    ├── images/
    └── icons/



## Description

This project follows a modular structure where each section of the portfolio
has its own JavaScript and CSS file. This keeps the codebase clean, scalable,
and easy to maintain.

- **index.html**  
  The main entry point. All sections are defined here as empty `<section>` tags.

- **styles/**  
  Global styles (`common.css`, `layout.css`), section-specific styles, and
  reusable component styles.

- **js/**  
  Main application logic (`main.js`), navbar logic, form logic, and one JS file
  per section inside `js/components/`.

- **assets/**  
  Images, icons, and other static files.



## Section Responsibilities

Each section has:

- A JS file in `js/components/` responsible for:
  - Rendering HTML into its `<section>` tag
  - Handling section-specific interactions

- A CSS file in `styles/sections/` responsible for:
  - Layout
  - Typography
  - Spacing
  - Responsive behavior



## JavaScript Flow

- `main.js` initializes the entire app.
- It imports:
  - `navbar.js` → builds and manages the navigation bar
  - `form.js` → handles the contact form
  - All section render functions from `js/components/`
- When the DOM is ready, `initApp()` runs and renders all sections.



## CSS Structure

- `common.css` → global variables, typography, resets
- `layout.css` → layout rules, grid, spacing, navbar/footer layout
- `sections/*.css` → styles for each page section
- `components/*.css` → reusable UI components (buttons, cards, etc.)
