// ==========================================================================
// JUNGLE SAFARI LIVE BOOKING & PRICE CALCULATOR ENGINE
// Signature JeepSafariBookers transparent pricing logic & multi-step flow
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    initBookingEngine();
});

let currentBookingState = {
    parkId: "jim-corbett",
    zoneId: "bijrani",
    safariMode: "gypsy",
    shift: "morning",
    safariDate: "",
    nationality: "indian",
    guestsCount: 2,
    passengers: [],
    addons: {
        camera: false,
        resortTransfer: false,
        seniorNaturalist: false
    },
    pricing: {
        permit: 0,
        vehicle: 0,
        guide: 0,
        addonsTotal: 0,
        tax: 0,
        total: 0
    }
};

function initBookingEngine() {
    const bookingForm = document.getElementById('fullBookingWizard');
    if (!bookingForm) return;

    // 1. Populate National Parks select dropdown
    populateParksDropdown();

    // 2. Read URL params (if user arrived from Hero bar, Park page, or Enquiry modal)
    const urlParams = new URLSearchParams(window.location.search);
    const paramPark = urlParams.get('park') || urlParams.get('national_park_id');
    if (paramPark) {
        currentBookingState.parkId = paramPark;
    }
    const paramMode = urlParams.get('mode') || urlParams.get('safari_mode');
    if (paramMode) {
        currentBookingState.safariMode = paramMode.toLowerCase();
    }
    const paramShift = urlParams.get('shift') || urlParams.get('timeslot');
    if (paramShift) {
        currentBookingState.shift = paramShift.toLowerCase();
    }
    if (urlParams.get('guests')) {
        currentBookingState.guestsCount = parseInt(urlParams.get('guests')) || 2;
    }
    const paramDate = urlParams.get('date') || urlParams.get('safari_date');
    if (paramDate) {
        currentBookingState.safariDate = paramDate;
    } else {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        currentBookingState.safariDate = tomorrow.toISOString().split('T')[0];
    }

    // Set form controls to match initial state
    syncFormInputsWithState();

    // Render zones for initial park
    renderParkZones(currentBookingState.parkId);

    // Render passenger input rows
    renderPassengerInputs(currentBookingState.guestsCount);

    // Calculate initial price
    calculateSafariPrice();

    // Setup Event Listeners
    setupEventListeners();
}

function populateParksDropdown() {
    const parkSelect = document.getElementById('bookParkSelect');
    if (!parkSelect || typeof PARKS_DATA === 'undefined') return;

    parkSelect.innerHTML = PARKS_DATA.map(park => `
        <option value="${park.id}" ${park.id === currentBookingState.parkId ? 'selected' : ''}>
            ${park.name} (${park.state})
        </option>
    `).join('');
}

function syncFormInputsWithState() {
    const parkSelect = document.getElementById('bookParkSelect');
    const dateInput = document.getElementById('bookDateInput');
    const guestsSelect = document.getElementById('bookGuestsSelect');
    const nationalitySelect = document.getElementById('bookNationalitySelect');
    const modeSelect = document.getElementById('bookModeSelect');
    const shiftRadios = document.querySelectorAll('input[name="bookShift"]');

    if (parkSelect) parkSelect.value = currentBookingState.parkId;
    if (dateInput) {
        dateInput.value = currentBookingState.safariDate;
        dateInput.min = new Date().toISOString().split('T')[0];
    }
    if (guestsSelect) guestsSelect.value = currentBookingState.guestsCount;
    if (nationalitySelect) nationalitySelect.value = currentBookingState.nationality;
    if (modeSelect) modeSelect.value = currentBookingState.safariMode;

    shiftRadios.forEach(radio => {
        if (radio.value === currentBookingState.shift) radio.checked = true;
    });
}

