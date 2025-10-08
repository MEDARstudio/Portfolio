// --- Data for the portfolio ---

// Updated portfolio data with a 'size' property for a dynamic grid layout.
const portfolioItems = [
    { title: 'Project One', category: 'UI/UX Design', imgSrc: 'https://placehold.co/800x450/1e1e1e/ffffff?text=Project+1', size: 'wide' },
    { title: 'Project Two', category: 'Branding', imgSrc: 'https://placehold.co/400x500/1e1e1e/ffffff?text=Project+2', size: 'normal' },
    { title: 'Project Three', category: 'Web Development', imgSrc: 'https://placehold.co/400x500/1e1e1e/ffffff?text=Project+3', size: 'normal' },
    { title: 'Project Four', category: 'Illustration', imgSrc: 'https://placehold.co/800x450/1e1e1e/ffffff?text=Project+4', size: 'wide' },
    { title: 'Project Five', category: 'Motion Graphics', imgSrc: 'https://placehold.co/400x500/1e1e1e/ffffff?text=Project+5', size: 'normal' },
    { title: 'Project Six', category: 'Art Direction', imgSrc: 'https://placehold.co/400x500/1e1e1e/ffffff?text=Project+6', size: 'normal' }
];


// Placeholder links for social media. Replace '#' with your actual URLs.
const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/med_amine_amarir', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@mohamedamineamarir', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg>' },
    { name: 'X', url: 'https://x.com/MohamedAmi39880', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267zM4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>' },
    { name: 'WhatsApp', url: 'https://wa.me/33751348563', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mohamed-amine-amarir-4b4682256', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>' }
];

// --- Core Application Logic ---

/**
 * Renders the entire application structure into the DOM.
 */
function renderApp() {
    const appContainer = document.getElementById('root');
    if (!appContainer) return;

    appContainer.innerHTML = `
        <header class="header">
            <div class="container">
                <a href="#home" class="logo">MEDAR STUDIO</a>
                <nav class="main-nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contact" class="nav-cta">Let's Connect</a></li>
                    </ul>
                </nav>
                 <button class="mobile-nav-toggle" aria-controls="main-nav" aria-expanded="false">
                    <span class="sr-only">Menu</span>
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </header>

        <main>
            <section id="home" class="hero">
                <div class="container">
                    <h1>Creative Designer & Visual Artist</h1>
                    <p>Crafting unique digital experiences with passion and precision.</p>
                    <a href="#contact" class="cta-button">Let's Talk</a>
                </div>
            </section>

            <section id="work" class="portfolio">
                <div class="container">
                    <h2>My Work</h2>
                    <div class="portfolio-grid">
                        ${portfolioItems.map(item => `
                            <div class="portfolio-item portfolio-item--${item.size || 'normal'}" data-img-src="${item.imgSrc}">
                                <div class="portfolio-item-inner">
                                    <img src="${item.imgSrc}" alt="${item.title}">
                                    <div class="portfolio-item-overlay">
                                        <h3>${item.title}</h3>
                                        <p>${item.category}</p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <section id="contact" class="contact">
                <div class="container contact-container">
                    <div class="contact-info">
                         <h2>Get In Touch</h2>
                         <p>Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form, and I'll get back to you as soon as possible.</p>
                    </div>
                    <form action="https://formspree.io/f/YOUR_UNIQUE_ID" method="POST" class="contact-form">
                        <div class="form-row">
                            <input type="text" name="name" placeholder="Your Name" required>
                            <input type="email" name="email" placeholder="Your Email" required>
                        </div>
                        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>
        </main>

        <footer class="footer">
            <div class="container">
                <h2 class="footer-title">Let's create something amazing together.</h2>
                <a href="mailto:hello@medarstudio.com" class="footer-contact-link">hello@medarstudio.com</a>
                <div class="footer-social">
                    ${socialLinks.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer" title="${link.name}" aria-label="${link.name}">${link.icon}</a>`).join('')}
                </div>
                <p class="footer-copyright">&copy; ${new Date().getFullYear()} MEDAR STUDIO. All Rights Reserved.</p>
            </div>
        </footer>

        <div class="lightbox" id="imageLightbox">
            <button class="lightbox-close" aria-label="Close image viewer">&times;</button>
            <img src="" alt="Enlarged portfolio image" class="lightbox-image">
        </div>
    `;

    // After the HTML is in the DOM, set up the interactive animations.
    setupHeaderScrollEffect();
    setupSmoothScrolling();
    setupScrollAnimations();
    setup3DTiltEffects();
    setupMobileNav();
    setupImageLightbox();
}

/**
 * Adds a 'scrolled' class to the header when the user scrolls down.
 */
function setupHeaderScrollEffect() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}


/**
 * Sets up the mobile navigation toggle functionality.
 */
function setupMobileNav() {
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const header = document.querySelector('.header');

    if (navToggle && header) {
        navToggle.addEventListener('click', () => {
            header.classList.toggle('nav-open');
            const isExpanded = header.classList.contains('nav-open');
            navToggle.setAttribute('aria-expanded', isExpanded.toString());
        });
    }
}

/**
 * Sets up smooth scrolling for internal anchor links and handles mobile nav closing.
 */
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile nav if it's open
            const header = document.querySelector('.header');
            if (header?.classList.contains('nav-open')) {
                const navToggle = document.querySelector('.mobile-nav-toggle');
                header.classList.remove('nav-open');
                navToggle?.setAttribute('aria-expanded', 'false');
            }

            const targetId = this.getAttribute('href');

            // Scroll to top for home/logo links
            if (!targetId || targetId === '#' || targetId === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Sets up the fade-in-on-scroll animation for portfolio items.
 */
function setupScrollAnimations() {
    const items = document.querySelectorAll('.portfolio-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    items.forEach(item => {
        observer.observe(item);
    });
}

/**
 * Sets up the interactive 3D tilt effect on portfolio items.
 */
function setup3DTiltEffects() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        const inner = item.querySelector('.portfolio-item-inner');
        if (!inner) return;

        item.addEventListener('mousemove', (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -8; // Reduced max rotation
            const rotateY = ((x - centerX) / centerX) * 8; // Reduced max rotation

            inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        item.addEventListener('mouseleave', () => {
            inner.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

/**
 * Sets up the image lightbox functionality.
 */
function setupImageLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const portfolioGrid = document.querySelector('.portfolio-grid');

    if (!lightbox || !lightboxImage || !portfolioGrid) return;

    portfolioGrid.addEventListener('click', (e) => {
        const portfolioItem = e.target.closest('.portfolio-item');
        if (portfolioItem) {
            const imgSrc = portfolioItem.getAttribute('data-img-src');
            if(imgSrc) {
                lightboxImage.src = imgSrc;
                lightbox.classList.add('is-visible');
                document.body.style.overflow = 'hidden';
            }
        }
    });

    const closeLightbox = () => {
        lightbox.classList.remove('is-visible');
        document.body.style.overflow = '';
    };

    lightbox.addEventListener('click', (e) => {
        // Close if the background or close button is clicked
        if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
            closeLightbox();
        }
    });
}


// Initial render of the application when the DOM is ready.
document.addEventListener('DOMContentLoaded', renderApp);