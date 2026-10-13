// ==========================================================================
// JUNGLE SAFARI INDIA & JEEP SAFARI BOOKERS - MAIN SCRIPTS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    initHeaderAndNav();
    initStatsCounter();
    initEnquiryGenieModal();
    initHeroBookingFinder();
    initParksSlider();
    initReviewsSlider();
    initFaqAccordion();
    initWhatsAppWidget();
    initToastSystem();
});

// 1. HEADER & STICKY NAVIGATION
function initHeaderAndNav() {
    const mainNav = document.querySelector('.main-navbar');
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            mainNav?.classList.add('scrolled');
        } else {
            mainNav?.classList.remove('scrolled');
        }
    });

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isExpanded = navMenu.classList.toggle('mobile-open');
            mobileToggle.setAttribute('aria-expanded', isExpanded);
            mobileToggle.innerHTML = isExpanded 
                ? '<i data-lucide="x"></i>' 
                : '<i data-lucide="menu"></i>';
            if (window.lucide) { window.lucide.createIcons(); }
        });
    }
}

// 2. STATS COUNTER ANIMATION
function initStatsCounter() {
    const statCounters = document.querySelectorAll('.stat-number[data-target]');
    if (!statCounters.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const suffix = counter.getAttribute('data-suffix') || '';
                const duration = 1600;
                const stepTime = 20;
                const steps = duration / stepTime;
                const increment = target / steps;
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target.toLocaleString() + suffix;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current).toLocaleString() + suffix;
                    }
                }, stepTime);

                obs.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    statCounters.forEach(counter => observer.observe(counter));
}

// 3. JEEPSAFARIBOOKERS SIGNATURE GENIE MODAL & LEAD CAPTURE
function initEnquiryGenieModal() {
    const modal = document.getElementById('genieModal');
    const openBtn = document.getElementById('sideEnquiryTab');
    const closeBtn = document.getElementById('modalCloseBtn');
    const form = document.getElementById('genieEnquiryForm');
    const plane = document.getElementById('paperPlaneFly');

    if (!modal) return;

    window.openEnquiryModal = function(parkName = '') {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        if (parkName) {
            const parkSelect = document.getElementById('genieParkSelect');
            if (parkSelect) {
                for (let option of parkSelect.options) {
                    if (option.text.toLowerCase().includes(parkName.toLowerCase())) {
                        parkSelect.value = option.value;
                        break;
                    }
                }
            }
        }
    };

    window.closeEnquiryModal = function() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
    };

    openBtn?.addEventListener('click', () => window.openEnquiryModal());
    closeBtn?.addEventListener('click', () => window.closeEnquiryModal());

    modal.addEventListener('click', (e) => {
        if (e.target === modal) window.closeEnquiryModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            window.closeEnquiryModal();
        }
    });

    // Handle Genie Form Submit
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('.modal-submit-btn');
            const originalBtnHtml = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i data-lucide="loader-2" class="spin"></i> Transmitting...';
            if (window.lucide) { window.lucide.createIcons(); }

            // Trigger paper plane animation
            modal.querySelector('.genie-modal-box')?.classList.add('flying');

            const name = document.getElementById('genieName')?.value.trim();
            const phone = document.getElementById('geniePhone')?.value.trim();
            const park = document.getElementById('genieParkSelect')?.selectedOptions[0]?.text;
            const date = document.getElementById('genieDate')?.value;
            const guests = document.getElementById('genieGuests')?.value;

            setTimeout(() => {
                modal.querySelector('.genie-modal-box')?.classList.remove('flying');
                window.closeEnquiryModal();
                form.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHtml;
                if (window.lucide) { window.lucide.createIcons(); }

                showToast(`Thank you ${name}! Our safari planner will call you back on ${phone} within 15 minutes.`, 'success');

                // Save enquiry in localStorage for realistic persistence
                const enquiries = JSON.parse(localStorage.getItem('safari_enquiries') || '[]');
                enquiries.push({ name, phone, park, date, guests, timestamp: new Date().toISOString() });
                localStorage.setItem('safari_enquiries', JSON.stringify(enquiries));
            }, 850);
        });
    }
}