function renderParkZones(parkId) {
    const container = document.getElementById('zonesPickerGrid');
    if (!container || typeof PARKS_DATA === 'undefined') return;

    const park = PARKS_DATA.find(p => p.id === parkId);
    if (!park || !park.zones) return;

    // Pick first zone as default if currentZoneId doesn't belong to this park
    const zoneExists = park.zones.some(z => z.id === currentBookingState.zoneId);
    if (!zoneExists) {
        currentBookingState.zoneId = park.zones[0].id;
    }

    container.innerHTML = park.zones.map(zone => {
        const isSelected = zone.id === currentBookingState.zoneId;
        const badgeClass = zone.type === 'Core' ? 'badge-core' : 'badge-buffer';
        return `
            <div class="zone-radio-card ${isSelected ? 'selected' : ''}" data-zone-id="${zone.id}">
                <div class="zone-card-top">
                    <span class="zone-name-title">${zone.name}</span>
                    <span class="zone-type-badge ${badgeClass}">${zone.type} Zone</span>
                </div>
                <p style="font-size:0.8rem; color:var(--text-muted); line-height:1.45; margin-bottom:0.5rem;">
                    ${zone.desc}
                </p>
                <div style="font-size:0.75rem; color:var(--forest-mid); font-weight:700;">
                    <i data-lucide="shield-check"></i> Regulated Govt Quota: ${zone.gypsiesPerShift || 20} vehicles/shift
                </div>
            </div>
        `;
    }).join('');

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }

    // Attach click events on zone cards
    container.querySelectorAll('.zone-radio-card').forEach(card => {
        card.addEventListener('click', () => {
            container.querySelectorAll('.zone-radio-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            currentBookingState.zoneId = card.getAttribute('data-zone-id');
            const zoneName = card.querySelector('.zone-name-title').textContent;
            showToast(`Selected Zone: ${zoneName}`, 'info');
            calculateSafariPrice();
        });
    });
}

