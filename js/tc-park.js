
/* === SCRIPT 13 === */

        /* ──────────────────────────────────────────────────────────────
           Scroll-reveal, navbar-scroll state, smooth-scroll and the
           mobile menu all live in resources/js/app.js (single source of
           truth). They used to be re-implemented here as well, which
           bound three listeners to every anchor and three scroll
           listeners to the window, and overwrote the .scrolled class
           with inline styles. Only page-behaviour that is genuinely
           layout-specific remains below.
        ────────────────────────────────────────────────────────────── */

        window.toggleMobileMenu = function (e) {
            if (e) e.preventDefault();
            const menu = document.getElementById('mobileMenu');
            const backdrop = document.getElementById('mobileMenuBackdrop');
            const toggle = document.getElementById('navToggle');
            const isOpen = menu ? menu.classList.toggle('open') : false;
            if (backdrop) backdrop.classList.toggle('open', isOpen);
            if (toggle) {
                toggle.setAttribute('aria-expanded', String(isOpen));
                toggle.innerHTML = isOpen ? '<i class="bi bi-x-lg" aria-hidden="true"></i>' : '<i class="bi bi-list" aria-hidden="true"></i>';
            }
            document.body.classList.toggle('menu-open', isOpen);
        };

        window.closeMobileMenu = function () {
            const menu = document.getElementById('mobileMenu');
            const backdrop = document.getElementById('mobileMenuBackdrop');
            const toggle = document.getElementById('navToggle');
            if (menu) menu.classList.remove('open');
            if (backdrop) backdrop.classList.remove('open');
            if (toggle) {
                toggle.setAttribute('aria-expanded', 'false');
                toggle.innerHTML = '<i class="bi bi-list" aria-hidden="true"></i>';
            }
            document.body.classList.remove('menu-open');
        };

        window.toggleMobileParksDropdown = function (btn) {
            const parent = btn.closest('.mobile-dropdown');
            if (!parent) return;
            const isExpanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!isExpanded));
            parent.classList.toggle('open', !isExpanded);
        };

        /* ── Mobile menu: hand the hamburger to the accessible handler ── */
        document.getElementById('navToggle')?.addEventListener('click', function (e) {
            window.toggleMobileMenu(e);
        });

        /* ── Destination card: tap-to-expand description on touch devices
           (the desktop equivalent is a CSS :hover rule). ── */
        document.querySelectorAll('.dest-card').forEach(card => {
            card.addEventListener('click', () => {
                const desc = card.querySelector('.dest-desc');
                if (!desc) return;
                const isOpen = desc.style.maxHeight && desc.style.maxHeight !== '0px';
                document.querySelectorAll('.dest-desc').forEach(d => {
                    d.style.maxHeight = '0px';
                    d.style.opacity = '0';
                    d.style.marginBottom = '0';
                });
                if (!isOpen) {
                    desc.style.maxHeight = '80px';
                    desc.style.opacity = '1';
                    desc.style.marginBottom = '0.75rem';
                }
            });
        });

        /* ── Hero search: never allow a past date ── */
        const dateInput = document.querySelector('.search-field input[type="date"]');
        if (dateInput) {
            dateInput.setAttribute('min', new Date().toISOString().split('T')[0]);
        }

        /* ── Hero search button: pending feedback on submit ── */
        const searchBtn = document.querySelector('.btn-gold-hero');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                const origText = searchBtn.textContent;
                searchBtn.textContent = 'Searching…';
                searchBtn.style.filter = 'brightness(0.9)';
                setTimeout(() => {
                    searchBtn.textContent = origText;
                    searchBtn.style.filter = '';
                }, 1200);
            });
        }

        /* ── Press feedback for button variants app.js does not cover ── */
        document.querySelectorAll('.btn-outline-custom, .cta-btn').forEach(btn => {
            const reset = () => { btn.style.transform = ''; };
            btn.addEventListener('mousedown', () => { btn.style.transform = 'scale(0.97)'; });
            btn.addEventListener('mouseup', reset);
            btn.addEventListener('mouseleave', reset);
        });

        document.addEventListener('DOMContentLoaded', function() {
            var bookingUrl = "safari-booking.html";
            document.querySelectorAll('a[href="' + bookingUrl + '"]').forEach(function(link) {
                var existingOnclick = link.getAttribute('onclick') || '';
                var newOnclick = existingOnclick +
                    " if (window.gtag) gtag('event', 'book_now_click', { page_location: window.location.href });";
                link.setAttribute('onclick', newOnclick);
            });
        });

        window.showFlashMessage = function(message, type = 'success') {
            let container = document.getElementById('toastContainer');
            if (!container) {
                container = document.createElement('div');
                container.id = 'toastContainer';
                container.className = 'toast-container';
                document.body.appendChild(container);
            }
            const icon = type === 'error' ? 'bi-x-circle-fill' : type === 'info' ? 'bi-info-circle-fill' :
                'bi-check-circle-fill';
            const toast = document.createElement('div');
            toast.className = `alert-toast alert-toast--${type}`;
            toast.innerHTML = `
            <i class="bi ${icon}" aria-hidden="true"></i>
            <span>${message}</span>
            <button type="button" class="alert-toast__close" aria-label="Dismiss notification">&times;</button>
            <div class="alert-toast__progress" aria-hidden="true"></div>
        `;
            container.appendChild(toast);
            initToast(toast);
        };

        function initToast(toast) {
            const closeBtn = toast.querySelector('.alert-toast__close');
            const removeToast = () => {
                toast.classList.add('hide');
                setTimeout(() => {
                    toast.remove();
                }, 250);
            };
            closeBtn?.addEventListener('click', removeToast);
            setTimeout(removeToast, 3500);
        }

        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.alert-toast').forEach(initToast);
        });
    

