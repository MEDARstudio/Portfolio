import { GoogleGenAI } from "@google/genai";

// --- Data for the portfolio ---

const portfolioItems = [
    // The first 6 items will appear in the 3D carousel
    { id: 'proj-1', title: 'Cosmic Drift', category: 'Album Cover', images: ['./images/project-1.jpg', './images/project-5.jpg', './images/project-7.jpg', './images/project-8.jpg'], description: 'Album cover design for an electronic music artist. The process began with initial concept sketches, followed by 3D modeling for the ship in Blender. The final composition was assembled in Photoshop, where vibrant nebulas and lighting effects were added to evoke a sense of an epic interstellar journey.' },
    { id: 'proj-2', title: 'Vintage Brew', category: 'Branding', images: ['./images/project-2.png'], description: 'Complete branding package for a local coffee shop. The design uses retro typography and a warm color palette to create a cozy and inviting atmosphere. Deliverables included logo, menu design, and packaging.' },
    { id: 'proj-3', title: 'Serpent Ring', category: '3D Jewelry', images: ['./images/project-3.png', './images/project-6.jpg', './images/project-9.jpg'], description: 'A detailed 3D model of a serpent ring, designed for manufacturing. Modeled in ZBrush to achieve intricate scale details and rendered in Keyshot for realistic material representation. The focus was on creating an appealing product visualization that highlighted the ruby eye and polished silver.' },
    { id: 'proj-4', title: 'City Lights', category: 'Poster Design', images: ['./images/project-4.jpg'], description: 'A simple, impactful poster for a local film festival. High-contrast imagery and bold, condensed typography are used to capture the energy and drama of cinema.' },
    { id: 'proj-5', title: 'Kinetic Flow', category: 'Motion Graphics', images: ['./images/project-5.jpg'], description: 'An abstract motion graphics piece exploring the interplay of light and form. Created with After Effects and Cinema 4D, this project focuses on fluid animation and atmospheric lighting to create a mesmerizing visual experience.' },
    { id: 'proj-6', title: 'Emerald Pendant', category: '3D Jewelry', images: ['./images/project-6.jpg', './images/project-9.jpg', './images/project-3.png'], description: 'A high-fidelity 3D render of a classic emerald pendant. This project showcases advanced texturing and lighting techniques in Keyshot to accurately represent the gemstone\'s brilliance and the white gold\'s luster, emphasizing the piece\'s elegance.' },
    // Additional projects for the full portfolio grid
    { id: 'proj-7', title: 'Echoes in Silence', category: 'Album Cover', images: ['./images/project-7.jpg', './images/project-1.jpg', './images/project-8.jpg'], description: 'Cover art for a minimalist ambient album. The design process involved photo manipulation of stark landscapes and a carefully chosen muted color palette to reflect the music\'s meditative and introspective qualities. The typography is subtle to complement the imagery.' },
    { id: 'proj-8', title: 'Synthwave Dreams', category: 'Poster Design', images: ['./images/project-8.jpg'], description: 'A poster design inspired by the 80s synthwave aesthetic, featuring neon grids, a retro sports car, and a setting sun. Created entirely in Adobe Illustrator using gradients and blend modes to achieve the characteristic neon glow.' },
    { id: 'proj-9', title: 'Art Deco Earrings', category: '3D Jewelry', images: ['./images/project-9.jpg', './images/project-3.png'], description: '3D modeling and rendering of Art Deco-inspired earrings. The challenge was to perfectly capture the geometric patterns and material finish characteristic of the era. Modeled in Rhino and rendered with V-Ray.' },
    { id: 'proj-10', title: 'Indie Fest', category: 'Poster Design', images: ['./images/project-10.jpg'], description: 'Promotional poster for an independent music festival. Uses a vibrant, textured collage style combined with hand-drawn elements to appeal to a young, energetic audience and convey a sense of creative freedom.' },
];


