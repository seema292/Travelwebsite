/**
 * WILD PATH SAFARI — DESTINATION NATIONAL PARK CONTROLLER
 * Inspired by jeepsafaribookers.in architecture
 * Renders complete factual National Park guides for all 8 premier reserves
 */

(function () {
    'use strict';

    if (typeof PARKS_DATA === 'undefined' || !PARKS_DATA.length) {
        console.error('PARKS_DATA not loaded');
        return;
    }

    // State
    let currentParkId = getInitialParkId();

    function getInitialParkId() {
        const urlParams = new URLSearchParams(window.location.search);
        const queryPark = urlParams.get('park');
        if (queryPark && PARKS_DATA.some(p => p.id === queryPark || p.slug === queryPark)) {
            const found = PARKS_DATA.find(p => p.id === queryPark || p.slug === queryPark);
            return found ? found.id : 'jim-corbett';
        }
        const hash = window.location.hash.replace('#', '');
        if (hash && PARKS_DATA.some(p => p.id === hash)) {
            return hash;
        }
        return 'jim-corbett';
    }

    function getPark(id) {
        return PARKS_DATA.find(p => p.id === id) || PARKS_DATA[0];
    }

    // ── RENDER STICKY PARK SELECTOR NAV ──
    function renderParkSelector() {
        const navContainer = document.getElementById('parkSelectorWrap');
        if (!navContainer) return;

        navContainer.innerHTML = PARKS_DATA.map(park => {
            const isActive = park.id === currentParkId;
            return `
                <button type="button" class="park-tab-btn ${isActive ? 'active' : ''}" data-park-id="${park.id}">
                    <img src="${park.thumbImage}" alt="${park.name}" class="park-tab-thumb" loading="lazy">
                    <div class="park-tab-meta">
                        <span class="park-tab-title">${park.shortName}</span>
                        <span class="park-tab-state">${park.state}</span>
                    </div>
                </button>
            `;
        }).join('') + `
            <button type="button" class="park-view-all-btn" id="openOverviewModalBtn">
                <i data-lucide="grid"></i> All 8 Parks
            </button>
        `;

        // Add event listeners to tabs
        navContainer.querySelectorAll('.park-tab-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const targetId = this.getAttribute('data-park-id');
                if (targetId && targetId !== currentParkId) {
                    switchPark(targetId);
                }
            });
        });

        // Overview modal trigger
        const modalBtn = document.getElementById('openOverviewModalBtn');
        if (modalBtn) {
            modalBtn.addEventListener('click', openParksOverviewModal);
        }
    }

    // ── SWITCH PARK ──
    function switchPark(parkId) {
        currentParkId = parkId;

        // Update URL without reload
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('park', parkId);
        window.history.pushState({ parkId }, '', newUrl);

        // Update active class in selector
        document.querySelectorAll('.park-tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-park-id') === parkId);
        });

        // Re-render park content
        renderParkContent();

        // Scroll smoothly to top of park content
        const anchor = document.getElementById('parkMainContent');
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // ── RENDER MAIN NATIONAL PARK EXPERIENCE ──
    function renderParkContent() {
        const park = getPark(currentParkId);
        const container = document.getElementById('parkMainContent');
        if (!container) return;

        // Document title update
        document.title = `${park.name} Safari Booking Online | Official Forest Guide & Permits`;

        const facts = park.facts || {
            area: "1,200+ sq. km",
            established: park.established || 1970,
            gatesCount: "Multiple Gates",
            coreGates: 3,
            bufferGates: 2,
            nearestAirport: "Regional Airport",
            nearestRailway: "Nearest Junction",
            weeklyOff: "Open in Season",
            sightingRate: `${park.sightingIndex || 92}% Big Cat Tracking`
        };

        const coreZones = park.zones.filter(z => z.type === 'Core');
        const bufferZones = park.zones.filter(z => z.type === 'Buffer');

        container.innerHTML = `
            <!-- 1. CINEMATIC HERO (rb-hero) -->
            <section class="rb-hero" id="hero">
                <img src="${park.heroImage}" alt="${park.name}" class="rb-hero__bg" loading="eager">
                <div class="container-custom">
                    <div class="rb-hero__content">
                        <div class="rb-hero__breadcrumb">
                            <a href="index.html">Home</a> <i data-lucide="chevron-right" style="width:14px;height:14px;"></i>
                            <a href="destinations.html">Destinations</a> <i data-lucide="chevron-right" style="width:14px;height:14px;"></i>
                            <span style="color:var(--rb-gold-light);">${park.shortName}</span>
                        </div>
                        <span class="rb-hero__eyebrow">
                            <i data-lucide="award"></i> ${park.badge} · Sighting Index: ${park.sightingIndex}%
                        </span>
                        <h1 class="rb-hero__title">
                            ${park.name} Safari Booking <span>Online</span>
                        </h1>
                        <p class="rb-hero__subtitle">
                            ${park.headline || park.tagline}
                        </p>
                        <div class="rb-hero__actions">
                            <a href="#bookSection" class="rb-hero__btn rb-hero__btn--primary">
                                <i data-lucide="calendar-check"></i> Book Safari Online
                            </a>
                            <a href="#zonesSection" class="rb-hero__btn rb-hero__btn--outline">
                                <i data-lucide="layers"></i> Safari Zones &amp; Gates
                            </a>
                            <a href="https://wa.me/919911177045?text=Hello%20Wild%20Path%20Safari%2C%20I%20want%20to%20enquire%20about%20${encodeURIComponent(park.name)}%20Safari" target="_blank" rel="noopener" class="rb-hero__btn rb-hero__btn--wa">
                                <i class="bi bi-whatsapp"></i> Chat on WhatsApp
                            </a>
                        </div>
                        <div class="rb-hero__trust">
                            <span class="rb-hero__trust-item"><i data-lucide="shield-check"></i> 100% Confirmed Forest Permits</span>
                            <span class="rb-hero__trust-item"><i data-lucide="check-circle-2"></i> Authorized 4x4 Gypsy &amp; Driver</span>
                            <span class="rb-hero__trust-item"><i data-lucide="user-check"></i> Certified Wildlife Naturalist</span>
                            <span class="rb-hero__trust-item"><i data-lucide="badge-percent"></i> Zero Hidden Markups</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 2. LIVE BOOKING & PRICE CALCULATOR (bm) -->
            <section class="bm" id="bookSection">
                <div class="container-custom">
                    <div class="bm__head">
                        <span class="bm__eyebrow"><i data-lucide="receipt"></i> Transparent Forest Department Rates</span>
                        <h2 class="bm__h2">Book Your <em>${park.shortName} Safari</em> Online</h2>
                        <p class="bm__lead">Permit booking, registered 4x4 Gypsy vehicle allotment, and trained Forest Department certified tracker included in every safari.</p>
                    </div>

                    <!-- Price Cards Grid -->
                    <div class="bm__cards-grid">
                        <div class="bm__card bm__card--pop">
                            <span class="bm__card-ribbon">Most Popular</span>
                            <h3 class="bm__card-title">4x4 Gypsy (Core Zone)</h3>
                            <p class="bm__card-desc">Prime territory tracking across legendary core gates with maximum tiger sighting density.</p>
                            <div class="bm__card-price">
                                <span class="bm__card-price-amt">₹${park.pricing.gypsyCore.toLocaleString()}</span>
                                <span class="bm__card-price-unit">/ Full Gypsy (Up to 6 Guests)</span>
                            </div>
                            <ul class="bm__card-features">
                                <li><i data-lucide="check"></i> Official Forest Dept Core Permit</li>
                                <li><i data-lucide="check"></i> Exclusive 4x4 Gypsy (No sharing)</li>
                                <li><i data-lucide="check"></i> Registered Forest Driver &amp; Guide</li>
                                <li><i data-lucide="check"></i> Resort Pickup &amp; Drop in Ramnagar</li>
                            </ul>
                            <a href="safari-booking.html?park=${park.id}&zoneType=core" class="bm__card-cta">
                                <i data-lucide="calendar-check"></i> Reserve Core Gypsy
                            </a>
                        </div>

                        <div class="bm__card">
                            <h3 class="bm__card-title">4x4 Gypsy (Buffer Zone)</h3>
                            <p class="bm__card-desc">Lush peripheral forest corridors, eco-tourism trails, and night safaris where permitted.</p>
                            <div class="bm__card-price">
                                <span class="bm__card-price-amt">₹${park.pricing.gypsyBuffer.toLocaleString()}</span>
                                <span class="bm__card-price-unit">/ Full Gypsy (Up to 6 Guests)</span>
                            </div>
                            <ul class="bm__card-features">
                                <li><i data-lucide="check"></i> Forest Department Buffer Permit</li>
                                <li><i data-lucide="check"></i> Dedicated 4x4 Gypsy Vehicle</li>
                                <li><i data-lucide="check"></i> Trained Wildlife Tracker</li>
                                <li><i data-lucide="check"></i> Flexible Booking Windows</li>
                            </ul>
                            <a href="safari-booking.html?park=${park.id}&zoneType=buffer" class="bm__card-cta">
                                <i data-lucide="calendar-check"></i> Reserve Buffer Gypsy
                            </a>
                        </div>

                        <div class="bm__card">
                            <h3 class="bm__card-title">Canter Safari (Open Bus)</h3>
                            <p class="bm__card-desc">High vantage seating in 16-20 seater open safari bus, ideal for grassland vistas and budget travelers.</p>
                            <div class="bm__card-price">
                                <span class="bm__card-price-amt">₹${park.pricing.canterSeat.toLocaleString()}</span>
                                <span class="bm__card-price-unit">/ Person (Per Seat)</span>
                            </div>
                            <ul class="bm__card-features">
                                <li><i data-lucide="check"></i> Canter Seat Permit</li>
                                <li><i data-lucide="check"></i> Elevated Grassland Views</li>
                                <li><i data-lucide="check"></i> Forest Department Guide</li>
                                <li><i data-lucide="check"></i> Economical for Solo &amp; Groups</li>
                            </ul>
                            <a href="safari-booking.html?park=${park.id}&mode=canter" class="bm__card-cta">
                                <i data-lucide="calendar-check"></i> Reserve Canter Seat
                            </a>
                        </div>

                        <div class="bm__card">
                            <h3 class="bm__card-title">Foreign National Gypsy</h3>
                            <p class="bm__card-desc">Dedicated facilitation for international tourists including passport registration &amp; permits.</p>
                            <div class="bm__card-price">
                                <span class="bm__card-price-amt">₹${park.pricing.foreignerGypsy.toLocaleString()}</span>
                                <span class="bm__card-price-unit">/ Gypsy (Up to 6 Non-Indians)</span>
                            </div>
                            <ul class="bm__card-features">
                                <li><i data-lucide="check"></i> Foreign National Forest Permit</li>
                                <li><i data-lucide="check"></i> English-Speaking Naturalist</li>
                                <li><i data-lucide="check"></i> Passport Verification Support</li>
                                <li><i data-lucide="check"></i> Complete Hotel Transfer</li>
                            </ul>
                            <a href="safari-booking.html?park=${park.id}&nationality=foreigner" class="bm__card-cta">
                                <i data-lucide="calendar-check"></i> Reserve Foreigner Gypsy
                            </a>
                        </div>
                    </div>

                    <!-- Interactive Live Safari Estimator -->
                    <div class="bm__calc-box">
                        <h4 class="bm__calc-title"><i data-lucide="calculator"></i> Live Safari Fare Estimator</h4>
                        <p class="bm__calc-subtitle">Configure your preferred date, vehicle type, and traveler count to get an exact, instant price quote.</p>
                        <form id="parkLiveCalcForm">
                            <div class="bm__calc-grid">
                                <div class="bm__field">
                                    <label>Travel Date</label>
                                    <input type="date" class="bm__control" id="calcDate" min="${getTomorrowDate()}" value="${getTomorrowDate()}">
                                </div>
                                <div class="bm__field">
                                    <label>Safari Shift</label>
                                    <select class="bm__control" id="calcShift">
                                        ${park.shifts.map(s => `<option value="${s.id}">${s.name} (${s.timing.split('(')[0].trim()})</option>`).join('')}
                                    </select>
                                </div>
                                <div class="bm__field">
                                    <label>Vehicle Type</label>
                                    <select class="bm__control" id="calcVehicle">
                                        <option value="gypsy-core" selected>4x4 Gypsy (Core Zone)</option>
                                        <option value="gypsy-buffer">4x4 Gypsy (Buffer Zone)</option>
                                        <option value="canter">Canter Bus (Per Seat)</option>
                                    </select>
                                </div>
                                <div class="bm__field">
                                    <label>Total Travelers</label>
                                    <select class="bm__control" id="calcGuests">
                                        <option value="1">1 Person</option>
                                        <option value="2" selected>2 Persons</option>
                                        <option value="4">4 Persons</option>
                                        <option value="6">6 Persons (Full Gypsy)</option>
                                    </select>
                                </div>
                                <div class="bm__field">
                                    <label>Nationality</label>
                                    <select class="bm__control" id="calcNationality">
                                        <option value="indian" selected>Indian National</option>
                                        <option value="foreigner">Foreign National</option>
                                    </select>
                                </div>
                            </div>
                            <div class="bm__calc-result">
                                <div class="bm__calc-price-wrap">
                                    <span class="bm__calc-price-label">Estimated Total Price</span>
                                    <span class="bm__calc-price-num" id="calcTotalDisplay">₹${park.pricing.gypsyCore.toLocaleString()}</span>
                                    <span class="bm__calc-price-breakdown" id="calcBreakdownDisplay">Includes Permit + Gypsy Vehicle + Registered Driver &amp; Guide + GST</span>
                                </div>
                                <a href="safari-booking.html?park=${park.id}" class="bm__calc-btn" id="calcProceedBtn">
                                    <span>Proceed to Book Slot</span> <i data-lucide="arrow-right"></i>
                                </a>
                            </div>
                        </form>
                    </div>

                    <!-- 3-Step Booking Process -->
                    <div class="bm__how">
                        <div class="bm__step">
                            <span class="bm__step-num">1</span>
                            <div>
                                <h4 class="bm__step-title">Select Zone &amp; Date</h4>
                                <p class="bm__step-desc">Pick your preferred travel date, shift (Morning or Evening), and zone from our live inventory.</p>
                            </div>
                        </div>
                        <div class="bm__step">
                            <span class="bm__step-num">2</span>
                            <div>
                                <h4 class="bm__step-title">Submit Photo ID</h4>
                                <p class="bm__step-desc">Enter traveler names and government ID numbers (Aadhaar, Passport, or Voter ID).</p>
                            </div>
                        </div>
                        <div class="bm__step">
                            <span class="bm__step-num">3</span>
                            <div>
                                <h4 class="bm__step-title">Permit Confirmation</h4>
                                <p class="bm__step-desc">Receive instant forest booking voucher and coordinator contact via SMS &amp; WhatsApp.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 3. PARK LEGACY & AT-A-GLANCE (rb-section + rb-facts) -->
            <section class="rb-section" id="aboutSection">
                <div class="container-custom">
                    <div class="rb-story-grid">
                        <!-- Left Column: Story -->
                        <div class="rb-story-body">
                            <span class="rb-section__eyebrow"><i data-lucide="book-open"></i> About the Reserve</span>
                            <h2 class="rb-section__h2">${park.name} — <em>Where Wildlife Reigns</em></h2>
                            <p>${park.desc}</p>
                            <p>${park.story || ''}</p>

                            <!-- Naturalist Quote Card -->
                            <div class="rb-quote-card">
                                <p class="rb-quote-text">"${park.naturalistNote ? park.naturalistNote.quote : 'The thrill of hearing sudden alarm calls echo across the forest canopy followed by the slow, majestic stride of a Bengal tiger walking onto the track is unmatched anywhere on earth.'}"</p>
                                <div class="rb-quote-author">
                                    <i data-lucide="feather" style="color:var(--rb-gold);"></i>
                                    <strong>${park.naturalistNote ? park.naturalistNote.author : 'Chief Wildlife Naturalist'}</strong>
                                    <span>· ${park.naturalistNote ? park.naturalistNote.role : 'Wild Path Field Expedition'}</span>
                                </div>
                            </div>

                            <p>
                                <strong>Key Wildlife:</strong> ${park.keyFauna.join(' · ')}.
                            </p>
                        </div>

                        <!-- Right Column: Sticky Facts Panel (rb-facts) -->
                        <aside class="rb-facts">
                            <div class="rb-facts__head">
                                <span class="rb-facts__kicker"><i data-lucide="compass"></i> Quick Reference</span>
                                <h3 class="rb-facts__title">${park.shortName} at a Glance</h3>
                            </div>
                            <div class="rb-facts__grid">
                                <div class="rb-fact">
                                    <span class="rb-fact__label"><i data-lucide="map-pin"></i> Location</span>
                                    <span class="rb-fact__val">${park.state}</span>
                                </div>
                                <div class="rb-fact">
                                    <span class="rb-fact__label"><i data-lucide="calendar"></i> Established</span>
                                    <span class="rb-fact__val">${facts.established}</span>
                                </div>
                                <div class="rb-fact">
                                    <span class="rb-fact__label"><i data-lucide="maximize-2"></i> Total Area</span>
                                    <span class="rb-fact__val">${facts.area}</span>
                                </div>
                                <div class="rb-fact">
                                    <span class="rb-fact__label"><i data-lucide="door-open"></i> Gates</span>
                                    <span class="rb-fact__val">${facts.gatesCount}</span>
                                </div>
                                <div class="rb-fact rb-fact--wide">
                                    <span class="rb-fact__label"><i data-lucide="sun"></i> Best Travel Season</span>
                                    <span class="rb-fact__val">${park.bestSeason}</span>
                                </div>
                                <div class="rb-fact rb-fact--wide">
                                    <span class="rb-fact__label"><i data-lucide="train"></i> Nearest Railhead</span>
                                    <span class="rb-fact__val">${facts.nearestRailway}</span>
                                </div>
                                <div class="rb-fact rb-fact--wide">
                                    <span class="rb-fact__label"><i data-lucide="plane"></i> Nearest Airport</span>
                                    <span class="rb-fact__val">${facts.nearestAirport}</span>
                                </div>
                                <div class="rb-fact">
                                    <span class="rb-fact__label"><i data-lucide="clock"></i> Weekly Off</span>
                                    <span class="rb-fact__val">${facts.weeklyOff}</span>
                                </div>
                                <div class="rb-fact">
                                    <span class="rb-fact__label"><i data-lucide="activity"></i> Sightings</span>
                                    <span class="rb-fact__val">${facts.sightingRate}</span>
                                </div>
                            </div>
                            <div class="rb-facts__cta-wrap">
                                <a href="https://wa.me/919911177045?text=Hello%20Wild%20Path%20Safari%2C%20please%20share%20availability%20for%20${encodeURIComponent(park.name)}" target="_blank" rel="noopener" class="rb-facts__cta">
                                    <i class="bi bi-whatsapp"></i> Chat with Park Naturalist
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <!-- 4. "A DAY ON SAFARI" FIELD JOURNAL JOURNEY (rb-journey) -->
            <section class="rb-section rb-section--alt" id="journalSection">
                <div class="container-custom">
                    <div style="text-align:center; max-width:700px; margin:0 auto 2.5rem;">
                        <span class="rb-section__eyebrow" style="justify-content:center;"><i data-lucide="scroll"></i> Field Journal</span>
                        <h2 class="rb-section__h2">A Day on <em>Safari</em> in ${park.shortName}</h2>
                        <p class="rb-section__lead" style="margin:0 auto;">From chilly dawn mists to nocturnal campfire debriefs — experience the natural rhythm of an authentic wildlife expedition.</p>
                    </div>

                    <div class="rb-journey">
                        ${(park.dayOnSafari || getDefaultDayOnSafari(park)).map((item, idx) => `
                            <div class="rb-journey__row">
                                <div class="rb-journey__dot">${idx + 1}</div>
                                <div>
                                    <div class="rb-journey__time">${item.time}</div>
                                    <h4 class="rb-journey__title">${item.title}</h4>
                                    <p class="rb-journey__desc">${item.desc}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- 5. TYPES OF SAFARI AVAILABLE -->
            <section class="rb-section" id="safariTypesSection">
                <div class="container-custom">
                    <div style="text-align:center; max-width:720px; margin:0 auto 2.5rem;">
                        <span class="rb-section__eyebrow" style="justify-content:center;"><i data-lucide="truck"></i> Safari Vehicles</span>
                        <h2 class="rb-section__h2">Types of Safari in <em>${park.shortName}</em></h2>
                        <p class="rb-section__lead" style="margin:0 auto;">Choose between intimate open 4x4 Gypsy game drives or panoramic Canter bus safaris operated under strict Forest Department regulations.</p>
                    </div>

                    <div class="rb-safari-grid">
                        <div class="rb-safari-card">
                            <div class="rb-safari-card__media">
                                <img src="https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=600&q=80" alt="4x4 Gypsy Safari" loading="lazy">
                                <span class="rb-safari-card__badge rb-safari-card__badge--gold">Top Recommendation</span>
                            </div>
                            <div class="rb-safari-card__body">
                                <h3 class="rb-safari-card__title">Open 4x4 Maruti Gypsy Safari</h3>
                                <p class="rb-safari-card__desc">Accommodating up to 6 guests, the 4x4 Gypsy is the gold standard for Indian wildlife safaris. It provides 360-degree photography angles, deep rugged trail mobility, and a private government guide.</p>
                                <div class="rb-safari-card__footer">
                                    <div class="rb-safari-card__price">
                                        <span>Starting From</span>
                                        <span>₹${park.pricing.gypsyBuffer.toLocaleString()} <small style="font-size:0.75rem; color:var(--rb-muted);">/ Gypsy</small></span>
                                    </div>
                                    <a href="safari-booking.html?park=${park.id}&mode=gypsy" class="btn-safari-primary" style="padding:0.5rem 1rem; font-size:0.85rem;">Book Gypsy</a>
                                </div>
                            </div>
                        </div>

                        <div class="rb-safari-card">
                            <div class="rb-safari-card__media">
                                <img src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=600&q=80" alt="Canter Safari" loading="lazy">
                                <span class="rb-safari-card__badge">High Vantage</span>
                            </div>
                            <div class="rb-safari-card__body">
                                <h3 class="rb-safari-card__title">Open Canter Safari Bus</h3>
                                <p class="rb-safari-card__desc">A heavy-duty open safari bus carrying 16 to 20 guests. High vantage height makes it excellent for sighting big cats over tall elephant grass and represents an economical choice for families.</p>
                                <div class="rb-safari-card__footer">
                                    <div class="rb-safari-card__price">
                                        <span>Starting From</span>
                                        <span>₹${park.pricing.canterSeat.toLocaleString()} <small style="font-size:0.75rem; color:var(--rb-muted);">/ Seat</small></span>
                                    </div>
                                    <a href="safari-booking.html?park=${park.id}&mode=canter" class="btn-safari-primary" style="padding:0.5rem 1rem; font-size:0.85rem;">Book Canter</a>
                                </div>
                            </div>
                        </div>

                        ${park.id === 'tadoba' || park.id === 'pench' ? `
                        <div class="rb-safari-card">
                            <div class="rb-safari-card__media">
                                <img src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=600&q=80" alt="Buffer Night Safari" loading="lazy">
                                <span class="rb-safari-card__badge">Nocturnal Wonder</span>
                            </div>
                            <div class="rb-safari-card__body">
                                <h3 class="rb-safari-card__title">Nocturnal Buffer Night Safari</h3>
                                <p class="rb-safari-card__desc">Specially licensed evening game drives in peripheral buffer zones. Explore the mysterious nocturnal lives of leopards, sloth bears, civets, and nightjar birds with specialized spotlight guides.</p>
                                <div class="rb-safari-card__footer">
                                    <div class="rb-safari-card__price">
                                        <span>Night Shift</span>
                                        <span>07:00 PM – 10:00 PM</span>
                                    </div>
                                    <a href="safari-booking.html?park=${park.id}&shift=night" class="btn-safari-primary" style="padding:0.5rem 1rem; font-size:0.85rem;">Book Night</a>
                                </div>
                            </div>
                        </div>` : ''}

                        ${park.id === 'kaziranga' ? `
                        <div class="rb-safari-card">
                            <div class="rb-safari-card__media">
                                <img src="https://images.unsplash.com/photo-1581852017103-68ac65504071?auto=format&fit=crop&w=600&q=80" alt="Dawn Elephant Safari" loading="lazy">
                                <span class="rb-safari-card__badge">Dawn Exclusive</span>
                            </div>
                            <div class="rb-safari-card__body">
                                <h3 class="rb-safari-card__title">Dawn Elephant Safari</h3>
                                <p class="rb-safari-card__desc">Move quietly through 10-foot tall elephant grass atop trained elephants during early morning light. Enables close-up observation of wild rhinos, buffalos, and swamp deer.</p>
                                <div class="rb-safari-card__footer">
                                    <div class="rb-safari-card__price">
                                        <span>Dawn Shift</span>
                                        <span>05:30 AM – 07:30 AM</span>
                                    </div>
                                    <a href="safari-booking.html?park=${park.id}&mode=elephant" class="btn-safari-primary" style="padding:0.5rem 1rem; font-size:0.85rem;">Book Elephant</a>
                                </div>
                            </div>
                        </div>` : ''}
                    </div>
                </div>
            </section>

            <!-- 6. SAFARI TIMINGS SCHEDULE 2026 -->
            <section class="rb-section rb-section--alt" id="timingsSection">
                <div class="container-custom">
                    <div style="text-align:center; max-width:720px; margin:0 auto 2.5rem;">
                        <span class="rb-section__eyebrow" style="justify-content:center;"><i data-lucide="clock"></i> Official Schedule</span>
                        <h2 class="rb-section__h2">${park.shortName} Safari <em>Timing Schedule 2026</em></h2>
                        <p class="rb-section__lead" style="margin:0 auto;">Safari shift timings are strictly calibrated according to sunrise and sunset across winter and summer seasons by the Forest Department.</p>
                    </div>

                    <div class="rb-table-wrap">
                        <table class="rb-table">
                            <thead>
                                <tr>
                                    <th>Safari Shift</th>
                                    <th>Winter Timings (Oct – Feb)</th>
                                    <th>Summer Timings (Mar – Jun)</th>
                                    <th>Gate Verification Call-in</th>
                                    <th>Entry Gate Cut-off</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong><i data-lucide="sun" style="color:var(--rb-gold); vertical-align:middle;"></i> Morning Safari Shift</strong></td>
                                    <td>06:30 AM – 10:00 AM</td>
                                    <td>06:00 AM – 09:30 AM</td>
                                    <td>15 Mins Prior at Gate</td>
                                    <td>Strictly at Gate Opening</td>
                                </tr>
                                <tr>
                                    <td><strong><i data-lucide="sunset" style="color:#d9534f; vertical-align:middle;"></i> Evening Safari Shift</strong></td>
                                    <td>01:30 PM – 05:00 PM</td>
                                    <td>02:30 PM – 06:00 PM</td>
                                    <td>15 Mins Prior at Gate</td>
                                    <td>Gate Exit at Sunset</td>
                                </tr>
                                ${park.id === 'tadoba' ? `
                                <tr>
                                    <td><strong><i data-lucide="moon" style="color:#2d6a4f; vertical-align:middle;"></i> Buffer Night Safari</strong></td>
                                    <td>06:30 PM – 09:30 PM</td>
                                    <td>07:00 PM – 10:00 PM</td>
                                    <td>Special Buffer Barrier</td>
                                    <td>Spotlight Escort Required</td>
                                </tr>` : ''}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <!-- 7. SAFARI ZONES DIRECTORY -->
            <section class="rb-section" id="zonesSection">
                <div class="container-custom">
                    <div style="text-align:center; max-width:720px; margin:0 auto 2.5rem;">
                        <span class="rb-section__eyebrow" style="justify-content:center;"><i data-lucide="layers"></i> Core &amp; Buffer Zones</span>
                        <h2 class="rb-section__h2">${park.shortName} <em>Safari Zones</em></h2>
                        <p class="rb-section__lead" style="margin:0 auto;">Browse all official zones including core habitats and peripheral eco-tourism corridors with vehicle quotas and landscape profiles.</p>
                    </div>

                    <div class="rb-zones-grid">
                        ${park.zones.map(z => `
                            <div class="rb-zone-card">
                                <div class="rb-zone-card__head">
                                    <h4 class="rb-zone-card__title">${z.name}</h4>
                                    <span class="rb-zone-badge ${z.type === 'Core' ? 'rb-zone-badge--core' : 'rb-zone-badge--buffer'}">${z.type}</span>
                                </div>
                                <p class="rb-zone-card__desc">${z.desc}</p>
                                <div class="rb-zone-card__meta">
                                    <span class="rb-zone-card__meta-item"><i data-lucide="truck"></i> Quota: ${z.gypsiesPerShift ? `${z.gypsiesPerShift} Gypsies/Shift` : `${z.cantersPerShift || 4} Canters/Shift`}</span>
                                    <span class="rb-zone-card__meta-item"><i data-lucide="shield-check"></i> Govt Permit</span>
                                </div>
                                <a href="safari-booking.html?park=${park.id}&zone=${z.id}" class="btn-safari-primary" style="margin-top:1rem; padding:0.55rem; font-size:0.82rem; text-align:center;">
                                    Book ${z.name.split('(')[0].trim()}
                                </a>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- 8. SEASON GUIDE -->
            <section class="rb-section rb-section--alt" id="seasonsSection">
                <div class="container-custom">
                    <div style="text-align:center; max-width:720px; margin:0 auto 2.5rem;">
                        <span class="rb-section__eyebrow" style="justify-content:center;"><i data-lucide="cloud-sun"></i> Best Time to Visit</span>
                        <h2 class="rb-section__h2">${park.shortName} <em>Season Guide</em></h2>
                        <p class="rb-section__lead" style="margin:0 auto;">Plan your safari around animal behavior, temperature ranges, and vegetation density for the best photographic captures.</p>
                    </div>

                    <div class="rb-seasons-grid">
                        <div class="rb-season-card">
                            <span class="rb-season-card__badge"><i data-lucide="sparkles"></i> ${(park.seasonGuide && park.seasonGuide.winter) ? park.seasonGuide.winter.badge : 'Crisp & Clear'}</span>
                            <h3 class="rb-season-card__title">Winter Season</h3>
                            <div class="rb-season-card__temp"><i data-lucide="thermometer"></i> ${(park.seasonGuide && park.seasonGuide.winter) ? `${park.seasonGuide.winter.months} · ${park.seasonGuide.winter.temp}` : 'October to February · 5°C – 22°C'}</div>
                            <p class="rb-season-card__desc">${(park.seasonGuide && park.seasonGuide.winter) ? park.seasonGuide.winter.desc : 'Pleasant afternoons and misty mornings. Superb for Asian elephant herds, winter bird migrations, and crisp landscape photography.'}</p>
                        </div>

                        <div class="rb-season-card">
                            <span class="rb-season-card__badge"><i data-lucide="flame"></i> ${(park.seasonGuide && park.seasonGuide.summer) ? park.seasonGuide.summer.badge : 'Peak Tiger Sightings'}</span>
                            <h3 class="rb-season-card__title">Summer Season</h3>
                            <div class="rb-season-card__temp"><i data-lucide="thermometer"></i> ${(park.seasonGuide && park.seasonGuide.summer) ? `${park.seasonGuide.summer.months} · ${park.seasonGuide.summer.temp}` : 'March to June · 26°C – 44°C'}</div>
                            <p class="rb-season-card__desc">${(park.seasonGuide && park.seasonGuide.summer) ? park.seasonGuide.summer.desc : 'Dry conditions force big cats and prey to concentrate near remaining waterholes. Statistically provides the highest tiger sighting probability.'}</p>
                        </div>

                        <div class="rb-season-card">
                            <span class="rb-season-card__badge"><i data-lucide="droplets"></i> ${(park.seasonGuide && park.seasonGuide.monsoon) ? park.seasonGuide.monsoon.badge : 'Buffer Eco-Tours'}</span>
                            <h3 class="rb-season-card__title">Monsoon Season</h3>
                            <div class="rb-season-card__temp"><i data-lucide="thermometer"></i> ${(park.seasonGuide && park.seasonGuide.monsoon) ? `${park.seasonGuide.monsoon.months} · ${park.seasonGuide.monsoon.temp}` : 'July to September · 22°C – 32°C'}</div>
                            <p class="rb-season-card__desc">${(park.seasonGuide && park.seasonGuide.monsoon) ? park.seasonGuide.monsoon.desc : 'Core zones close for wildlife breeding rejuvenation. Select buffer zones remain open for lush green eco-tourism drives.'}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 9. HOW TO REACH -->
            <section class="rb-section" id="reachSection">
                <div class="container-custom">
                    <div style="text-align:center; max-width:720px; margin:0 auto 2.5rem;">
                        <span class="rb-section__eyebrow" style="justify-content:center;"><i data-lucide="map"></i> Logistics &amp; Travel</span>
                        <h2 class="rb-section__h2">Getting to <em>${park.shortName}</em></h2>
                        <p class="rb-section__lead" style="margin:0 auto;">Well connected by direct air, train, and highway networks from all major Indian metropolitan hubs.</p>
                    </div>

                    <div class="rb-reach-grid">
                        <div class="rb-reach-card">
                            <div class="rb-reach-card__ic"><i data-lucide="plane"></i></div>
                            <div>
                                <h4 class="rb-reach-card__title">By Air</h4>
                                <p class="rb-reach-card__desc">${park.howToReach ? park.howToReach.air : facts.nearestAirport}</p>
                            </div>
                        </div>

                        <div class="rb-reach-card">
                            <div class="rb-reach-card__ic"><i data-lucide="train"></i></div>
                            <div>
                                <h4 class="rb-reach-card__title">By Train</h4>
                                <p class="rb-reach-card__desc">${park.howToReach ? park.howToReach.rail : facts.nearestRailway}</p>
                            </div>
                        </div>

                        <div class="rb-reach-card">
                            <div class="rb-reach-card__ic"><i data-lucide="navigation"></i></div>
                            <div>
                                <h4 class="rb-reach-card__title">By Road</h4>
                                <p class="rb-reach-card__desc">${park.howToReach ? park.howToReach.road : 'Smooth 4-lane national highway access with scenic forested approach roads.'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 10. WHAT WE HELP YOU PLAN (rb-exp) -->
            <section class="rb-section rb-section--alt" id="planningSection">
                <div class="container-custom">
                    <div style="text-align:center; max-width:720px; margin:0 auto 2.5rem;">
                        <span class="rb-section__eyebrow" style="justify-content:center;"><i data-lucide="briefcase"></i> Full-Service Facilitation</span>
                        <h2 class="rb-section__h2">What We Help You <em>Plan</em></h2>
                        <p class="rb-section__lead" style="margin:0 auto;">From official Forest Department permit quotas to luxury jungle resort bookings, our safari desk manages every detail seamlessly.</p>
                    </div>

                    <div class="rb-exp-grid">
                        <div class="rb-exp-card">
                            <div class="rb-exp-card__ic"><i data-lucide="file-check"></i></div>
                            <h4 class="rb-exp-card__title">Official Forest Permits</h4>
                            <p class="rb-exp-card__desc">Direct permit booking through the authorized Forest Department quota system.</p>
                        </div>
                        <div class="rb-exp-card">
                            <div class="rb-exp-card__ic"><i data-lucide="truck"></i></div>
                            <h4 class="rb-exp-card__title">Dedicated 4x4 Gypsy</h4>
                            <p class="rb-exp-card__desc">Private vehicle allocation with experienced drivers familiar with animal territorial habits.</p>
                        </div>
                        <div class="rb-exp-card">
                            <div class="rb-exp-card__ic"><i data-lucide="binoculars"></i></div>
                            <h4 class="rb-exp-card__title">Certified Naturalist</h4>
                            <p class="rb-exp-card__desc">Local forest guides trained in animal alarm calls, pugmark reading, and bird identification.</p>
                        </div>
                        <div class="rb-exp-card">
                            <div class="rb-exp-card__ic"><i data-lucide="home"></i></div>
                            <h4 class="rb-exp-card__title">Wildlife Eco-Resorts</h4>
                            <p class="rb-exp-card__desc">Handpicked safari lodges near the gates with full meals, swimming pools, and naturalists.</p>
                        </div>
                        <div class="rb-exp-card">
                            <div class="rb-exp-card__ic"><i data-lucide="car"></i></div>
                            <h4 class="rb-exp-card__title">Station Transfers</h4>
                            <p class="rb-exp-card__desc">Seamless pickup and drop from the nearest airport or railway station directly to your resort.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 11. GATES & LOCATION GUIDE (pkloc) -->
            <section class="rb-section" id="locationSection">
                <div class="container-custom">
                    <div class="pkloc">
                        <span class="rb-section__eyebrow"><i data-lucide="map-pin"></i> Gate Access Directory</span>
                        <h2 class="rb-section__h2">Where is <em>${park.name}?</em></h2>
                        <p style="color:var(--rb-muted); font-size:0.95rem;">Gate distances from the main transit hub and zone entry checkposts.</p>

                        <div class="pkloc__grid">
                            <div class="pkloc__gatelist">
                                ${(park.gates || getDefaultGates(park)).map(g => `
                                    <div class="pkloc__gate">
                                        <div class="pkloc__gate-info">
                                            <i data-lucide="signpost" style="color:var(--rb-gold);"></i>
                                            <div>
                                                <div class="pkloc__gate-name">${g.name}</div>
                                                <div class="pkloc__gate-dist">${g.distance} · Entry: ${g.entry}</div>
                                            </div>
                                        </div>
                                        <span class="rb-zone-badge ${g.type === 'Core' ? 'rb-zone-badge--core' : 'rb-zone-badge--buffer'}">${g.type}</span>
                                    </div>
                                `).join('')}
                            </div>
                            <div style="background:var(--rb-cream); border:1px solid var(--rb-border); border-radius:14px; padding:1.5rem; display:flex; flex-direction:column; justify-content:center;">
                                <h4 style="font-family:var(--rb-font); font-weight:700; color:var(--rb-dark); margin-bottom:0.5rem;"><i data-lucide="navigation" style="color:var(--rb-red);"></i> Gate Navigation Assistance</h4>
                                <p style="font-size:0.85rem; color:var(--rb-muted); line-height:1.6; margin-bottom:1.2rem;">Your confirmed entry gate is specified on your Forest Department permit voucher. Our drivers pick you up directly from your resort 45 minutes prior to gate opening.</p>
                                <a href="https://maps.google.com/?q=${encodeURIComponent(park.name + ' ' + park.location)}" target="_blank" rel="noopener" class="btn-safari-primary" style="align-self:flex-start; font-size:0.85rem;">
                                    <i data-lucide="external-link"></i> Open in Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 12. PHOTO GALLERY (pg) -->
            <section class="rb-section rb-section--alt" id="gallerySection">
                <div class="container-custom">
                    <div style="text-align:center; max-width:720px; margin:0 auto 2.5rem;">
                        <span class="rb-section__eyebrow" style="justify-content:center;"><i data-lucide="camera"></i> Visual Highlights</span>
                        <h2 class="rb-section__h2">A Closer Look at <em>${park.shortName}</em></h2>
                        <p class="rb-section__lead" style="margin:0 auto;">Photographs captured during recent Wild Path wildlife expeditions inside the reserve.</p>
                    </div>

                    <div class="pg__grid">
                        ${(park.gallery || getDefaultGallery(park)).map(img => `
                            <div class="pg__item">
                                <img src="${img.url}" alt="${img.caption}" class="pg__img" loading="lazy">
                                <div class="pg__caption">${img.caption}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- 13. RULES & GUIDELINES -->
            <section class="rb-section" id="rulesSection">
                <div class="container-custom">
                    <div style="text-align:center; max-width:720px; margin:0 auto 2.5rem;">
                        <span class="rb-section__eyebrow" style="justify-content:center;"><i data-lucide="alert-triangle"></i> Forest Guidelines</span>
                        <h2 class="rb-section__h2">${park.shortName} Safari <em>Rules &amp; Ethics</em></h2>
                        <p class="rb-section__lead" style="margin:0 auto;">Observe strict statutory forest protocol to preserve wildlife habitats and ensure guest safety.</p>
                    </div>

                    <div class="rb-rules-grid">
                        ${park.rules.map(rule => `
                            <div class="rb-rule-item">
                                <i data-lucide="check-circle"></i>
                                <span>${rule}</span>
                            </div>
                        `).join('')}
                        <div class="rb-rule-item">
                            <i data-lucide="check-circle"></i>
                            <span>Maintain low conversation volume and silence cell phones inside protected zones.</span>
                        </div>
                        <div class="rb-rule-item">
                            <i data-lucide="check-circle"></i>
                            <span>Wearing earthy shades (khaki, olive green, brown) is strongly advised; avoid bright red and yellow.</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 14. CUSTOMER GOOGLE REVIEWS (rb-greviews) -->
            <section class="rb-section rb-section--alt" id="reviewsSection">
                <div class="container-custom">
                    <div style="text-align:center; max-width:720px; margin:0 auto 2.5rem;">
                        <span class="rb-section__eyebrow" style="justify-content:center;"><i data-lucide="star"></i> Guest Testimonials</span>
                        <h2 class="rb-section__h2">Customer <em>Google Reviews</em></h2>
                        <p class="rb-section__lead" style="margin:0 auto;">Verified feedback from wildlife photographers, families, and solo safari travelers.</p>
                    </div>

                    <div class="rb-greviews__head">
                        <i class="bi bi-google" style="font-size:1.6rem; color:#4285f4;"></i>
                        <div>
                            <span class="rb-greviews__score">${park.rating} / 5.0</span>
                            <span class="rb-greviews__stars">★★★★★</span>
                        </div>
                        <div class="rb-greviews__sub">Based on ${park.reviewsCount.toLocaleString()}+ verified guest reviews on Google</div>
                    </div>

                    <div class="rb-reviews-grid">
                        ${(park.reviews || getDefaultReviews(park)).map(rev => `
                            <div class="rb-review-card">
                                <div class="rb-review-card__top">
                                    <div class="rb-review-card__avatar">${rev.author.charAt(0)}</div>
                                    <div>
                                        <div class="rb-review-card__name">${rev.author}</div>
                                        <div class="rb-review-card__loc">${rev.location} · ${rev.time}</div>
                                    </div>
                                </div>
                                <div class="rb-review-card__stars">★★★★★</div>
                                <p class="rb-review-card__text">"${rev.text}"</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- 15. FAQS ACCORDION (rb-faq-acc) -->
            <section class="rb-section" id="faqSection">
                <div class="container-custom">
                    <div style="text-align:center; max-width:720px; margin:0 auto 2.5rem;">
                        <span class="rb-section__eyebrow" style="justify-content:center;"><i data-lucide="help-circle"></i> Frequently Asked Questions</span>
                        <h2 class="rb-section__h2">FAQs for ${park.shortName} <em>Safari Booking</em></h2>
                        <p class="rb-section__lead" style="margin:0 auto;">Essential answers to common questions about permits, zones, pricing, and required documents.</p>
                    </div>

                    <div class="rb-faq-acc">
                        ${(park.faqs || getDefaultFaqs(park)).map((faq, idx) => `
                            <div class="rb-faq-item ${idx === 0 ? 'open' : ''}">
                                <button type="button" class="rb-faq-question">
                                    <div class="rb-faq-question-wrap">
                                        <span class="rb-faq-num">${idx + 1}</span>
                                        <span>${faq.q}</span>
                                    </div>
                                    <i data-lucide="chevron-down"></i>
                                </button>
                                <div class="rb-faq-answer">
                                    <p>${faq.a}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- 16. DARK FOREST BOTTOM CTA BANNER (rb-section--dark) -->
            <section class="rb-section--dark">
                <div class="container-custom" style="text-align:center;">
                    <span class="rb-section__eyebrow" style="justify-content:center; color:var(--rb-gold);"><i data-lucide="sparkles"></i> Limited Daily Quotas</span>
                    <h2 class="rb-section__h2" style="font-size:2.5rem; margin-bottom:1rem;">Ready to Hear the Roar? <em>Book Now.</em></h2>
                    <p style="font-family:'Caveat',cursive; font-size:1.6rem; color:var(--rb-gold-light); margin-bottom:2rem;">
                        Core safari permits sell out weeks in advance. Lock in your preferred Gypsy date today.
                    </p>
                    <div style="display:flex; justify-content:center; flex-wrap:wrap; gap:1.2rem;">
                        <a href="safari-booking.html?park=${park.id}" class="rb-hero__btn rb-hero__btn--primary">
                            <i data-lucide="calendar-check"></i> Book ${park.shortName} Safari
                        </a>
                        <a href="https://wa.me/919911177045?text=Hello%20Wild%20Path%20Safari%2C%20I%20want%20to%20reserve%20a%20safari%20for%20${encodeURIComponent(park.name)}" target="_blank" rel="noopener" class="rb-hero__btn rb-hero__btn--wa">
                            <i class="bi bi-whatsapp"></i> WhatsApp Safari Desk
                        </a>
                        <a href="tel:+919911177045" class="rb-hero__btn rb-hero__btn--outline">
                            <i data-lucide="phone"></i> Call +91 99111 77045
                        </a>
                    </div>
                </div>
            </section>
        `;

        // Initialize Lucide icons
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }

        // Attach FAQ toggle events
        container.querySelectorAll('.rb-faq-question').forEach(btn => {
            btn.addEventListener('click', function () {
                const item = this.closest('.rb-faq-item');
                if (item) {
                    item.classList.toggle('open');
                }
            });
        });

        // Initialize Live Calculator
        initLiveCalculator(park);
    }

    // ── LIVE FARE ESTIMATOR LOGIC ──
    function initLiveCalculator(park) {
        const vehicleSelect = document.getElementById('calcVehicle');
        const guestsSelect = document.getElementById('calcGuests');
        const natSelect = document.getElementById('calcNationality');
        const totalDisplay = document.getElementById('calcTotalDisplay');
        const breakdownDisplay = document.getElementById('calcBreakdownDisplay');
        const proceedBtn = document.getElementById('calcProceedBtn');

        if (!vehicleSelect || !guestsSelect || !natSelect || !totalDisplay) return;

        function updatePrice() {
            const vehicle = vehicleSelect.value;
            const guests = parseInt(guestsSelect.value, 10) || 1;
            const nat = natSelect.value;
            let total = 0;
            let note = '';

            if (nat === 'foreigner') {
                total = park.pricing.foreignerGypsy;
                note = `Foreign National Forest Permit + Dedicated 4x4 Gypsy + Guide (Up to 6 guests)`;
            } else if (vehicle === 'gypsy-core') {
                total = park.pricing.gypsyCore;
                note = `Official Core Permit + Exclusive 4x4 Gypsy + Driver & Guide (Up to 6 guests)`;
            } else if (vehicle === 'gypsy-buffer') {
                total = park.pricing.gypsyBuffer;
                note = `Official Buffer Permit + Exclusive 4x4 Gypsy + Driver & Guide (Up to 6 guests)`;
            } else if (vehicle === 'canter') {
                total = park.pricing.canterSeat * guests;
                note = `₹${park.pricing.canterSeat.toLocaleString()} per seat × ${guests} traveler(s) in Canter Bus`;
            }

            totalDisplay.textContent = `₹${total.toLocaleString()}`;
            breakdownDisplay.textContent = note;

            if (proceedBtn) {
                const dateVal = document.getElementById('calcDate')?.value || '';
                const shiftVal = document.getElementById('calcShift')?.value || 'morning';
                proceedBtn.href = `safari-booking.html?park=${park.id}&mode=${vehicle}&guests=${guests}&nationality=${nat}&date=${dateVal}&shift=${shiftVal}`;
            }
        }

        vehicleSelect.addEventListener('change', updatePrice);
        guestsSelect.addEventListener('change', updatePrice);
        natSelect.addEventListener('change', updatePrice);
        document.getElementById('calcDate')?.addEventListener('change', updatePrice);
        document.getElementById('calcShift')?.addEventListener('change', updatePrice);

        updatePrice();
    }

    // ── "ALL 8 PARKS" OVERVIEW MODAL ──
    function openParksOverviewModal() {
        let modal = document.getElementById('parksOverviewModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.className = 'parks-overview-modal';
            modal.id = 'parksOverviewModal';
            modal.innerHTML = `
                <div class="parks-overview-box">
                    <button type="button" class="parks-overview-close" id="closeOverviewBtn">&times;</button>
                    <div style="text-align:center; max-width:600px; margin:0 auto 1.5rem;">
                        <span style="font-size:0.75rem; font-weight:800; text-transform:uppercase; color:var(--rb-red); letter-spacing:0.1em;">All Premier Sanctuaries</span>
                        <h3 style="font-family:'Playfair Display',serif; font-size:1.8rem; font-weight:700; color:var(--rb-dark); margin:0.3rem 0;">Explore India's Wild Kingdoms</h3>
                        <p style="font-size:0.85rem; color:var(--rb-muted);">Select any national park to view its detailed zones, safari timings, pricing, and live booking options.</p>
                    </div>
                    <div class="parks-overview-grid" id="modalParksGrid"></div>
                </div>
            `;
            document.body.appendChild(modal);

            document.getElementById('closeOverviewBtn').addEventListener('click', () => {
                modal.classList.remove('active');
            });
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.classList.remove('active');
            });
        }

        const grid = document.getElementById('modalParksGrid');
        grid.innerHTML = PARKS_DATA.map(p => `
            <div class="parks-overview-card" data-park-id="${p.id}">
                <img src="${p.thumbImage}" alt="${p.name}" class="parks-overview-card__img" loading="lazy">
                <div class="parks-overview-card__body">
                    <h4 class="parks-overview-card__title">${p.shortName}</h4>
                    <div class="parks-overview-card__state">${p.state} · ${p.badge}</div>
                    <div class="parks-overview-card__price">Gypsy From ₹${p.pricing.gypsyBuffer.toLocaleString()}</div>
                </div>
            </div>
        `).join('');

        grid.querySelectorAll('.parks-overview-card').forEach(card => {
            card.addEventListener('click', function () {
                const pid = this.getAttribute('data-park-id');
                modal.classList.remove('active');
                switchPark(pid);
            });
        });

        modal.classList.add('active');
    }

    // ── FALLBACK HELPERS ──
    function getTomorrowDate() {
        const d = new Date();
        d.setDate(d.getDate() + 1);
        return d.toISOString().split('T')[0];
    }

    function getDefaultDayOnSafari(park) {
        return [
            { time: "05:30 AM", title: "Dawn Gate Gathering", desc: "Crisp morning air and hot ginger tea as naturalists inspect vehicle permits at the forest checkpost." },
            { time: "06:15 AM", title: "Entering Deep Core Forest", desc: "Listening intently to langur and chital alarm calls while scanning riverbeds for fresh pugmarks." },
            { time: "11:00 AM", title: "Midday Rest & Wildlife Log Review", desc: "Return to your jungle lodge for lunch and lens calibration with certified forest naturalists." },
            { time: "02:45 PM", title: "Afternoon Golden-Hour Vigil", desc: "Second game drive focused on waterholes and riverbanks as predators wake for evening prowls." },
            { time: "06:30 PM", title: "Campfire Debrief & Forest Stories", desc: "Debrief over crackling logs under starlit skies with fellow wildlife photographers." }
        ];
    }

    function getDefaultGates(park) {
        return [
            { name: "Main Core Gate", type: "Core", entry: "Forest Headquarters", distance: "5 km from Town" },
            { name: "Secondary Core Gate", type: "Core", entry: "North Checkpost", distance: "12 km from Town" },
            { name: "Eco-Buffer Gate", type: "Buffer", entry: "East Barrier", distance: "8 km from Town" }
        ];
    }

    function getDefaultGallery(park) {
        return [
            { url: park.heroImage, caption: "Majestic predator in native habitat" },
            { url: park.thumbImage, caption: "Open Gypsy game drive" },
            { url: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80", caption: "Spotted deer along forest tracks" },
            { url: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80", caption: "Waterhole vigil at golden hour" }
        ];
    }

    function getDefaultReviews(park) {
        return [
            { author: "Rahul Sharma", location: "New Delhi", rating: 5, time: "Last week", text: `Unbelievable safari experience at ${park.shortName}! Saw a majestic tiger within 45 minutes of entering the gate. Driver was extremely disciplined.` },
            { author: "Pooja Hegde", location: "Mumbai", rating: 5, time: "2 weeks ago", text: `The booking was 100% transparent. No hidden charges at the checkpost. Our guide knew all bird calls.` }
        ];
    }

    function getDefaultFaqs(park) {
        return [
            { q: `How can I book ${park.shortName} safari online?`, a: `You can reserve permits online through our platform up to ${park.bookingAdvanceDays || 90} days in advance. Carry original photo ID for physical verification at the gate.` },
            { q: `What is the difference between Core and Buffer zones?`, a: `Core zones encompass protected critical habitats with high predator density and strict vehicle quotas. Buffer zones are peripheral forests offering scenic eco-tourism and night drives.` }
        ];
    }

    // ── INITIALIZE ON DOM LOAD ──
    document.addEventListener('DOMContentLoaded', function () {
        renderParkSelector();
        renderParkContent();

        window.addEventListener('popstate', function (e) {
            const pid = getInitialParkId();
            if (pid !== currentParkId) {
                currentParkId = pid;
                document.querySelectorAll('.park-tab-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.getAttribute('data-park-id') === pid);
                });
                renderParkContent();
            }
        });
    });

})();