/* === SCRIPT 19 === */

        document.addEventListener('DOMContentLoaded', () => {
            const travelerReviews = document.getElementById('traveler-reviews');
            const faqSection = document.getElementById('faq');
            const enquiryForm = document.getElementById('tadoba-lead-form') || document.querySelector('aside.tc-enquiry') || document.querySelector('[id$="-lead-form"]');

            const scrollToEnquiryForm = (event) => {
                if (!enquiryForm) return;

                event?.preventDefault();

                const stickySelectors = ['.topbar', '.navbar-custom', '.noticebar', '.tc-bar'];
                const stickyBottom = stickySelectors.reduce((lowestEdge, selector) => {
                    const element = document.querySelector(selector);

                    if (!element || element.offsetParent === null) return lowestEdge;

                    const styles = window.getComputedStyle(element);
                    if (!['fixed', 'sticky'].includes(styles.position)) return lowestEdge;
                    if (selector === '.tc-bar' && styles.position !== 'fixed') return lowestEdge;

                    const bounds = element.getBoundingClientRect();
                    return bounds.top < window.innerHeight / 2 && bounds.bottom > 0 ?
                        Math.max(lowestEdge, bounds.bottom) :
                        lowestEdge;
                }, 0);

                const formBounds = enquiryForm.getBoundingClientRect();
                const viewportBottomGap = window.innerWidth <= 767 ? 74 : 16;
                const availableHeight = window.innerHeight - stickyBottom - viewportBottomGap - 8;
                const topGap = formBounds.height <= availableHeight ?
                    Math.max(8, (availableHeight - formBounds.height) / 2) :
                    8;
                const destination = window.scrollY + formBounds.top - stickyBottom - topGap;

                window.scrollTo({
                    top: Math.max(0, destination),
                    behavior: event ? 'smooth' : 'auto'
                });

                if (enquiryForm.id) {
                    window.history.replaceState(null, '', '#' + enquiryForm.id);
                }
            };

            document.querySelectorAll('a[href*="-lead-form"]').forEach((button) => {
                button.addEventListener('click', scrollToEnquiryForm);
            });

            if (window.location.hash.includes('-lead-form')) {
                window.requestAnimationFrame(() => window.requestAnimationFrame(() => scrollToEnquiryForm()));
            }

            if (travelerReviews && faqSection) {
                faqSection.parentNode.insertBefore(travelerReviews, faqSection);
            }

            const galleryItems = [...document.querySelectorAll('.tc-conv-media')];
            const galleryLightbox = document.getElementById('tcGalleryLightbox');
            const galleryWrapper = galleryLightbox?.querySelector('.swiper-wrapper');
            const galleryClose = galleryLightbox?.querySelector('.tc-gallery-lightbox__close');
            let gallerySwiper;
            let galleryTrigger;

            if (window.Swiper && galleryLightbox && galleryWrapper && galleryItems.length) {
                galleryItems.forEach((item) => {
                    const image = item.querySelector('img');
                    const title = item.querySelector('.tc-conv-caption strong')?.textContent ?? '';
                    const description = item.querySelector('.tc-conv-caption span')?.textContent ?? '';
                    const slide = document.createElement('div');
                    const slideImage = document.createElement('img');
                    const caption = document.createElement('div');
                    const captionTitle = document.createElement('strong');

                    slide.className = 'swiper-slide tc-gallery-lightbox__slide';
                    slideImage.src = image.currentSrc || image.src;
                    slideImage.alt = image.alt;
                    slideImage.loading = 'lazy';
                    caption.className = 'tc-gallery-lightbox__caption';
                    captionTitle.textContent = title;
                    caption.append(captionTitle, document.createTextNode(description ? ` — ${description}` :
                        ''));
                    slide.append(slideImage, caption);
                    galleryWrapper.append(slide);
                });

                gallerySwiper = new Swiper('.tc-gallery-lightbox__swiper', {
                    slidesPerView: 1,
                    spaceBetween: 24,
                    keyboard: {
                        enabled: true
                    },
                    navigation: {
                        nextEl: '.tc-gallery-lightbox .swiper-button-next',
                        prevEl: '.tc-gallery-lightbox .swiper-button-prev'
                    },
                    pagination: {
                        el: '.tc-gallery-lightbox .swiper-pagination',
                        type: 'fraction'
                    }
                });

                const openGallery = (index, trigger) => {
                    galleryTrigger = trigger;
                    gallerySwiper.slideTo(index, 0);
                    galleryLightbox.classList.add('is-open');
                    galleryLightbox.setAttribute('aria-hidden', 'false');
                    document.body.classList.add('tc-lightbox-open');
                    galleryClose.focus();
                };

                const closeGallery = () => {
                    galleryLightbox.classList.remove('is-open');
                    galleryLightbox.setAttribute('aria-hidden', 'true');
                    document.body.classList.remove('tc-lightbox-open');
                    galleryTrigger?.focus();
                };

                galleryItems.forEach((item, index) => {
                    item.addEventListener('click', () => openGallery(index, item));
                    item.addEventListener('keydown', (event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            openGallery(index, item);
                        }
                    });
                });

                galleryClose.addEventListener('click', closeGallery);
                galleryLightbox.addEventListener('click', (event) => {
                    if (event.target === galleryLightbox) closeGallery();
                });
                document.addEventListener('keydown', (event) => {
                    if (event.key === 'Escape' && galleryLightbox.classList.contains('is-open'))
                        closeGallery();
                });
            }

            if (window.Swiper && document.querySelector('.tc-review-swiper')) {
                new Swiper('.tc-review-swiper', {
                    slidesPerView: 1,
                    spaceBetween: 16,
                    loop: true,
                    grabCursor: true,
                    autoplay: {
                        delay: 4500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    },
                    pagination: {
                        el: '.tc-review-swiper .swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.tc-review-next',
                        prevEl: '.tc-review-prev'
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 3
                        }
                    },
                });
            }
        });

        function toggleTcFaq(btn) {
            const ans = btn.nextElementSibling;
            const open = ans.classList.toggle('open');
            btn.classList.toggle('open', open);
            btn.setAttribute('aria-expanded', open);
        }

        const tcHeroEnquiryForm = document.getElementById('tcHeroEnquiryForm');
        const tcEnquiryPhone = document.getElementById('tcEnquiryPhone');
        const tcEnquiryPhoneDraft = document.getElementById('tcEnquiryPhoneDraft');
        const tcEnquiryDate = document.getElementById('tcEnquiryDate');
        const tcContinueVisitorDetails = document.getElementById('tcContinueVisitorDetails');
        let tcSelectedSafariPackage = '';

        // National park picker (image dropdown). It navigates to the selected
        // park's page so the whole enquiry/booking flow stays consistent with
        // the park being shown. Selecting the current park just closes it.
        const tcParkSelect = document.getElementById('tcParkSelect');
        if (tcParkSelect) {
            const tcParkToggle = document.getElementById('tcParkSelectToggle');
            const tcCloseParkSelect = () => {
                tcParkSelect.classList.remove('is-open');
                tcParkToggle.setAttribute('aria-expanded', 'false');
            };
            tcParkToggle.addEventListener('click', (event) => {
                event.stopPropagation();
                const willOpen = !tcParkSelect.classList.contains('is-open');
                tcParkSelect.classList.toggle('is-open', willOpen);
                tcParkToggle.setAttribute('aria-expanded', String(willOpen));
            });
            tcParkSelect.querySelectorAll('.tc-park-select__option').forEach((option) => {
                option.addEventListener('click', () => {
                    if (option.dataset.current === '1') {
                        tcCloseParkSelect();
                        return;
                    }
                    if (option.dataset.url) {
                        window.location.href = option.dataset.url;
                    }
                });
            });
            document.addEventListener('click', (event) => {
                if (!tcParkSelect.contains(event.target)) {
                    tcCloseParkSelect();
                }
            });
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    tcCloseParkSelect();
                }
            });
        }
        const tcDatePicker = tcEnquiryDate && window.flatpickr ? flatpickr(tcEnquiryDate, {
            appendTo: document.getElementById('tcInlineCalendar'),
            dateFormat: 'Y-m-d',
            inline: true,
            minDate: 'today',
        }) : null;

        const tcInternationalPhone = tcEnquiryPhone && window.intlTelInput ? window.intlTelInput(tcEnquiryPhone, {
            initialCountry: 'in',
            separateDialCode: true,
            countrySearch: true,
            strictMode: false,
            nationalMode: true,
            loadUtils: () => import('https://cdn.jsdelivr.net/npm/intl-tel-input@29.1.2/dist/js/utils.js'),
        }) : null;
        let tcDraftTimer;
        const tcFormInstanceId = window.crypto?.randomUUID?.()
            ?? '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (character) =>
                (character ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> character / 4).toString(16)
            );

        const tcFullPhoneNumber = () => {
            const formattedNumber = tcInternationalPhone?.getNumber();

            if (formattedNumber && formattedNumber.charAt(0) === '+') {
                return formattedNumber;
            }

            const raw = (tcEnquiryPhone ? tcEnquiryPhone.value : '').trim();
            const digits = raw.replace(/\D/g, '');
            if (!digits) return null;
            if (raw.charAt(0) === '+') return '+' + digits;
            if (digits.length === 10) return '+91' + digits;
            if (digits.length === 12 && digits.indexOf('91') === 0) return '+' + digits;
            const dialCode = tcInternationalPhone?.getSelectedCountryData()?.dialCode || '91';

            return `+${dialCode}${digits}`;
        };

        const tcEnquiryPayload = () => ({
            name: document.getElementById('tcEnquiryName').value.trim(),
            phone: tcEnquiryPhone.value ? tcFullPhoneNumber() : null,
            email: document.getElementById('tcEnquiryEmail').value.trim() || null,
            safari_date: document.getElementById('tcEnquiryDate').value || null,
            timeslot: document.getElementById('tcEnquiryTimeslot').value || null,
            safari_mode: document.getElementById('tcEnquirySafariMode').value || null,
            guests: document.getElementById('tcEnquiryGuests').value || null,
            package_name: tcSelectedSafariPackage || null,
            source: 'safari',
            form_type: 'Hero Booking Form',
            national_park_id: 2,
            form_instance_id: tcFormInstanceId,
            _token: document.querySelector('meta[name="csrf-token"]')?.content,
        });

        const tcModalSummaryFields = {
            safari_date: 'tcConfirmDate',
            timeslot: 'tcConfirmTiming',
            safari_mode: 'tcConfirmMode',
            package_name: 'tcConfirmPackage',
            guests: 'tcConfirmGuests',
            name: 'tcConfirmName',
            phone: 'tcConfirmPhone',
            email: 'tcConfirmEmail',
        };

        const tcShowBookingConfirmation = (payload) => {
            Object.entries(tcModalSummaryFields).forEach(([field, elementId]) => {
                document.getElementById(elementId).textContent = payload[field] || '—';
            });
            document.getElementById('tcConfirmPackageItem')?.classList.toggle('d-none', !payload.package_name);

            if (window.bootstrap && window.bootstrap.Modal) {
                window.bootstrap.Modal.getOrCreateInstance(document.getElementById('exampleModal')).show();
            }
        };

        tcContinueVisitorDetails?.addEventListener('click', (event) => {
            event.preventDefault();
            const currentPayload = tcEnquiryPayload();
            const savedPayload = JSON.parse(sessionStorage.getItem('tcVisitorBookingDetails') || '{}');
            const payload = {
                ...savedPayload,
                ...Object.fromEntries(
                    Object.entries(currentPayload).filter(([, value]) => value)
                )
            };
            const requiredFields = [
                'national_park_id', 'safari_date', 'timeslot', 'safari_mode', 'guests', 'name', 'phone', 'email'
            ];

            if (requiredFields.some((field) => !payload[field])) {
                window.bootstrap?.Modal?.getInstance(document.getElementById('exampleModal'))?.hide();
                const status = document.getElementById('tcHeroEnquiryStatus');
                status.className = 'tc-enquiry__status is-error';
                status.textContent = 'Please complete every booking detail before continuing.';
                return;
            }

            const query = new URLSearchParams();

            requiredFields.forEach((field) => {
                query.set(field, payload[field]);
            });
            if (payload.package_name) {
                query.set('package_name', payload.package_name);
            }

            const parkMatch = window.location.pathname.match(/([a-z-]+)-national-park/);
            const currentPark = document.body.dataset.park || (parkMatch ? parkMatch[1] : 'jim-corbett');
            window.location.href = `safari-booking.html?park=${currentPark}&${query.toString()}`;
        });

        const tcSaveEnquiry = async (payload) => {
            try {
                sessionStorage.setItem('tcEnquiryDraft', JSON.stringify(payload));
                sessionStorage.setItem('tcVisitorBookingDetails', JSON.stringify(payload));
            } catch (e) {}
            return { success: true };
        };

        const tcCanSubmitToCrm = (payload) => Boolean(
            payload.name &&
            payload.phone &&
            (!payload.email || document.getElementById('tcEnquiryEmail').checkValidity()) &&
            (tcEnquiryPhone.value.replace(/\D/g, '').length >= 8)
        );

        const tcScheduleEnquirySave = () => {
            window.clearTimeout(tcDraftTimer);
            const payload = tcEnquiryPayload();

            if (!payload.name && !payload.phone && !payload.email) {
                return;
            }

            tcDraftTimer = window.setTimeout(async () => {
                try {
                    await tcSaveEnquiry({
                        ...payload,
                        submit_to_crm: tcCanSubmitToCrm(payload),
                    });
                } catch (error) {
                    // Keep typing unobstructed
                }
            }, 1500);
        };

        tcEnquiryPhone?.addEventListener('input', () => {
            const numericPhone = tcEnquiryPhone.value.replace(/\D/g, '').slice(0, 14);
            tcEnquiryPhone.value = numericPhone;
            tcEnquiryPhone.setCustomValidity('');

            if (numericPhone.length === 0) {
                tcEnquiryPhoneDraft.textContent = '';
                tcEnquiryPhoneDraft.classList.remove('is-saved');
                tcScheduleEnquirySave();
                return;
            }

            tcEnquiryPhoneDraft.textContent = '';
            tcEnquiryPhoneDraft.classList.remove('is-saved');
            tcScheduleEnquirySave();
        });

        ['tcEnquiryName', 'tcEnquiryEmail', 'tcEnquiryDate', 'tcEnquiryGuests', 'tcEnquiryTimeslot', 'tcEnquirySafariMode'].forEach((fieldId) => {
            const field = document.getElementById(fieldId);
            field?.addEventListener('input', tcScheduleEnquirySave);
            field?.addEventListener('change', tcScheduleEnquirySave);
            field?.addEventListener('blur', tcScheduleEnquirySave);
        });
        tcEnquiryPhone?.addEventListener('blur', tcScheduleEnquirySave);

        document.querySelectorAll('[data-safari-package]').forEach((packageButton) => {
            packageButton.addEventListener('click', () => {
                tcSelectedSafariPackage = packageButton.dataset.safariPackage;
                document.getElementById('tcEnquirySafariMode').value = 'Gypsy';
                const status = document.getElementById('tcHeroEnquiryStatus');
                status.className = 'tc-enquiry__status is-success';
                status.textContent = `${tcSelectedSafariPackage} selected. Choose your date and complete the details below.`;
                window.setTimeout(() => tcDatePicker?.open(), 350);
            });
        });

        tcEnquiryPhone?.addEventListener('countrychange', () => {
            if (tcEnquiryPhone.value) {
                tcEnquiryPhone.dispatchEvent(new Event('input', {
                    bubbles: true
                }));
            }
        });

        tcHeroEnquiryForm?.addEventListener('submit', async (event) => {
            event.preventDefault();

            const status = document.getElementById('tcHeroEnquiryStatus');
            const submitButton = document.getElementById('tcHeroEnquirySubmit');

            tcHeroEnquiryForm.classList.add('was-validated');

            if (tcEnquiryPhone.value) {
                const tcDigits = tcEnquiryPhone.value.replace(/\D/g, '');
                tcEnquiryPhone.setCustomValidity(
                    (tcDigits.length < 8 || tcDigits.length > 14)
                        ? 'Please enter a valid phone number (8 to 14 digits).'
                        : ''
                );
            }

            if (!tcEnquiryDate.value) {
                status.className = 'tc-enquiry__status is-error';
                status.textContent = 'Please select a safari date.';
                return;
            }

            if (!tcHeroEnquiryForm.checkValidity()) {
                tcHeroEnquiryForm.reportValidity();
                return;
            }

            status.className = 'tc-enquiry__status';
            submitButton.disabled = true;
            submitButton.innerHTML =
                '<span class="spinner-border spinner-border-sm" aria-hidden="true"></span> Sending...';

            const payload = tcEnquiryPayload();
            sessionStorage.setItem('tcVisitorBookingDetails', JSON.stringify(payload));

            try {
                window.clearTimeout(tcDraftTimer);
                await tcSaveEnquiry({...payload, submit_to_crm: true});

                status.className = 'tc-enquiry__status is-success';
                status.innerHTML =
                    '<i class="bi bi-check-circle-fill" aria-hidden="true"></i> Details saved. Please review them before continuing.';
            } catch (error) {
                console.warn('Enquiry save notice:', error);
                status.className = 'tc-enquiry__status is-success';
                status.innerHTML =
                    '<i class="bi bi-check-circle-fill" aria-hidden="true"></i> Details saved. Please review them before continuing.';
            } finally {
                submitButton.disabled = false;
                submitButton.innerHTML =
                    '<i class="bi bi-send-fill" aria-hidden="true"></i> Book Now';
                tcShowBookingConfirmation(payload);
            }
        });
    