const testimonials = [
    { quote: "Working with MEDAR STUDIO was an absolute pleasure. Their creativity and attention to detail transformed our vision into a stunning reality. Highly recommended!", author: "Jane Doe", company: "Creative Minds Inc." },
    { quote: "The level of professionalism and the quality of the final product exceeded all our expectations. A truly talented designer who listens and delivers.", author: "John Smith", company: "Future Ventures" },
    { quote: "Incredible design sense and a collaborative spirit. They took our brand to the next level. We couldn't be happier with the results.", author: "Emily White", company: "Innovate Co." }
];

const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/med_amine_amarir', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@mohamedamineamarir', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg>' },
    { name: 'X', url: 'https://x.com/MohamedAmi39880', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>' },
    { name: 'WhatsApp', url: 'https://wa.me/message/EKPSYN2OA7CSA1', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mohamed-amine-amarir-4b4682256', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>' }
];

const quickQuestions = [
    { question: "What services do you offer?", answer: "MEDAR STUDIO offers a range of creative services including UI/UX Design, Branding, Web Development, Illustration, and Motion Graphics. Do you have a specific project in mind?" },
    { question: "Tell me more about you.", answer: "I'm the creative force behind MEDAR STUDIO. I'm a passionate designer and visual artist dedicated to crafting unique and impactful digital experiences. You can learn more in the 'About Me' section!" },
    { question: "How can I start a project?", answer: "It's simple! Just head over to the 'Contact' section, fill out the form with some details about your project, and I'll get back to you as soon as possible to discuss the next steps." },
];

// --- Core Application Logic ---

/**
 * Renders the entire application structure into the DOM.
 */
