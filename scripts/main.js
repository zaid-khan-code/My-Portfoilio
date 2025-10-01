import { praticals } from "../scripts/paratacial.js";
import { navbar } from "../scripts/navbar.js";




navbar();

// Scroll-triggered animations for main cards with responsive layout logic
const cards = document.querySelectorAll('.manolisa > a');

function assignDirections() {
    const width = window.innerWidth;
    // Determine columns: 1 (mobile), 2 (>=768), 3 (>=1024)
    const cols = width >= 1024 ? 3 : (width >= 768 ? 2 : 1);
    cards.forEach((card, idx) => {
        card.classList.add('will-animate');
        let dir = 'left';
        if (cols === 1) {
            dir = 'left';
        } else if (cols === 2) {
            // Even index left, odd index right
            dir = idx % 2 === 0 ? 'left' : 'right';
        } else {
            // 3 columns: first row -> left:left, center:up, right:right; rows beyond first -> up
            const col = idx % 3;
            const row = Math.floor(idx / 3);
            if (row === 0) {
                if (col === 0) dir = 'left';
                else if (col === 1) dir = 'up';
                else dir = 'right';
            } else {
                dir = 'up';
            }
        }
        card.setAttribute('data-anim-dir', dir);
    });
}

assignDirections();
window.addEventListener('resize', assignDirections);

const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const dir = el.getAttribute('data-anim-dir');
            el.classList.remove('will-animate');
            if (dir === 'left') el.classList.add('animate-in-left');
            else if (dir === 'right') el.classList.add('animate-in-right');
            else el.classList.add('animate-in-up');
            io.unobserve(el);
        }
    });
}, { threshold: 0.2 });

cards.forEach((c) => io.observe(c));