/* === SCRIPT 21 === */

        // Mobile-only: collapse long editorial park sections into tap-to-open accordions
        (function () {
            if (!window.matchMedia || !window.matchMedia('(max-width: 600px)').matches) return;
            var page = document.querySelector('.rb-page');
            if (!page) return;
            // Keep interactive / conversion sections fully open (skip these)
            var skip = '.swiper, .rb-stackgrid, .rb-hotel-grid, .rb-form, form, .accordion, .pkloc';
            var openedFirst = false;
            page.querySelectorAll('.rb-section').forEach(function (sec) {
                if (sec.querySelector(skip)) return;
                var h2 = sec.querySelector('.rb-section__h2');
                if (!h2 || sec.classList.contains('rb-acc')) return;
                var inner = h2.parentElement;
                var body = document.createElement('div');
                body.className = 'rb-acc-body';
                var n = h2.nextSibling;
                while (n) { var nx = n.nextSibling; body.appendChild(n); n = nx; }
                if (!body.childNodes.length) return;
                inner.appendChild(body);

                var chev = document.createElement('span');
                chev.className = 'rb-acc-chev';
                chev.setAttribute('aria-hidden', 'true');
                chev.innerHTML = '\u25BE';
                sec.appendChild(chev);
                sec.classList.add('rb-acc');
                if (!openedFirst) { sec.classList.add('rb-open'); body.style.maxHeight = 'none'; openedFirst = true; }
                else { body.style.maxHeight = '0px'; }

                function toggle() {
                    var willOpen = !sec.classList.contains('rb-open');
                    if (willOpen) {
                        sec.classList.add('rb-open');
                        body.style.maxHeight = body.scrollHeight + 'px';
                    } else {
                        body.style.maxHeight = body.scrollHeight + 'px';
                        requestAnimationFrame(function () {
                            sec.classList.remove('rb-open');
                            body.style.maxHeight = '0px';
                        });
                    }
                }
                var eyebrow = sec.querySelector('.rb-section__eyebrow');
                [h2, chev, eyebrow].forEach(function (el) {
                    if (!el) return;
                    el.setAttribute('role', 'button');
                    el.setAttribute('tabindex', '0');
                    el.addEventListener('click', toggle);
                    el.addEventListener('keydown', function (e) {
                        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
                    });
                });
                body.addEventListener('transitionend', function (e) {
                    if (e.propertyName === 'max-height' && sec.classList.contains('rb-open')) {
                        body.style.maxHeight = 'none';
                    }
                });
            });
            // Safety: if resized up to desktop, never leave content clipped
            window.addEventListener('resize', function () {
                if (window.innerWidth > 600) {
                    document.querySelectorAll('.rb-acc-body').forEach(function (b) { b.style.maxHeight = 'none'; });
                }
            });
        })();
    

/* === SCRIPT 22 === */

        // Hero booking form: cap the Travellers dropdown by selected safari type (Canter 20, Elephant 4, else 6)
        (function () {
            var modeSel = document.getElementById('tcEnquirySafariMode');
            var guestSel = document.getElementById('tcEnquiryGuests');
            if (!modeSel || !guestSel) return;
            function capFor(v) {
                v = (v || '').toLowerCase();
                if (v.indexOf('canter') > -1) return 20;
                if (v.indexOf('elephant') > -1) return 4;
                return 6;
            }
            modeSel.addEventListener('change', function () {
                var cap = capFor(modeSel.value);
                var cur = parseInt(guestSel.value, 10) || 0;
                guestSel.innerHTML = '<option value="">Travellers</option>';
                for (var i = 1; i <= cap; i++) {
                    var o = document.createElement('option');
                    o.value = i;
                    o.textContent = i + (i === 1 ? ' Guest' : ' Guests');
                    guestSel.appendChild(o);
                }
                guestSel.value = (cur >= 1 && cur <= cap) ? cur : '';
            });
        })();
    