// 4. QUICK BOOKING FINDER BAR (Hero Section)
function initHeroBookingFinder() {
    const finderForm = document.getElementById('heroFinderForm');
    if (!finderForm) return;

    // Set default min date to today + 1 day
    const dateInput = document.getElementById('finderDate');
    if (dateInput) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.min = tomorrow.toISOString().split('T')[0];
        dateInput.value = tomorrow.toISOString().split('T')[0];
    }

    finderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const park = document.getElementById('finderPark')?.value;
        const mode = document.getElementById('finderMode')?.value;
        const date = document.getElementById('finderDate')?.value;
        const shift = document.getElementById('finderShift')?.value;
        const guests = document.getElementById('finderGuests')?.value;

        if (!park) {
            showToast('Please select a National Park to check availability.', 'info');
            return;
        }

        const queryParams = new URLSearchParams({
            park,
            mode,
            date,
            shift,
            guests
        });

        // Navigate to full live booking engine
        window.location.href = `safari-booking.html?${queryParams.toString()}`;
    });
}

// 5. TOAST NOTIFICATION SYSTEM
function initToastSystem() {
    let container = document.getElementById('toastStack');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastStack';
        container.className = 'toast-stack';
        document.body.appendChild(container);
    }

    window.showToast = function(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `custom-toast toast-${type}`;
        
        let lucideIcon = 'check-circle-2';
        if (type === 'info') lucideIcon = 'info';
        if (type === 'error') lucideIcon = 'alert-triangle';

        toast.innerHTML = `
            <i data-lucide="${lucideIcon}" style="width:18px; height:18px; flex-shrink:0;"></i>
            <span>${message}</span>
        `;

        container.appendChild(toast);
        if (window.lucide) { window.lucide.createIcons(); }

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(15px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 4500);
    };
}

// 6. DYNAMIC WHATSAPP WIDGET
function initWhatsAppWidget() {
    const waBtn = document.getElementById('floatingWhatsAppBtn');
    if (!waBtn) return;

    waBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const phone = "919911177045";
        const message = encodeURIComponent(
            "Hello Wild Path Safari! I would like to enquire about Safari Booking & Tour Packages for Corbett / Ranthambore / Tadoba / Kaziranga. Please share live availability and rates."
        );
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    });
}

// 7. HORIZONTAL PARKS NAVIGATION SLIDER & QUICK SELECTOR
function initParksSlider() {
    const track = document.getElementById('parksTrack');
    const prevBtn = document.getElementById('parksPrevBtn');
    const nextBtn = document.getElementById('parksNextBtn');
    const parkItems = document.querySelectorAll('.parks-track .park-item');
    const finderPark = document.getElementById('finderPark');

    if (prevBtn && track) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            track.scrollBy({ left: -260, behavior: 'smooth' });
        });
    }
    if (nextBtn && track) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            track.scrollBy({ left: 260, behavior: 'smooth' });
        });
    }

    parkItems.forEach(item => {
        item.addEventListener('click', () => {
            const parkId = item.getAttribute('data-park');
            parkItems.forEach(p => p.classList.remove('active'));
            item.classList.add('active');

            if (parkId && finderPark) {
                finderPark.value = parkId;
                finderPark.focus();
                finderPark.style.borderColor = '#1b9e4e';
                setTimeout(() => {
                    finderPark.style.borderColor = '';
                }, 900);
            }
        });
    });

    if (finderPark) {
        finderPark.addEventListener('change', () => {
            const val = finderPark.value;
            parkItems.forEach(item => {
                if (item.getAttribute('data-park') === val) {
                    item.classList.add('active');
                    item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                } else {
                    item.classList.remove('active');
                }
            });
        });
    }
}

