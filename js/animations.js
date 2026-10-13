// ==========================================================================
// ANIMATIONS & HUMAN TOUCH INTERACTIVE POLISH (JUNGLE SAFARI INDIA)
// Features: Lucide icons init, scroll-reveal observer, hero floating motifs,
// mountain/deer/tiger silhouettes, live sighting meter animation,
// back-to-top floating button, smooth hash scrolling, and micro-interactions.
// ==========================================================================

(function() {
    'use strict';

    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.addEventListener('DOMContentLoaded', () => {
        initLucideIcons();
        initScrollReveals();
        initBackToTop();
        initHeroMotifs();
        initHeroSilhouettes();
        initSightingMeters();
        initHomepageParkFilters();
        initSmoothAnchors();
        initNavHighlight();
        initInteractiveFeedback();
        initDynamicObserver();
    });

    // 1. LUCIDE ICONS INITIALIZER & DYNAMIC OBSERVER
    function initLucideIcons() {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            try {
                window.lucide.createIcons();
            } catch (err) {
                console.warn('Lucide icon rendering note:', err);
            }
        }
    }

    // Mutation observer so dynamically injected cards (e.g. from parks.js / packages.js) automatically get Lucide icons
    function initDynamicObserver() {
        let debounceTimer;
        const observer = new MutationObserver(() => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                initLucideIcons();
                bindNewRevealElements();
                initSightingMeters();
            }, 60);
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    // 2. SCROLL REVEAL INTERSECTION OBSERVER
    let scrollObserver = null;

    function initScrollReveals() {
        if (prefersReducedMotion) {
            document.querySelectorAll('.reveal, .reveal-stagger, .stat-item').forEach(el => {
                el.classList.add('in-view');
            });
            return;
        }

        // Auto-decorate key sections with reveal classes if not explicitly set
        autoTagRevealElements();

        if ('IntersectionObserver' in window) {
            scrollObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        // Stagger children if present
                        if (entry.target.classList.contains('reveal-stagger')) {
                            const children = entry.target.children;
                            for (let i = 0; i < children.length; i++) {
                                children[i].style.transitionDelay = `${Math.min(i * 0.08, 0.6)}s`;
                            }
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px'
            });

            bindNewRevealElements();
        } else {
            // Fallback for older browsers
            document.querySelectorAll('.reveal, .reveal-stagger, .stat-item').forEach(el => {
                el.classList.add('in-view');
            });
        }
    }

    function autoTagRevealElements() {
        // Subtle reveals on section headers and feature lists
        document.querySelectorAll('.section-header, .page-hero-title, .page-hero-subtitle').forEach(el => {
            if (!el.classList.contains('reveal')) el.classList.add('reveal');
        });

        // Stagger on common grids
        document.querySelectorAll('.safari-modes-grid, .parks-grid, .packages-grid, .stats-strip-grid, .trust-pillars-grid, .booking-steps-grid').forEach(el => {
            if (!el.classList.contains('reveal-stagger')) el.classList.add('reveal-stagger');
        });
    }

    function bindNewRevealElements() {
        if (!scrollObserver) return;
        const revealable = document.querySelectorAll(
            '.reveal:not(.in-view), .reveal-stagger:not(.in-view), .reveal-left:not(.in-view), .reveal-right:not(.in-view), .reveal-zoom:not(.in-view), .stat-item:not(.in-view), .park-card:not(.in-view), .package-card:not(.in-view), .step-card:not(.in-view)'
        );
        revealable.forEach(el => scrollObserver.observe(el));
    }

    // 3. SIGHTING PROBABILITY METERS ANIMATION
    function initSightingMeters() {
        const meters = document.querySelectorAll('.sighting-meter-fill[data-percent]');
        if (!meters.length) return;

        if ('IntersectionObserver' in window) {
            const meterObserver = new IntersectionObserver((entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const bar = entry.target;
                        const percent = bar.getAttribute('data-percent') || '85';
                        bar.style.width = `${percent}%`;
                        obs.unobserve(bar);
                    }
                });
            }, { threshold: 0.3 });

            meters.forEach(m => meterObserver.observe(m));
        } else {
            meters.forEach(m => {
                m.style.width = `${m.getAttribute('data-percent') || '85'}%`;
            });
        }
    }

    // 4. HOMEPAGE & DESTINATIONS PARK FILTER TABS
    function initHomepageParkFilters() {
        const filterBtns = document.querySelectorAll('.filter-tabs .filter-tab-btn');
        if (!filterBtns.length) return;

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const parentTabs = btn.closest('.filter-tabs');
                parentTabs.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');
                const container = parentTabs.parentElement.querySelector('.parks-grid');
                if (!container) return;

                const cards = container.querySelectorAll('.park-card');
                cards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        card.style.display = '';
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(12px)';
                        setTimeout(() => {
                            card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                            card.style.opacity = '1';
                            card.style.transform = 'none';
                        }, 20);
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // 5. BACK TO TOP BUTTON
    function initBackToTop() {
        let btn = document.getElementById('backToTopBtn');
        if (!btn) {
            btn = document.createElement('button');
            btn.id = 'backToTopBtn';
            btn.className = 'back-to-top';
            btn.setAttribute('aria-label', 'Scroll back to top');
            btn.setAttribute('title', 'Back to top');
            btn.innerHTML = '<i data-lucide="chevron-up" style="width:20px;height:20px;stroke-width:2.5;"></i>';
            document.body.appendChild(btn);
            initLucideIcons();
        }

        const handleScroll = () => {
            if (window.scrollY > 350) {
                btn.classList.add('show');
            } else {
                btn.classList.remove('show');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        btn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        });
    }

    // 6. FLOATING WILDLIFE & BOTANICAL MOTIFS IN HERO
    function initHeroMotifs() {
        if (prefersReducedMotion) return;

        const hero = document.querySelector('.hero-safari, .page-hero');
        if (!hero || hero.querySelector('.hero-motifs')) return;

        const motifsWrap = document.createElement('div');
        motifsWrap.className = 'hero-motifs';
        motifsWrap.setAttribute('aria-hidden', 'true');

        motifsWrap.innerHTML = `
            <div class="hero-motif m1" title="Paw Motif">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="8" cy="4" r="2.2" />
                    <circle cx="16" cy="4" r="2.2" />
                    <circle cx="4" cy="9" r="2" />
                    <circle cx="20" cy="9" r="2" />
                    <path d="M12 10.5c-3.2 0-5.5 2.2-5.5 5.5 0 2.8 2.2 4.5 5.5 4.5s5.5-1.7 5.5-4.5c0-3.3-2.3-5.5-5.5-5.5z"/>
                </svg>
            </div>
            <div class="hero-motif m2" title="Jungle Leaf Motif">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                </svg>
            </div>
            <div class="hero-motif m3" title="Sun Horizon Motif">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2"/><path d="M12 20v2"/>
                    <path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
                    <path d="M2 12h2"/><path d="M20 12h2"/>
                    <path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
                </svg>
            </div>
            <div class="hero-motif m4" title="Wildlife Paw Motif">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="8" cy="4" r="2.2" />
                    <circle cx="16" cy="4" r="2.2" />
                    <circle cx="4" cy="9" r="2" />
                    <circle cx="20" cy="9" r="2" />
                    <path d="M12 10.5c-3.2 0-5.5 2.2-5.5 5.5 0 2.8 2.2 4.5 5.5 4.5s5.5-1.7 5.5-4.5c0-3.3-2.3-5.5-5.5-5.5z"/>
                </svg>
            </div>
        `;

        hero.prepend(motifsWrap);
    }

    // 7. HERO SILHOUETTE DECORATIONS (JungleSafariIndia Signature)
    function initHeroSilhouettes() {
        const hero = document.querySelector('.hero-safari');
        if (!hero || hero.querySelector('.hero-mountain-deco')) return;

        // Mountain base silhouette
        const mtn = document.createElement('div');
        mtn.className = 'hero-mountain-deco';
        mtn.setAttribute('aria-hidden', 'true');
        hero.appendChild(mtn);

        // Deer & Tiger silhouettes
        const deer = document.createElement('div');
        deer.className = 'hero-silhouette-deer';
        deer.setAttribute('aria-hidden', 'true');
        deer.innerHTML = `
            <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M60 40 C65 35 70 25 72 15 C68 18 64 22 62 26 C60 20 58 14 55 10 C54 15 54 22 56 28 C50 32 46 38 45 46 L35 52 L30 50 L28 54 L32 56 L30 75 L34 75 L36 60 L45 62 L42 85 L46 85 L50 64 L54 64 L56 85 L60 85 L58 56 C62 50 64 45 60 40 Z"/>
            </svg>
        `;
        hero.appendChild(deer);

        const tiger = document.createElement('div');
        tiger.className = 'hero-silhouette-tiger';
        tiger.setAttribute('aria-hidden', 'true');
        tiger.innerHTML = `
            <svg viewBox="0 0 120 70" fill="currentColor">
                <path d="M10 45 C15 35 25 35 35 38 C45 35 55 35 70 38 C80 32 90 28 98 25 C102 23 105 26 103 30 C108 28 112 32 110 36 C106 42 98 44 94 45 L95 65 L90 65 L88 50 L75 50 L72 65 L67 65 L68 49 L45 49 L42 65 L37 65 L39 48 L25 48 L22 65 L17 65 L19 46 C14 48 10 45 10 45 Z"/>
            </svg>
        `;
        hero.appendChild(tiger);
    }

    // 8. SMOOTH HASH SCROLLING WITH STICKY HEADER OFFSET
    function initSmoothAnchors() {
        document.querySelectorAll('a[href*="#"]:not([href="#"])').forEach(link => {
            link.addEventListener('click', (e) => {
                const targetUrl = new URL(link.href, window.location.href);
                if (targetUrl.pathname === window.location.pathname && targetUrl.hash) {
                    const targetEl = document.querySelector(targetUrl.hash);
                    if (targetEl) {
                        e.preventDefault();
                        const headerOffset = 100;
                        const elementPosition = targetEl.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: prefersReducedMotion ? 'auto' : 'smooth'
                        });

                        // If target is an accordion, auto expand it
                        if (targetEl.classList.contains('faq-item')) {
                            targetEl.classList.add('open');
                        }
                    }
                }
            });
        });
    }

    // 9. ACTIVE NAVIGATION LINK STATE
    function initNavHighlight() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.main-navbar .nav-link');

        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            const parentItem = link.closest('.nav-item');
            if (parentItem) {
                if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
                    parentItem.classList.add('active');
                }
            }
        });
    }

    // 10. INTERACTIVE MICRO-FEEDBACK
    function initInteractiveFeedback() {
        document.querySelectorAll('.btn-safari-primary, .btn-safari-gold, .btn-park-book, .filter-tab-btn').forEach(btn => {
            btn.addEventListener('mousedown', () => {
                btn.style.transform = 'scale(0.97)';
            });
            btn.addEventListener('mouseup', () => {
                btn.style.transform = '';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    }

})();