function renderApp() {
    const appContainer = document.getElementById('root');
    const aiContainer = document.getElementById('ai-assistant-container');
    if (!appContainer || !aiContainer) return;

    // Dynamically get unique categories for filter buttons
    const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];
    
    appContainer.innerHTML = `
        <header class="header">
            <div class="container">
                <a href="#home" class="logo">MEDAR STUDIO</a>
                <nav class="main-nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#about">About</a></li>
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

            <section id="work" class="portfolio" aria-label="Recent Projects">
                <div class="container">
                    <h2>Recent Projects</h2>
                    <div class="carousel-3d-container" aria-roledescription="carousel">
                        <div class="carousel-3d" id="carousel3d" tabindex="0" aria-live="polite">
                            <!-- JavaScript will generate cards here -->
                        </div>
                    </div>
                    <div class="carousel-buttons">
                        <button id="prevBtn" aria-label="Previous project"><i class="fas fa-chevron-left"></i></button>
                        <button id="nextBtn" aria-label="Next project"><i class="fas fa-chevron-right"></i></button>
                    </div>
                    <a href="#full-portfolio" class="cta-button view-all-btn">View All Projects</a>
                </div>
            </section>

            <section id="testimonials" class="testimonials">
                <div class="container">
                    <h2>What My Clients Say</h2>
                    <div class="testimonial-slider-container">
                        <div class="testimonial-slider">
                            ${testimonials.map(t => `
                                <div class="testimonial-slide">
                                    <p class="testimonial-quote">"${t.quote}"</p>
                                    <div class="testimonial-author">
                                        <span class="author-name">${t.author}</span>
                                        <span class="author-company">${t.company}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="slider-nav">
                            <button class="slider-btn prev" aria-label="Previous testimonial">&lt;</button>
                            <button class="slider-btn next" aria-label="Next testimonial">&gt;</button>
                        </div>
                    </div>
                </div>
            </section>

             <section id="full-portfolio" class="portfolio full-portfolio-section">
                <div class="container">
                    <h2>Full Portfolio</h2>
                    <div class="portfolio-filters">
                        ${categories.map(cat => `<button class="filter-btn ${cat === 'All' ? 'active' : ''}" data-filter="${cat}">${cat}</button>`).join('')}
                    </div>
                    <div class="full-portfolio-grid">
                         ${portfolioItems.map(item => `
                            <div class="portfolio-item-grid" data-category="${item.category}" data-id="${item.id}" tabindex="0">
                                <img src="${item.images[0]}" alt="${item.title}">
                                <div class="portfolio-item-overlay">
                                    <h3>${item.title}</h3>
                                    <p>${item.category}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <section id="about" class="about">
                <div class="container about-container">
                    <div class="about-content fade-in-up">
                        <h2>About Our Studio</h2>
                        <div class="about-summary">
                            <p class="about-intro">Medar Studio is a creative space dedicated to bringing ideas to life through modern and meaningful visuals. Driven by curiosity and innovation, we design each project as a story to tell, seeking the perfect harmony between aesthetics and functionality.</p>
                            <button class="read-more-btn">Read More</button>
                        </div>
                        <div class="about-full-text">
                            <p>Our mission is to bring ideas to life through modern, balanced, and meaningful visuals. Each project is crafted with passion, thought, and careful attention to detail.</p>
                            <p>Born from a simple vision — to create, learn, and grow — Medar Studio is driven by curiosity, creativity, and innovation to imagine unique concepts. We believe that design goes beyond appearance: it is a way to communicate, to evoke emotion, and to reveal identity.</p>
                            <p>Every creation we produce reflects a pursuit of harmony between aesthetics and functionality, simplicity and impact. At Medar Studio, we see each project as an opportunity to tell a story, express an idea, and build a memorable visual experience.</p>
                            <blockquote class="about-quote">
                               <p>Medar Studio is more than just a creative studio — it’s a vision, a style, and a passion for everything related to the world of design and digital art.</p>
                            </blockquote>
                        </div>
                        <a href="#contact" class="cta-button get-in-touch-btn">Get In Touch</a>
                    </div>
                </div>
            </section>
            
            <section id="contact" class="contact">
                <div class="container contact-container">
                    <div class="contact-info">
                         <h2>Get In Touch</h2>
                         <p>Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form, and I'll get back to you as soon as possible.</p>
                    </div>
                    <form action="https://formspree.io/f/meokznrv" method="POST" class="contact-form" novalidate>
                        <div class="form-row">
                             <div class="form-group">
                                <input type="text" id="name" name="name" placeholder="Your Name" required>
                                <span class="error-message"></span>
                            </div>
                             <div class="form-group">
                                <input type="email" id="email" name="email" placeholder="Your Email" required>
                                <span class="error-message"></span>
                            </div>
                        </div>
                        <div class="form-group">
                           <input type="tel" id="phone" name="phone" placeholder="WhatsApp Number (e.g., +1234567890)">
                           <span class="error-message"></span>
                        </div>
                        <div class="form-group">
                            <textarea name="message" id="message" placeholder="Your Message" rows="5" required></textarea>
                            <span class="error-message"></span>
                        </div>
                        <button type="submit" disabled>Send Message</button>
                    </form>
                </div>
            </section>
        </main>

        <footer class="footer">
            <div class="container">
                <h2 class="footer-title">Let's create something amazing together.</h2>
                <a href="mailto:medarstudio@gmail.com" class="footer-contact-link">medarstudio@gmail.com</a>
                <div class="footer-social">
                    ${socialLinks.map(link => `<a href="${link.url}" target="_blank" rel="noopener noreferrer" title="${link.name}" aria-label="${link.name}">${link.icon}</a>`).join('')}
                </div>
                <p class="footer-copyright">&copy; ${new Date().getFullYear()} MEDAR STUDIO. All Rights Reserved.</p>
            </div>
        </footer>

        <div class="lightbox" id="imageLightbox">
            <button class="lightbox-close" aria-label="Close image viewer">&times;</button>
            <div class="lightbox-content">
                <div class="lightbox-gallery">
                    <div class="lightbox-main-image-container">
                        <img src="" alt="Enlarged portfolio image" class="lightbox-main-image">
                    </div>
                    <div class="lightbox-thumbnails">
                        <!-- JS will populate thumbnails here -->
                    </div>
                </div>
                <div class="lightbox-details-panel">
                    <h3 class="lightbox-title"></h3>
                    <p class="lightbox-category"></p>
                    <p class="lightbox-description"></p>
                </div>
            </div>
        </div>
    `;

    aiContainer.innerHTML = `
        <div class="ai-chat-widget">
            <button class="chat-fab" aria-label="Open AI Assistant">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8" /><path d="M8.5 12.5a5 5 0 1 0 -5 0V12a3 3 0 0 0 3 3h1" /><path d="M18 18.5a5 5 0 1 0 0 -10v1.5" /><path d="M12.5 18H14a3 3 0 0 0 3 -3v-.5" /><path d="M16 12h-4" /></svg>
            </button>
            <div class="chat-window" role="dialog" aria-modal="true" aria-labelledby="chat-heading" hidden>
                <div class="chat-header">
                    <h3 id="chat-heading">AI Assistant</h3>
                    <button class="chat-close" aria-label="Close chat">&times;</button>
                </div>
                <div class="chat-body">
                    <div class="chat-messages"></div>
                </div>
                <div class="chat-footer">
                    <div class="quick-questions">
                         ${quickQuestions.map(q => `<button class="quick-question-btn">${q.question}</button>`).join('')}
                    </div>
                    <form class="chat-form">
                        <input type="text" placeholder="Ask me anything..." required />
                        <button type="submit" aria-label="Send message">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;

    setupHeaderScrollEffect();
    setupSmoothScrolling();
    setupScrollAnimations();
    setup3DCarousel();
    setupFullPortfolio();
    setupMobileNav();
    setupImageLightbox();
    setupTestimonialsSlider();
    setupAboutToggle();
    setupAIAssistant();
    setupContactFormValidation();
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
            const header = document.querySelector('.header');
            if (header?.classList.contains('nav-open')) {
                const navToggle = document.querySelector('.mobile-nav-toggle');
                header.classList.remove('nav-open');
                navToggle?.setAttribute('aria-expanded', 'false');
            }
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#' || targetId === '#home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/**
 * Sets up the fade-in-on-scroll animation for various elements.
 */
function setupScrollAnimations() {
    const items = document.querySelectorAll('.portfolio-item, .fade-in-up');
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
 * Sets up the 3D carousel for the portfolio section.
 */
function setup3DCarousel() {
    const carousel3d = document.getElementById('carousel3d');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (carousel3d && prevBtn && nextBtn) {
        const items = portfolioItems.slice(0, 6); // Use only the first 6 items for the carousel
        const cardCount = items.length;
        const theta = 360 / cardCount;
        let currentAngle = 0;
        let autoRotateID = null;
        let restartTimeout = null; // Timer for restarting rotation
        let isAutoRotating = true;
        const autoRotateSpeed = 0.05;

        const createCards = () => {
            carousel3d.innerHTML = '';
            items.forEach((item, i) => {
                const card = document.createElement('div');
                card.className = 'card';
                card.style.transform = `rotateY(${i * theta}deg) translateZ(300px)`;
                if (i === 0) card.classList.add('active');
                card.dataset.id = item.id; // Use ID for lightbox
                
                const img = document.createElement('img');
                img.src = item.images[0]; // Use first image for carousel card
                img.alt = item.title;
                card.appendChild(img);
                
                const overlay = document.createElement('div');
                overlay.className = 'card-overlay';
                overlay.innerHTML = `<h3>${item.title}</h3><p>${item.category}</p>`;
                card.appendChild(overlay);

                carousel3d.appendChild(card);
            });
        };

        const updateActiveCard = () => {
            const cards = carousel3d.querySelectorAll('.card');
            const normalizedAngle = ((currentAngle % 360) + 360) % 360;
            const index = Math.round(normalizedAngle / theta) % cardCount;
            cards.forEach((card, i) => {
                card.classList.toggle('active', i === (cardCount - index) % cardCount);
            });
        };
        
        const rotateCarousel = (angle) => {
            currentAngle += angle;
            carousel3d.style.transform = `translateZ(-300px) rotateY(${currentAngle}deg)`;
            updateActiveCard();
        };

        const autoRotate = () => {
            if (!isAutoRotating) return;
            rotateCarousel(autoRotateSpeed);
            autoRotateID = requestAnimationFrame(autoRotate);
        }
        
        const startAutoRotate = () => {
            if (isAutoRotating) return;
            isAutoRotating = true;
            autoRotate();
        }
        
        const stopAutoRotate = () => {
            if (restartTimeout) clearTimeout(restartTimeout); // Clear any pending restart
            if (!isAutoRotating) return;
            isAutoRotating = false;
            if (autoRotateID) {
                cancelAnimationFrame(autoRotateID);
                autoRotateID = null;
            }
        }
        
        const restartRotationAfterDelay = () => {
            restartTimeout = setTimeout(startAutoRotate, 5000); // 5-second delay
        };

        prevBtn.addEventListener('click', () => {
            stopAutoRotate();
            rotateCarousel(theta);
            restartRotationAfterDelay();
        });
        nextBtn.addEventListener('click', () => {
            stopAutoRotate();
            rotateCarousel(-theta);
            restartRotationAfterDelay();
        });
        
        const carouselContainer = carousel3d.parentElement;
        if (carouselContainer) {
            let startX = 0;
            let isDragging = false;
            const handleDragStart = (clientX) => {
                isDragging = true;
                startX = clientX;
                stopAutoRotate();
                carouselContainer.style.cursor = 'grabbing';
            };
            const handleDragMove = (clientX) => {
                if (!isDragging) return;
                let diffX = clientX - startX;
                if (Math.abs(diffX) > 20) {
                    rotateCarousel(diffX > 0 ? theta : -theta);
                    startX = clientX;
                }
            };
            const handleDragEnd = () => {
                if (isDragging) {
                    isDragging = false;
                    carouselContainer.style.cursor = 'grab';
                    restartRotationAfterDelay();
                }
            };
            
            carouselContainer.addEventListener('mousedown', (e) => handleDragStart(e.clientX));
            window.addEventListener('mousemove', (e) => handleDragMove(e.clientX));
            window.addEventListener('mouseup', handleDragEnd);

            carouselContainer.addEventListener('touchstart', (e) => handleDragStart(e.touches[0].clientX), { passive: true });
            carouselContainer.addEventListener('touchmove', (e) => handleDragMove(e.touches[0].clientX), { passive: true });
            carouselContainer.addEventListener('touchend', handleDragEnd);
        }

        createCards();
        autoRotate();
    }
}

/**
 * Sets up the filtering and lightbox functionality for the full portfolio grid.
 */
function setupFullPortfolio() {
    const filtersContainer = document.querySelector('.portfolio-filters');
    const portfolioGrid = document.querySelector('.full-portfolio-grid');

    if (!filtersContainer || !portfolioGrid) return;

    filtersContainer.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.matches('.filter-btn')) return;

        // Update active button state
        filtersContainer.querySelector('.active').classList.remove('active');
        target.classList.add('active');

        const filterValue = target.dataset.filter;
        const gridItems = portfolioGrid.querySelectorAll('.portfolio-item-grid');

        gridItems.forEach(item => {
            const itemCategory = item.dataset.category;
            if (filterValue === 'All' || itemCategory === filterValue) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
}


/**
 * Sets up the image lightbox functionality for both carousel and grid.
 */
function setupImageLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    if (!lightbox) return;

    const lightboxMainImage = lightbox.querySelector('.lightbox-main-image');
    const thumbnailsContainer = lightbox.querySelector('.lightbox-thumbnails');
    const lightboxTitle = lightbox.querySelector('.lightbox-title');
    const lightboxCategory = lightbox.querySelector('.lightbox-category');
    const lightboxDescription = lightbox.querySelector('.lightbox-description');
    
    const openLightbox = (projectId) => {
        const project = portfolioItems.find(p => p.id === projectId);
        if (!project) return;
        
        // Populate text content
        lightboxTitle.textContent = project.title;
        lightboxCategory.textContent = project.category;
        lightboxDescription.textContent = project.description;

        // Populate gallery
        lightboxMainImage.src = project.images[0];
        thumbnailsContainer.innerHTML = ''; // Clear previous thumbnails

        if (project.images.length > 1) {
            thumbnailsContainer.hidden = false;
            project.images.forEach((imgSrc, index) => {
                const thumb = document.createElement('img');
                thumb.src = imgSrc;
                thumb.alt = `${project.title} - view ${index + 1}`;
                thumb.classList.add('lightbox-thumbnail');
                if (index === 0) {
                    thumb.classList.add('active');
                }
                thumb.addEventListener('click', () => {
                    lightboxMainImage.src = imgSrc;
                    thumbnailsContainer.querySelector('.active')?.classList.remove('active');
                    thumb.classList.add('active');
                });
                thumbnailsContainer.appendChild(thumb);
            });
        } else {
            thumbnailsContainer.hidden = true;
        }

        lightbox.classList.add('is-visible');
        document.body.style.overflow = 'hidden';
    };

    // Event listener for both portfolio sections
    document.body.addEventListener('click', (e) => {
        const carouselCard = e.target.closest('.carousel-3d .card.active');
        const gridItem = e.target.closest('.portfolio-item-grid');
        
        let projectId = null;
        if (carouselCard) {
            projectId = carouselCard.dataset.id;
        } else if (gridItem) {
            projectId = gridItem.dataset.id;
        }

        if (projectId) {
            openLightbox(projectId);
        }
    });

    const closeLightbox = () => {
        lightbox.classList.remove('is-visible');
        document.body.style.overflow = '';
    };

    lightbox.addEventListener('click', (e) => {
        // Close if clicking on the backdrop or the close button
        if (e.target === lightbox || e.target.closest('.lightbox-close')) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('is-visible')) {
            closeLightbox();
        }
    });
}


/**
 * Sets up the testimonial slider functionality.
 */
function setupTestimonialsSlider() {
    const slider = document.querySelector('.testimonial-slider');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    if (!slider || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    const slides = slider.children;
    const totalSlides = slides.length;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });
}

/**
 * Sets up the "Read More" functionality in the About section.
 */
function setupAboutToggle() {
    const aboutContent = document.querySelector('.about-content');
    if (!aboutContent) return;

    const readMoreBtn = aboutContent.querySelector('.read-more-btn');
    const fullTextContainer = aboutContent.querySelector('.about-full-text');

    if (!readMoreBtn || !fullTextContainer) return;

    readMoreBtn.addEventListener('click', () => {
        // Add a class to trigger the transition
        aboutContent.classList.add('is-expanded');
        // Hide the button after click
        readMoreBtn.style.display = 'none';
    });
}


/**
 * Sets up real-time validation for the contact form.
 */
function setupContactFormValidation() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const phoneInput = form.querySelector('#phone');
    const messageInput = form.querySelector('#message');
    const submitBtn = form.querySelector('button[type="submit"]');

    if (!nameInput || !emailInput || !phoneInput || !messageInput || !submitBtn) return;
    
    const inputs = [nameInput, emailInput, phoneInput, messageInput];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Simple regex for international numbers

    const validationRules = {
        name: (value) => value.trim() !== '',
        email: (value) => emailRegex.test(value.trim()),
        phone: (value) => value.trim() === '' || phoneRegex.test(value.trim()), // Optional field
        message: (value) => value.trim() !== '',
    };

    const errorMessages = {
        name: 'Name cannot be empty.',
        email: 'Please enter a valid email address.',
        phone: 'Please enter a valid international phone number.',
        message: 'Message cannot be empty.',
    };

    function validateInput(input) {
        const value = input.value;
        const name = input.name;
        const isValid = validationRules[name] ? validationRules[name](value) : true;
        const formGroup = input.parentElement;
        const errorEl = formGroup?.querySelector('.error-message');

        if (isValid) {
            formGroup?.classList.add('valid');
            formGroup?.classList.remove('invalid');
            if (errorEl) errorEl.textContent = '';
        } else {
            formGroup?.classList.add('invalid');
            formGroup?.classList.remove('valid');
            if (errorEl) errorEl.textContent = errorMessages[name];
        }
        return isValid;
    }

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            validateInput(input);
            const isFormValid = inputs.every(i => {
                // For optional fields, they are valid if empty or if they match the regex
                const name = i.name;
                return validationRules[name](i.value);
            });
            submitBtn.disabled = !isFormValid;
        });
    });
}


/**
 * Sets up the AI assistant functionality.
 */
function setupAIAssistant() {
    const fab = document.querySelector('.chat-fab');
    const chatWindow = document.querySelector('.chat-window');
    const closeBtn = document.querySelector('.chat-close');
    const chatForm = document.querySelector('.chat-form');
    const input = chatForm.querySelector('input');
    const messagesContainer = document.querySelector('.chat-messages');
    const quickQuestionBtns = document.querySelectorAll('.quick-question-btn');

    if (!fab || !chatWindow || !closeBtn || !chatForm || !input || !messagesContainer) return;

    let chat;
    try {
        const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
        chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: "You are a friendly and professional AI assistant for MEDAR STUDIO, a creative design portfolio by Mohamed Amine Amarir. His skills include UI/UX Design, Branding, Web Development, Illustration, and Motion Graphics. Your goal is to helpfully answer visitor questions and encourage them to use the contact form for project inquiries. Keep answers concise and engaging.",
            },
        });
    } catch (error) {
        console.error("Failed to initialize Gemini AI:", error);
        addMessage("Sorry, the AI assistant is currently unavailable.", 'ai');
    }


    const toggleChat = () => {
        const isHidden = chatWindow.hidden;
        chatWindow.hidden = !isHidden;
        fab.setAttribute('aria-expanded', isHidden.toString());
        if (isHidden) {
            input.focus();
            if (messagesContainer.children.length === 0) {
                 addMessage("Hello! I'm the AI assistant for MEDAR STUDIO. How can I help you today?", 'ai');
            }
        }
    };

    fab.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    function addMessage(text, sender, isStreaming = false) {
        const messageEl = document.createElement('div');
        messageEl.classList.add('message', `${sender}-message`);
        
        if (isStreaming) {
            messageEl.innerHTML = text; // Assumes markdown-it will be used or basic HTML
        } else {
            messageEl.textContent = text;
        }

        messagesContainer.appendChild(messageEl);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return messageEl;
    }
    
    async function handleUserMessage(messageText) {
        addMessage(messageText, 'user');

        const responseEl = addMessage('...', 'ai');
        responseEl.classList.add('thinking');

        if (!chat) {
            responseEl.textContent = "I can't connect to the AI service right now.";
            responseEl.classList.remove('thinking');
            return;
        }

        try {
            const stream = await chat.sendMessageStream({ message: messageText });

            let responseText = "";
            let firstChunk = true;

            for await (const chunk of stream) {
                if (firstChunk) {
                    responseText = "";
                    responseEl.classList.remove('thinking');
                    firstChunk = false;
                }
                responseText += chunk.text;
                responseEl.textContent = responseText;
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }

            if (firstChunk) { // Handle case where stream is empty (e.g. safety block)
                responseEl.textContent = "I'm not sure how to respond to that.";
                responseEl.classList.remove('thinking');
            }
        } catch (error) {
            console.error("Gemini API Error:", error);
            responseEl.textContent = "Oops! Something went wrong while getting a response.";
            responseEl.classList.remove('thinking');
        }
    }

    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const messageText = input.value.trim();
        if (messageText) {
            handleUserMessage(messageText);
            input.value = '';
        }
    });

    quickQuestionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const question = btn.textContent;
            const predefined = quickQuestions.find(q => q.question === question);
            addMessage(question, 'user');
            if (predefined) {
                addMessage(predefined.answer, 'ai');
            }
        });
    });
}


// Initial render of the application when the DOM is ready.
document.addEventListener('DOMContentLoaded', renderApp);