// 8. CUSTOMER REVIEWS SLIDER
function initReviewsSlider() {
    const track = document.getElementById('reviewsTrack');
    const prevBtn = document.getElementById('reviewsPrevBtn');
    const nextBtn = document.getElementById('reviewsNextBtn');
    const dotsContainer = document.getElementById('reviewsDots');
    if (!track) return;

    const slides = Array.from(track.querySelectorAll('.review-slide'));
    if (!slides.length) return;

    let currentIndex = 0;
    let autoPlayTimer = null;
    let isHovered = false;
    let resumeTimeout = null;

    function getVisibleCount() {
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
    }

    function getMaxIndex() {
        const visible = getVisibleCount();
        return Math.max(0, slides.length - visible);
    }

    function createDots() {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        const maxIndex = getMaxIndex();
        const totalDots = maxIndex + 1;

        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('button');
            dot.className = `review-dot ${i === currentIndex ? 'active' : ''}`;
            dot.type = 'button';
            dot.setAttribute('aria-label', `Go to review slide ${i + 1}`);
            dot.addEventListener('click', () => {
                pauseAndResumeTimer();
                goToSlide(i);
            });
            dotsContainer.appendChild(dot);
        }
    }

    function updateDots(activeIdx) {
        if (!dotsContainer) return;
        const dots = dotsContainer.querySelectorAll('.review-dot');
        const maxIndex = getMaxIndex();
        const boundedIdx = Math.max(0, Math.min(activeIdx, maxIndex));
        dots.forEach((dot, idx) => {
            if (idx === boundedIdx) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function goToSlide(index, smooth = true) {
        const maxIndex = getMaxIndex();
        if (index > maxIndex) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = maxIndex;
        } else {
            currentIndex = index;
        }

        const targetSlide = slides[currentIndex];
        if (targetSlide) {
            const targetLeft = targetSlide.offsetLeft - track.offsetLeft;
            track.scrollTo({
                left: targetLeft,
                behavior: smooth ? 'smooth' : 'auto'
            });
        }
        updateDots(currentIndex);
    }

    function nextSlide() {
        const maxIndex = getMaxIndex();
        if (currentIndex >= maxIndex) {
            goToSlide(0);
        } else {
            goToSlide(currentIndex + 1);
        }
    }

    function prevSlide() {
        const maxIndex = getMaxIndex();
        if (currentIndex <= 0) {
            goToSlide(maxIndex);
        } else {
            goToSlide(currentIndex - 1);
        }
    }

    // Update active index based on user scroll / swipe
    let scrollDebounce;
    track.addEventListener('scroll', () => {
        clearTimeout(scrollDebounce);
        scrollDebounce = setTimeout(() => {
            if (slides.length > 0) {
                const trackLeft = track.scrollLeft;
                let closestIdx = 0;
                let minDiff = Infinity;
                slides.forEach((slide, idx) => {
                    const diff = Math.abs((slide.offsetLeft - track.offsetLeft) - trackLeft);
                    if (diff < minDiff) {
                        minDiff = diff;
                        closestIdx = idx;
                    }
                });
                const maxIndex = getMaxIndex();
                currentIndex = Math.min(closestIdx, maxIndex);
                updateDots(currentIndex);
            }
        }, 50);
    }, { passive: true });

    function pauseAndResumeTimer() {
        isHovered = true;
        clearTimeout(resumeTimeout);
        resumeTimeout = setTimeout(() => {
            isHovered = false;
        }, 3500);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            pauseAndResumeTimer();
            prevSlide();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            pauseAndResumeTimer();
            nextSlide();
        });
    }

    // Auto-advance scrolling every 3.2s
    function startAutoPlay() {
        stopAutoPlay();
        autoPlayTimer = setInterval(() => {
            if (!isHovered) {
                nextSlide();
            }
        }, 3200);
    }

    function stopAutoPlay() {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
        }
    }

    track.addEventListener('mouseenter', () => {
        isHovered = true;
    });

    track.addEventListener('mouseleave', () => {
        isHovered = false;
    });

    track.addEventListener('touchstart', () => {
        pauseAndResumeTimer();
    }, { passive: true });

    window.addEventListener('resize', () => {
        createDots();
        goToSlide(currentIndex, false);
    });

    createDots();
    startAutoPlay();
}

// 9. FAQ ACCORDION INTERACTIVITY
function initFaqAccordion() {
    const questions = document.querySelectorAll('.faq-accordion .faq-question');
    questions.forEach(q => {
        q.addEventListener('click', () => {
            const currentItem = q.closest('.faq-item');
            if (!currentItem) return;

            const isAlreadyOpen = currentItem.classList.contains('open');
            const parentAccordion = currentItem.closest('.faq-accordion');

            // Close other accordion items in the same accordion group
            if (parentAccordion) {
                parentAccordion.querySelectorAll('.faq-item.open').forEach(item => {
                    if (item !== currentItem) {
                        item.classList.remove('open');
                    }
                });
            }

            // Toggle current item
            currentItem.classList.toggle('open', !isAlreadyOpen);
        });
    });
}

