/* ============================================================
   Particles.js
============================================================ */
function initParticles() {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    const color  = isDark ? '#00d4a4' : '#00a37a';

    particlesJS('particles-js', {
        particles: {
            number:  { value: 55, density: { enable: true, value_area: 900 } },
            color:   { value: color },
            shape:   { type: 'circle' },
            opacity: { value: 0.30, random: false },
            size:    { value: 2.2, random: true },
            line_linked: {
                enable:   true,
                distance: 170,
                color:    color,
                opacity:  0.20,
                width:    1
            },
            move: {
                enable:    true,
                speed:     1.2,
                direction: 'none',
                random:    false,
                straight:  false,
                out_mode:  'out',
                bounce:    false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize:  true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 0.5 } },
                push: { particles_nb: 3 }
            }
        },
        retina_detect: true
    });
}

window.addEventListener('load', initParticles);

/* ============================================================
   Theme
============================================================ */
const root        = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    themeToggle.innerHTML = theme === 'dark'
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';

    // Recolour particles
    if (window.pJSDom && window.pJSDom[0]) {
        const c   = theme === 'dark' ? '#00d4a4' : '#00a37a';
        const pjs = window.pJSDom[0].pJS.particles;
        pjs.color.value            = c;
        pjs.line_linked.color      = c;
        window.pJSDom[0].pJS.fn.particlesRefresh();
    }
}

// Restore saved theme (default: dark)
const saved = localStorage.getItem('portfolio-theme') || 'dark';
root.setAttribute('data-theme', saved);
themeToggle.innerHTML = saved === 'dark'
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';

themeToggle.addEventListener('click', () =>
    setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')
);

/* ============================================================
   Mobile Menu
============================================================ */
const hamburger      = document.getElementById('hamburger');
const mobileMenu     = document.getElementById('mobileMenu');
const mobileClose    = document.getElementById('mobileMenuClose');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function openMenu()  {
    mobileMenu.classList.add('open');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMenu);
mobileClose.addEventListener('click', closeMenu);
mobileNavLinks.forEach(l => l.addEventListener('click', closeMenu));

/* ============================================================
   Scroll Progress Bar
============================================================ */
const scrollBar = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
    const top  = window.scrollY;
    const max  = document.documentElement.scrollHeight - window.innerHeight;
    scrollBar.style.width = max > 0 ? (top / max * 100) + '%' : '0%';
}, { passive: true });

/* ============================================================
   Navbar — shadow on scroll
============================================================ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ============================================================
   Scroll Spy — active nav link
============================================================ */
const sections = Array.from(document.querySelectorAll('section[id]'));
const navLinks  = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = sections[0]?.id || '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 130) current = s.id;
    });
    navLinks.forEach(l =>
        l.classList.toggle('active', l.getAttribute('href') === `#${current}`)
    );
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

/* ============================================================
   Smooth Scroll
============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
});

/* ============================================================
   Typing Animation (type + delete loop)
============================================================ */
const titles   = ['Full-Stack Developer', 'Cybersecurity Specialist', 'ML Engineer', 'AI Developer', 'Computer Scientist'];
const typedEl  = document.querySelector('.typed-text');
let tIdx = 0, cIdx = 0, deleting = false;

function type() {
    const word = titles[tIdx];
    if (deleting) {
        typedEl.textContent = word.slice(0, --cIdx);
        if (cIdx === 0) {
            deleting = false;
            tIdx = (tIdx + 1) % titles.length;
            setTimeout(type, 350);
        } else {
            setTimeout(type, 45);
        }
    } else {
        typedEl.textContent = word.slice(0, ++cIdx);
        if (cIdx === word.length) {
            deleting = true;
            setTimeout(type, 2200);
        } else {
            setTimeout(type, 95);
        }
    }
}

type();

/* ============================================================
   Scroll-triggered Fade-Up Animations
============================================================ */
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

const animated = document.querySelectorAll(
    '.expertise-card, .project-card, .timeline-card, ' +
    '.education-card, .skills-table, .contact-form, .contact-info, .section-header'
);

animated.forEach((el, i) => {
    el.classList.add('fade-up');
    // Stagger cards within the same parent grid (every 3rd resets delay)
    el.style.transitionDelay = ((i % 4) * 80) + 'ms';
    fadeObserver.observe(el);
});