function renderPassengerInputs(count) {
    const container = document.getElementById('passengersContainer');
    if (!container) return;

    let html = '';
    for (let i = 1; i <= count; i++) {
        const isLead = i === 1;
        html += `
            <div class="passenger-card-box" style="background:#fff; border:1px solid var(--border-color); border-radius:12px; padding:1.2rem; margin-bottom:1rem;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
                    <h5 style="font-size:0.95rem; font-weight:700; color:var(--forest-deep);">
                        <i data-lucide="user" style="color:var(--safari-gold);"></i> 
                        Passenger #${i} ${isLead ? '<span style="color:var(--safari-terracotta); font-size:0.75rem;">(Lead Traveler)</span>' : ''}
                    </h5>
                </div>
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:0.75rem;">
                    <div>
                        <label style="display:block; font-size:0.75rem; font-weight:700; color:var(--text-muted); margin-bottom:0.25rem;">Full Name (As on Govt ID) *</label>
                        <input type="text" class="modal-control passenger-name" placeholder="Full Name" required value="${isLead ? 'Shri Traveler' : ''}">
                    </div>
                    <div>
                        <label style="display:block; font-size:0.75rem; font-weight:700; color:var(--text-muted); margin-bottom:0.25rem;">Age *</label>
                        <input type="number" class="modal-control passenger-age" placeholder="Age" min="1" max="99" required value="${isLead ? '32' : '29'}">
                    </div>
                    <div>
                        <label style="display:block; font-size:0.75rem; font-weight:700; color:var(--text-muted); margin-bottom:0.25rem;">Gender *</label>
                        <select class="modal-control passenger-gender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label style="display:block; font-size:0.75rem; font-weight:700; color:var(--text-muted); margin-bottom:0.25rem;">Photo ID Type *</label>
                        <select class="modal-control passenger-id-type">
                            <option value="Aadhaar">Aadhaar Card</option>
                            <option value="Passport">Passport</option>
                            <option value="Voter ID">Voter ID</option>
                            <option value="Driving License">Driving License</option>
                        </select>
                    </div>
                    <div>
                        <label style="display:block; font-size:0.75rem; font-weight:700; color:var(--text-muted); margin-bottom:0.25rem;">ID Number *</label>
                        <input type="text" class="modal-control passenger-id-num" placeholder="e.g. 5421-XXXX-XXXX" required value="XXXX-XXXX-8921">
                    </div>
                </div>
            </div>
        `;
    }

    container.innerHTML = html;
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

function calculateSafariPrice() {
    if (typeof PARKS_DATA === 'undefined') return;

    const park = PARKS_DATA.find(p => p.id === currentBookingState.parkId);
    if (!park) return;

    const currentZone = park.zones.find(z => z.id === currentBookingState.zoneId);
    const isCore = currentZone ? currentZone.type === 'Core' : true;
    const isForeigner = currentBookingState.nationality === 'foreign';
    const isCanter = currentBookingState.safariMode === 'canter';

    let baseRate = 0;
    if (isForeigner) {
        baseRate = park.pricing.foreignerGypsy;
    } else if (isCanter) {
        baseRate = (park.pricing.canterSeat || 2000) * currentBookingState.guestsCount;
    } else {
        baseRate = isCore ? park.pricing.gypsyCore : park.pricing.gypsyBuffer;
    }

    const permitFee = Math.round(baseRate * 0.45);
    const vehicleFee = Math.round(baseRate * 0.40);
    const guideFee = park.pricing.guideFee || 1000;

    // Addons
    let addonsTotal = 0;
    if (currentBookingState.addons.camera) addonsTotal += 500;
    if (currentBookingState.addons.resortTransfer) addonsTotal += 1200;
    if (currentBookingState.addons.seniorNaturalist) addonsTotal += 1500;

    const subtotal = permitFee + vehicleFee + guideFee + addonsTotal;
    const tax = Math.round(subtotal * 0.05); // 5% GST
    const total = subtotal + tax;

    currentBookingState.pricing = {
        permit: permitFee,
        vehicle: vehicleFee,
        guide: guideFee,
        addonsTotal,
        tax,
        total
    };

    updatePriceSummaryUI(park, currentZone);
}

function updatePriceSummaryUI(park, zone) {
    const elPermit = document.getElementById('calcPermitFee');
    const elVehicle = document.getElementById('calcVehicleFee');
    const elGuide = document.getElementById('calcGuideFee');
    const elAddons = document.getElementById('calcAddonsFee');
    const elTax = document.getElementById('calcTaxFee');
    const elTotal = document.getElementById('calcTotalPayable');
    const elSummaryMeta = document.getElementById('calcSummaryMeta');

    if (elPermit) elPermit.textContent = `₹${currentBookingState.pricing.permit.toLocaleString()}`;
    if (elVehicle) elVehicle.textContent = `₹${currentBookingState.pricing.vehicle.toLocaleString()}`;
    if (elGuide) elGuide.textContent = `₹${currentBookingState.pricing.guide.toLocaleString()}`;
    if (elAddons) elAddons.textContent = `₹${currentBookingState.pricing.addonsTotal.toLocaleString()}`;
    if (elTax) elTax.textContent = `₹${currentBookingState.pricing.tax.toLocaleString()}`;
    if (elTotal) elTotal.textContent = `₹${currentBookingState.pricing.total.toLocaleString()}`;

    if (elSummaryMeta) {
        const zoneName = zone ? zone.name : 'Standard Zone';
        const modeLabel = currentBookingState.safariMode === 'canter' ? 'Canter (Sharing)' : 'Exclusive 4x4 Gypsy';
        elSummaryMeta.innerHTML = `
            <div><strong>${park.name}</strong></div>
            <div style="font-size:0.8rem; color:var(--text-muted);">
                ${zoneName} · ${currentBookingState.shift.toUpperCase()} Shift · ${currentBookingState.guestsCount} Travelers (${currentBookingState.nationality.toUpperCase()})
            </div>
        `;
    }
}

function setupEventListeners() {
    // Park change
    document.getElementById('bookParkSelect')?.addEventListener('change', (e) => {
        currentBookingState.parkId = e.target.value;
        renderParkZones(currentBookingState.parkId);
        calculateSafariPrice();
    });

    // Safari Mode change
    document.getElementById('bookModeSelect')?.addEventListener('change', (e) => {
        currentBookingState.safariMode = e.target.value;
        calculateSafariPrice();
    });

    // Date change
    document.getElementById('bookDateInput')?.addEventListener('change', (e) => {
        currentBookingState.safariDate = e.target.value;
    });

    // Nationality change
    document.getElementById('bookNationalitySelect')?.addEventListener('change', (e) => {
        currentBookingState.nationality = e.target.value;
        calculateSafariPrice();
    });

    // Guests count change
    document.getElementById('bookGuestsSelect')?.addEventListener('change', (e) => {
        currentBookingState.guestsCount = parseInt(e.target.value) || 2;
        renderPassengerInputs(currentBookingState.guestsCount);
        calculateSafariPrice();
    });

    // Shift Radios
    document.querySelectorAll('input[name="bookShift"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentBookingState.shift = e.target.value;
            calculateSafariPrice();
        });
    });

    // Addons Checkboxes
    document.getElementById('addonCamera')?.addEventListener('change', (e) => {
        currentBookingState.addons.camera = e.target.checked;
        calculateSafariPrice();
    });
    document.getElementById('addonTransfer')?.addEventListener('change', (e) => {
        currentBookingState.addons.resortTransfer = e.target.checked;
        calculateSafariPrice();
    });
    document.getElementById('addonGuide')?.addEventListener('change', (e) => {
        currentBookingState.addons.seniorNaturalist = e.target.checked;
        calculateSafariPrice();
    });

    // Step Navigation
    document.querySelectorAll('.wizard-step-next').forEach(btn => {
        btn.addEventListener('click', () => {
            const nextStep = parseInt(btn.getAttribute('data-next'));
            switchWizardStep(nextStep);
        });
    });

    document.querySelectorAll('.wizard-step-prev').forEach(btn => {
        btn.addEventListener('click', () => {
            const prevStep = parseInt(btn.getAttribute('data-prev'));
            switchWizardStep(prevStep);
        });
    });

    // Tab buttons click
    document.querySelectorAll('.booking-step-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const stepNum = parseInt(tab.getAttribute('data-step'));
            switchWizardStep(stepNum);
        });
    });

    // Wizard Final Submit Button
    document.getElementById('btnConfirmPermitBooking')?.addEventListener('click', () => {
        generateBookingVoucher();
    });
}

