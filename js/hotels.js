/* ==========================================================================
   Hotels page logic — Wild Path Safari
   Sample hotel dataset + client-side filtering (price / rating / type),
   search bar, image gallery navigation, and Enquire/Book actions.
   Works like jeepsafaribookers.in/hotels (client-side, no backend).
   ========================================================================== */
(function () {
    'use strict';

    var WA = '919911177045';

    var IMG = {
        lodge: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
        room: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
        resort: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
        pool: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80',
        cottage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80',
        villa: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
        suite: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=600&q=80',
        exterior: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=600&q=80'
    };

    var HOTELS = [
        {
            name: 'Kanha Jungle Lodge', type: 'Resort', stars: 5, price: 14700, score: 10.0, scoreLabel: 'Excellent',
            address: 'M. P. Tourism, Mukki, Manjitola, Madhya Pradesh 481111',
            desc: 'Kanha Jungle Lodge is a luxurious resort in Kanha that is built on 11 acres of land and it offers...',
            coupleFriendly: true, park: 'kanha',
            images: [IMG.lodge, IMG.room, IMG.resort, IMG.pool, IMG.cottage]
        },
        {
            name: 'The Riverwood Forest Retreat', type: 'Resort', stars: 5, price: 14200, score: 10.0, scoreLabel: 'Excellent',
            address: 'Khasra No 13/1, 13/2, Panchayat: Parshtola, Block Parashwara, District: Balaghat, Village: Bhilewani, Baihar, Madhya Pradesh 481111',
            desc: 'The Riverwood Forest Retreat offers 18 cottages that are made with locally-sourced materials. The rooms of this resort have large...',
            coupleFriendly: true, park: 'kanha',
            images: [IMG.suite, IMG.pool, IMG.cottage, IMG.resort, IMG.villa]
        },
        {
            name: 'The Bagh Kanha', type: 'Resort', stars: 5, price: 8500, score: 10.0, scoreLabel: 'Very Good',
            address: 'VPO, Tehsil, Gudma, Birsa, Madhya Pradesh 481116',
            desc: 'The Bagh Resort in Kanha is a luxury resort that is designed to give guests a comfortable stay amid nature...',
            coupleFriendly: true, park: 'kanha',
            images: [IMG.pool, IMG.resort, IMG.room, IMG.cottage]
        },
        {
            name: 'Tiger Trails Jungle Lodge', type: 'Hotel', stars: 4, price: 6200, score: 9.2, scoreLabel: 'Very Good',
            address: 'Khatia Gate Road, Mocha, Kanha, Madhya Pradesh 481768',
            desc: 'A cosy mid-range jungle lodge within walking distance of Khatia gate, ideal for safari enthusiasts and families...',
            coupleFriendly: false, park: 'kanha',
            images: [IMG.cottage, IMG.room, IMG.exterior, IMG.pool]
        },
        {
            name: 'Celebration Van Vilas Resort', type: 'Villa', stars: 4, price: 5400, score: 8.8, scoreLabel: 'Very Good',
            address: 'Ranthambore Road, Sawai Madhopur, Rajasthan 322001',
            desc: 'Private garden villas with a pool and in-house restaurant, a short drive from Ranthambore safari gates...',
            coupleFriendly: true, park: 'ranthambore',
            images: [IMG.villa, IMG.pool, IMG.suite, IMG.resort]
        },
        {
            name: 'Corbett Riverside Guest House', type: 'Guest House', stars: 3, price: 3200, score: 8.1, scoreLabel: 'Good',
            address: 'Dhikuli, Ramnagar, Nainital, Uttarakhand 244715',
            desc: 'A friendly riverside guest house offering clean rooms, home-cooked meals and easy access to Corbett zones...',
            coupleFriendly: false, park: 'corbett',
            images: [IMG.exterior, IMG.room, IMG.cottage]
        },
        {
            name: 'Tadoba Tiger Apartment Stay', type: 'Apartment', stars: 3, price: 2800, score: 7.9, scoreLabel: 'Good',
            address: 'Mohurli Road, Chandrapur, Maharashtra 442401',
            desc: 'Self-contained serviced apartments with kitchenette, perfect for longer safari trips to Tadoba...',
            coupleFriendly: false, park: 'tadoba',
            images: [IMG.suite, IMG.room, IMG.exterior]
        },
        {
            name: 'Backpackers Jungle Hostel', type: 'Hostel', stars: 2, price: 1200, score: 7.4, scoreLabel: 'Pleasant',
            address: 'Khatia Village, Kanha, Madhya Pradesh 481768',
            desc: 'Budget dorm and private beds for solo travellers and groups, with a shared lounge and safari desk...',
            coupleFriendly: false, park: 'kanha',
            images: [IMG.room, IMG.exterior, IMG.cottage]
        },
        {
            name: 'Bandhavgarh Hotel & Resort', type: 'Hotel & Resort', stars: 4, price: 7600, score: 9.0, scoreLabel: 'Very Good',
            address: 'Tala, Umaria, Madhya Pradesh 484661',
            desc: 'A combined hotel-and-resort property with elegant rooms, a pool and a multi-cuisine restaurant near Tala gate...',
            coupleFriendly: true, park: 'bandhavgarh',
            images: [IMG.resort, IMG.pool, IMG.suite, IMG.villa, IMG.cottage]
        }
    ];

    // ---- helpers ----
    function el(id) { return document.getElementById(id); }
    function fmt(n) { return n.toLocaleString('en-IN'); }

    function starsHtml(stars) {
        var s = '';
        for (var i = 1; i <= 5; i++) {
            s += '<i class="bi bi-star-fill' + (i <= stars ? '' : ' off') + '"></i>';
        }
        return s;
    }

    function cardHtml(h, idx) {
        var thumbs = '';
        var extra = h.images.length - 1;
        for (var i = 1; i < h.images.length && i <= 4; i++) {
            var isMore = (i === 4 && extra > 4);
            thumbs += '<div class="hotel-card__thumb' + (isMore ? ' hotel-card__thumb--more' : '') +
                '" data-idx="' + idx + '" data-img="' + i + '"><img src="' + h.images[i] + '" alt="' + h.name + ' photo" loading="lazy"></div>';
        }
        return '' +
        '<article class="hotel-card" data-idx="' + idx + '">' +
            '<div class="hotel-card__gallery">' +
                '<div class="hotel-card__main-img">' +
                    '<img src="' + h.images[0] + '" alt="' + h.name + '" id="mainImg' + idx + '" loading="lazy">' +
                    '<button type="button" class="hotel-card__nav hotel-card__nav--prev" data-idx="' + idx + '" data-dir="-1" aria-label="Previous photo"><i class="bi bi-chevron-left"></i></button>' +
                    '<button type="button" class="hotel-card__nav hotel-card__nav--next" data-idx="' + idx + '" data-dir="1" aria-label="Next photo"><i class="bi bi-chevron-right"></i></button>' +
                '</div>' +
                '<div class="hotel-card__thumbs">' + thumbs + '</div>' +
            '</div>' +
            '<div class="hotel-card__body">' +
                '<h3 class="hotel-card__name">' + h.name + '</h3>' +
                '<div class="hotel-card__addr"><i class="bi bi-geo-alt-fill"></i><span>' + h.address + '</span></div>' +
                '<div class="hotel-card__rating">' + starsHtml(h.stars) + '</div>' +
                '<p class="hotel-card__desc">' + h.desc + '</p>' +
                '<div class="hotel-card__amenities">' +
                    '<i class="bi bi-wifi" title="Free WiFi"></i>' +
                    '<i class="bi bi-cup-hot" title="Restaurant"></i>' +
                    '<i class="bi bi-p-circle" title="Parking"></i>' +
                    '<i class="bi bi-tv" title="TV"></i>' +
                    (h.coupleFriendly ? '<span class="hotel-card__couple"><i class="bi bi-people-fill"></i> Couple Friendly</span>' : '') +
                '</div>' +
            '</div>' +
            '<div class="hotel-card__price-col">' +
                '<div class="hotel-card__score">' + h.scoreLabel + ' <span class="hotel-card__score-badge">' + h.score.toFixed(1) + '</span></div>' +
                '<div class="hotel-card__price">\u20B9' + fmt(h.price) + '/-</div>' +
                '<div class="hotel-card__price-note">+ \u20B90 taxes &amp; fees Per Night</div>' +
                '<div class="hotel-card__actions">' +
                    '<button type="button" class="hotel-card__enquire" data-enquire="' + idx + '">Enquire Now</button>' +
                    '<a class="hotel-card__book" href="safari-booking.html?hotel=' + encodeURIComponent(h.name) + '&park=' + h.park + '">Book Now</a>' +
                '</div>' +
            '</div>' +
        '</article>';
    }

    // ---- state ----
    var state = { min: 1000, max: 50000, ratings: [], types: [] };

    function getFiltered() {
        return HOTELS.filter(function (h) {
            if (h.price < state.min || h.price > state.max) return false;
            if (state.ratings.length && state.ratings.indexOf(h.stars) === -1) return false;
            if (state.types.length && state.types.indexOf(h.type) === -1) return false;
            return true;
        });
    }

    function render() {
        var list = getFiltered();
        var wrap = el('hotelsList');
        var empty = el('hotelsEmpty');
        if (!list.length) {
            wrap.innerHTML = '';
            empty.hidden = false;
            return;
        }
        empty.hidden = true;
        wrap.innerHTML = list.map(function (h) {
            return cardHtml(h, HOTELS.indexOf(h));
        }).join('');
    }

    // ---- gallery ----
    var galleryPos = {};
    function initGalleryHandlers() {
        document.addEventListener('click', function (e) {
            var nav = e.target.closest ? e.target.closest('.hotel-card__nav') : null;
            if (nav) {
                var idx = +nav.getAttribute('data-idx');
                var dir = +nav.getAttribute('data-dir');
                var imgs = HOTELS[idx].images;
                galleryPos[idx] = ((galleryPos[idx] || 0) + dir + imgs.length) % imgs.length;
                var main = el('mainImg' + idx);
                if (main) main.src = imgs[galleryPos[idx]];
                return;
            }
            var thumb = e.target.closest ? e.target.closest('.hotel-card__thumb') : null;
            if (thumb) {
                var ti = +thumb.getAttribute('data-idx');
                var ii = +thumb.getAttribute('data-img');
                var m = el('mainImg' + ti);
                if (m) { m.src = HOTELS[ti].images[ii]; galleryPos[ti] = ii; }
            }
        });
    }

    // ---- price slider ----
    function syncSlider() {
        var minR = el('priceMinRange'), maxR = el('priceMaxRange'), fill = el('priceFill');
        var lo = Math.min(+minR.value, +maxR.value);
        var hi = Math.max(+minR.value, +maxR.value);
        var span = (+maxR.max) - (+minR.min);
        fill.style.left = ((lo - minR.min) / span * 100) + '%';
        fill.style.width = ((hi - lo) / span * 100) + '%';
    }

    function wireControls() {
        var minR = el('priceMinRange'), maxR = el('priceMaxRange');
        var minN = el('priceMin'), maxN = el('priceMax');

        function fromRange() {
            var lo = Math.min(+minR.value, +maxR.value);
            var hi = Math.max(+minR.value, +maxR.value);
            minN.value = lo; maxN.value = hi;
            syncSlider();
        }
        minR.addEventListener('input', fromRange);
        maxR.addEventListener('input', fromRange);
        minN.addEventListener('change', function () { minR.value = minN.value; fromRange(); });
        maxN.addEventListener('change', function () { maxR.value = maxN.value; fromRange(); });

        // rating + type checkboxes handled on Apply
        el('applyFilterBtn').addEventListener('click', applyFilters);
        el('clearFilterBtn').addEventListener('click', clearFilters);
        el('hotelSearchBtn').addEventListener('click', applyFilters);
        el('hotelResetBtn').addEventListener('click', clearFilters);

        // filter collapse toggle
        el('filterToggle').addEventListener('click', function () {
            el('filterBody').classList.toggle('is-collapsed');
        });

        // populate hotel select
        var sel = el('hotelSelect');
        HOTELS.forEach(function (h) {
            var o = document.createElement('option');
            o.value = h.name; o.textContent = h.name;
            sel.appendChild(o);
        });
        sel.addEventListener('change', function () {
            applyFilters();
            if (sel.value) {
                var card = document.querySelector('.hotel-card[data-idx="' + HOTELS.findIndex(function (h) { return h.name === sel.value; }) + '"]');
                if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    function applyFilters() {
        state.min = +el('priceMin').value || 0;
        state.max = +el('priceMax').value || 999999;
        state.ratings = Array.prototype.slice.call(document.querySelectorAll('#ratingFilters input:checked')).map(function (c) { return +c.value; });
        state.types = Array.prototype.slice.call(document.querySelectorAll('#typeFilters input:checked')).map(function (c) { return c.value.replace('&amp;', '&'); });
        render();
    }

    function clearFilters() {
        el('priceMin').value = 1000; el('priceMax').value = 50000;
        el('priceMinRange').value = 1000; el('priceMaxRange').value = 50000;
        document.querySelectorAll('#ratingFilters input, #typeFilters input').forEach(function (c) { c.checked = false; });
        el('hotelSelect').value = '';
        state = { min: 1000, max: 50000, ratings: [], types: [] };
        syncSlider();
        render();
    }

    // ---- date range pickers (flatpickr) ----
    var searchDatesFP = null;
    var modalDatesFP = null;

    function fmtRange(dates) {
        if (!dates || !dates.length) return '';
        function d(x) {
            return x.getFullYear() + '-' +
                ('0' + (x.getMonth() + 1)).slice(-2) + '-' +
                ('0' + x.getDate()).slice(-2);
        }
        if (dates.length === 1) return d(dates[0]);
        return d(dates[0]) + ' / ' + d(dates[1]);
    }

    function initDatePickers() {
        if (typeof flatpickr === 'undefined') return; // graceful fallback
        var today = new Date();
        var tomorrow = new Date(); tomorrow.setDate(today.getDate() + 1);
        var common = {
            mode: 'range',
            minDate: 'today',
            dateFormat: 'Y-m-d',
            showMonths: 1
        };
        var searchInput = el('hotelDates');
        if (searchInput) {
            searchDatesFP = flatpickr(searchInput, Object.assign({}, common, {
                defaultDate: [today, tomorrow],
                onChange: function (sel) { searchInput.value = fmtRange(sel); }
            }));
            searchInput.value = fmtRange([today, tomorrow]);
        }
        var modalInput = el('enqDates');
        if (modalInput) {
            modalDatesFP = flatpickr(modalInput, Object.assign({}, common, {}));
        }
    }

    // ---- enquiry modal ----
    function openEnquiry(idx) {
        var h = HOTELS[idx];
        if (!h) return;
        var backdrop = el('enquiryBackdrop');
        el('enqHotel').value = h.name;
        el('enquiryHotelName').textContent = h.name + ' \u2014 \u20B9' + fmt(h.price) + '/- per night';
        // carry over dates & guests from the search bar if set
        var searchDates = el('hotelDates') ? el('hotelDates').value : '';
        if (searchDates && el('enqDates')) {
            el('enqDates').value = searchDates;
            if (modalDatesFP && searchDatesFP && searchDatesFP.selectedDates.length) {
                modalDatesFP.setDate(searchDatesFP.selectedDates, false);
            }
        }
        var guests = el('hotelGuests') ? el('hotelGuests').value : '';
        if (guests && el('enqGuests')) el('enqGuests').value = guests;
        el('enquiryError').hidden = true;
        backdrop.classList.add('is-open');
        backdrop.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        setTimeout(function () { var n = el('enqName'); if (n) n.focus(); }, 50);
    }

    function closeEnquiry() {
        var backdrop = el('enquiryBackdrop');
        backdrop.classList.remove('is-open');
        backdrop.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function wireEnquiry() {
        // open on Enquire Now (delegated)
        document.addEventListener('click', function (e) {
            var btn = e.target.closest ? e.target.closest('[data-enquire]') : null;
            if (btn) { openEnquiry(+btn.getAttribute('data-enquire')); }
        });
        var backdrop = el('enquiryBackdrop');
        if (!backdrop) return;
        el('enquiryClose').addEventListener('click', closeEnquiry);
        el('enquiryCancel').addEventListener('click', closeEnquiry);
        backdrop.addEventListener('click', function (e) { if (e.target === backdrop) closeEnquiry(); });
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeEnquiry(); });

        el('enquiryForm').addEventListener('submit', function (e) {
            e.preventDefault();
            var name = el('enqName').value.trim();
            var phone = el('enqPhone').value.trim();
            var err = el('enquiryError');
            if (!name || !phone) {
                err.textContent = 'Please enter your name and phone number.';
                err.hidden = false;
                return;
            }
            var hotel = el('enqHotel').value;
            var dates = el('enqDates').value || 'Not specified';
            var guests = el('enqGuests').value || 'Not specified';
            var email = el('enqEmail').value.trim() || 'Not provided';
            var msg = el('enqMessage').value.trim() || 'None';
            var text =
                'Hotel Enquiry \u2014 Wild Path Safari%0A' +
                '----------------------%0A' +
                'Hotel: ' + hotel + '%0A' +
                'Name: ' + name + '%0A' +
                'Phone: ' + phone + '%0A' +
                'Email: ' + email + '%0A' +
                'Dates: ' + dates + '%0A' +
                'Guests/Rooms: ' + guests + '%0A' +
                'Message: ' + msg;
            window.open('https://wa.me/' + WA + '?text=' + text, '_blank', 'noopener');
            closeEnquiry();
            el('enquiryForm').reset();
        });
    }

    function init() {
        if (!document.getElementById('hotelsList')) return;
        wireControls();
        initGalleryHandlers();
        initDatePickers();
        wireEnquiry();
        syncSlider();
        render();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
