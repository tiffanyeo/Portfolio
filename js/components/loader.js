export function loader() {
    const loader = document.createElement("div");
    loader.id = "loader";

    const h1 = document.createElement("h1");
    h1.id = "typewriter";

    loader.appendChild(h1);
    document.body.appendChild(loader);

    const cursorBlinkTime = 700;
    const slowText = "Hey ";
    const fastText = "I'm Tiffany";

    setTimeout(() => {
        typeSlow();
    }, cursorBlinkTime);

    function typeSlow() {
        let i = 0;
        const speed = 160;

        function step() {
            if (i < slowText.length) {
                h1.textContent += slowText[i];
                i++;
                setTimeout(step, speed);
            } else {
                typeFast();
            }
        }
        step();
    }

    function typeFast() {
        let i = 0;
        const speed = 70;

        function step() {
            if (i < fastText.length) {
                h1.textContent += fastText[i];
                i++;
                setTimeout(step, speed);
            } else {
                finish();
            }
        }
        step();
    }

    function finish() {
        setTimeout(() => {
            loader.classList.add("fade-out");
            setTimeout(() => loader.remove(), 800);
        }, cursorBlinkTime);
    }
}