function switchWizardStep(stepNumber) {
    document.querySelectorAll('.wizard-step-pane').forEach(pane => pane.classList.remove('active'));
    document.querySelectorAll('.booking-step-tab').forEach(tab => tab.classList.remove('active'));

    const targetPane = document.getElementById(`wizardStep${stepNumber}`);
    const targetTab = document.querySelector(`.booking-step-tab[data-step="${stepNumber}"]`);

    if (targetPane) targetPane.classList.add('active');
    if (targetTab) targetTab.classList.add('active');

    window.scrollTo({ top: document.querySelector('.booking-engine-wrap').offsetTop - 90, behavior: 'smooth' });
}

function generateBookingVoucher() {
    const voucherModal = document.getElementById('voucherConfirmationModal');
    if (!voucherModal) return;

    const park = PARKS_DATA.find(p => p.id === currentBookingState.parkId);
    const voucherToken = 'JS-' + Math.floor(100000 + Math.random() * 900000);

    document.getElementById('voucherBookingId').textContent = voucherToken;
    document.getElementById('voucherPark').textContent = park ? park.name : 'Corbett';
    document.getElementById('voucherZone').textContent = currentBookingState.zoneId.toUpperCase();
    document.getElementById('voucherDate').textContent = currentBookingState.safariDate;
    document.getElementById('voucherShift').textContent = currentBookingState.shift.toUpperCase();
    document.getElementById('voucherAmount').textContent = `₹${currentBookingState.pricing.total.toLocaleString()}`;

    // Open modal
    voucherModal.classList.add('is-open');

    showToast(`Safari Permit Request registered! Booking Ref: ${voucherToken}`, 'success');
}
