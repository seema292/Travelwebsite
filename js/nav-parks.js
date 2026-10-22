// ==========================================================================
// WILD PATH SAFARI — DATA-DRIVEN NATIONAL PARKS MEGAMENU BUILDER
// Reads PARKS_DATA, injects a responsive dropdown into the header nav,
// handles hover, click, keyboard navigation, and mobile accordion.
// ==========================================================================

(function () {
    'use strict';

    // Guard: if PARKS_DATA isn't loaded, do nothing (silent fail-safe)
    if (typeof PARKS_DATA === 'undefined' || !PARKS_DATA.length) {
        console.warn('nav-parks.js: PARKS_DATA not found — megamenu not built.');
        return;
    }

    // ── Map park IDs to actual HTML page filenames ──
    // Most parks use {slug}.html, but some slugs don't match the file name.
    const PAGE_OVERRIDES = {
        'gir': 'gir-national-park.html',
        'gir-lion': 'gir-national-park.html',
    };

    function getParkPageUrl(park) {
        if (PAGE_OVERRIDES[park.id]) return PAGE_OVERRIDES[park.id];
        return park.slug + '.html';
    }

    // ── Group parks by region for the megamenu columns ──
    const REGIONS = {
        'Northern & Western India': ['jim-corbett', 'ranthambore', 'gir-lion'],
        'Central & Eastern India': ['tadoba', 'kaziranga', 'bandhavgarh', 'kanha', 'pench'],
    };

    // ── Region icon mapping (Lucide icon names) ──
    const PARK_ICONS = {
        'jim-corbett': 'trees',
        'ranthambore': 'sparkles',
        'tadoba': 'flame',
        'kaziranga': 'waves',
        'gir': 'sun',
        'gir-lion': 'sun',
        'bandhavgarh': 'shield',
        'kanha': 'tree-pine',
        'pench': 'feather',
    };

    function buildMegamenuHTML() {
        let html = '<div class="nav-parks-megamenu" role="menu" aria-label="National Parks">';

        for (const [regionName, parkIds] of Object.entries(REGIONS)) {
            const parks = parkIds
                .map(id => PARKS_DATA.find(p => p.id === id))
                .filter(Boolean);

            if (!parks.length) continue;

            html += `<div class="nav-parks-column">`;
            html += `<h6 class="nav-parks-region-title">${regionName}</h6>`;

            for (const park of parks) {
                const url = getParkPageUrl(park);
                const icon = PARK_ICONS[park.id] || 'map-pin';
                const rating = park.rating ? park.rating.toFixed(1) : '';
                html += `
                    <a href="${url}" class="nav-parks-link" role="menuitem" data-park-id="${park.id}">
                        <span class="nav-parks-icon"><i data-lucide="${icon}"></i></span>
                        <span class="nav-parks-info">
                            <span class="nav-parks-name">${park.shortName}</span>
                            <span class="nav-parks-state">${park.state}</span>
                        </span>
                        ${rating ? `<span class="nav-parks-rating"><i data-lucide="star" style="width:11px;height:11px;fill:currentColor;"></i> ${rating}</span>` : ''}
                    </a>`;
            }

            html += `</div>`;
        }

        // Footer CTA row
        html += `
            <div class="nav-parks-footer">
                <a href="safari-booking.html" class="nav-parks-cta">
                    <i data-lucide="calendar-check" style="width:15px;height:15px;"></i>
                    Book a Safari
                </a>
                <a href="packages.html" class="nav-parks-cta nav-parks-cta--secondary">
                    <i data-lucide="briefcase" style="width:15px;height:15px;"></i>
                    Tour Packages
                </a>
            </div>`;

        html += '</div>';
        return html;
    }

    function buildMobileSubmenuHTML() {
        let html = '<ul class="nav-parks-mobile-list" role="list">';

        for (const [regionName, parkIds] of Object.entries(REGIONS)) {
            const parks = parkIds
                .map(id => PARKS_DATA.find(p => p.id === id))
                .filter(Boolean);

            if (!parks.length) continue;

            html += `<li class="nav-parks-mobile-region">${regionName}</li>`;

            for (const park of parks) {
                const url = getParkPageUrl(park);
                const icon = PARK_ICONS[park.id] || 'map-pin';
                html += `
                    <li>
                        <a href="${url}" class="nav-parks-mobile-link">
                            <i data-lucide="${icon}" style="width:16px;height:16px;"></i>
                            ${park.shortName}
                            <small>${park.state}</small>
                        </a>
                    </li>`;
            }
        }

        html += `
            <li class="nav-parks-mobile-actions">
                <a href="safari-booking.html" class="nav-parks-mobile-cta"><i data-lucide="calendar-check" style="width:15px;height:15px;"></i> Book a Safari</a>
                <a href="packages.html" class="nav-parks-mobile-cta nav-parks-mobile-cta--secondary"><i data-lucide="briefcase" style="width:15px;height:15px;"></i> Tour Packages</a>
            </li>`;

        html += '</ul>';
        return html;
    }

    // ── Main initialization ──
    function initNationalParksNav() {
        const navItems = document.querySelectorAll('.nav-item');

        navItems.forEach(function (item) {
            const link = item.querySelector('.nav-link');
            if (!link) return;

            const linkText = link.textContent.trim().toLowerCase();
            // Match "National Parks" or "Destinations" on any page
            const isParksItem = linkText.includes('national park') || linkText.includes('destination');

            if (!isParksItem) return;

            // ── Set up the nav-item as a dropdown container ──
            item.classList.add('nav-parks-item');

            // Ensure the link has the right text and a chevron
            link.textContent = 'National Parks';
            link.setAttribute('aria-haspopup', 'true');
            link.setAttribute('aria-expanded', 'false');
            link.setAttribute('href', '#');

            // Add chevron icon
            const chevron = document.createElement('i');
            chevron.setAttribute('data-lucide', 'chevron-down');
            chevron.style.cssText = 'width:13px;height:13px;margin-left:2px;';
            link.appendChild(chevron);

            // Remove any existing hardcoded dropdown (the old megamenu)
            const existingDropdown = item.querySelector('.nav-dropdown, .megamenu');
            if (existingDropdown) {
                existingDropdown.remove();
            }

            // ── Inject the data-driven desktop megamenu ──
            // NOTE: intentionally NOT using 'nav-dropdown' class to avoid
            // conflicting with style.css hover rules that show/hide it.
            const dropdownWrapper = document.createElement('div');
            dropdownWrapper.className = 'nav-parks-dropdown';
            dropdownWrapper.innerHTML = buildMegamenuHTML();
            item.appendChild(dropdownWrapper);

            // ── Inject the mobile submenu ──
            const mobileSubmenu = document.createElement('div');
            mobileSubmenu.className = 'nav-parks-mobile-submenu';
            mobileSubmenu.innerHTML = buildMobileSubmenuHTML();
            mobileSubmenu.setAttribute('hidden', '');
            item.appendChild(mobileSubmenu);

            // ── Desktop hover behavior ──
            let hoverTimeout = null;

            item.addEventListener('mouseenter', function () {
                if (window.innerWidth < 992) return;
                clearTimeout(hoverTimeout);
                openDropdown();
            });

            item.addEventListener('mouseleave', function () {
                if (window.innerWidth < 992) return;
                hoverTimeout = setTimeout(closeDropdown, 200);
            });

            // ── Click / tap behavior (desktop click + mobile toggle) ──
            link.addEventListener('click', function (e) {
                e.preventDefault();
                if (window.innerWidth < 992) {
                    // Mobile: toggle the collapsible submenu
                    toggleMobileSubmenu(mobileSubmenu, link);
                } else {
                    // Desktop: toggle the dropdown
                    if (item.classList.contains('nav-parks-open')) {
                        closeDropdown();
                    } else {
                        openDropdown();
                    }
                }
            });

            function openDropdown() {
                // Close any other open parks dropdowns
                document.querySelectorAll('.nav-parks-open').forEach(el => {
                    if (el !== item) {
                        el.classList.remove('nav-parks-open');
                        const l = el.querySelector('.nav-link');
                        if (l) l.setAttribute('aria-expanded', 'false');
                    }
                });
                item.classList.add('nav-parks-open');
                link.setAttribute('aria-expanded', 'true');
            }

            function closeDropdown() {
                item.classList.remove('nav-parks-open');
                link.setAttribute('aria-expanded', 'false');
            }

            // ── Keyboard navigation ──
            link.addEventListener('keydown', function (e) {
                switch (e.key) {
                    case 'Enter':
                    case ' ':
                        e.preventDefault();
                        if (item.classList.contains('nav-parks-open')) {
                            closeDropdown();
                        } else {
                            openDropdown();
                        }
                        break;
                    case 'ArrowDown':
                        e.preventDefault();
                        openDropdown();
                        // Focus first park link
                        const firstLink = dropdownWrapper.querySelector('.nav-parks-link');
                        if (firstLink) firstLink.focus();
                        break;
                    case 'Escape':
                        closeDropdown();
                        link.focus();
                        break;
                }
            });

            // Keyboard nav inside the dropdown
            dropdownWrapper.addEventListener('keydown', function (e) {
                const parkLinks = Array.from(dropdownWrapper.querySelectorAll('.nav-parks-link, .nav-parks-cta'));
                const currentIndex = parkLinks.indexOf(document.activeElement);

                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const nextIndex = Math.min(currentIndex + 1, parkLinks.length - 1);
                    parkLinks[nextIndex].focus();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prevIndex = Math.max(currentIndex - 1, 0);
                    parkLinks[prevIndex].focus();
                } else if (e.key === 'Escape') {
                    e.preventDefault();
                    closeDropdown();
                    link.focus();
                } else if (e.key === 'Tab' && !e.shiftKey && currentIndex === parkLinks.length - 1) {
                    closeDropdown();
                }
            });
        });

        // ── Close dropdown when clicking outside ──
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.nav-parks-item')) {
                document.querySelectorAll('.nav-parks-open').forEach(el => {
                    el.classList.remove('nav-parks-open');
                    const l = el.querySelector('.nav-link');
                    if (l) l.setAttribute('aria-expanded', 'false');
                });
            }
        });

        // ── Re-render Lucide icons if available ──
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }
    }

    function toggleMobileSubmenu(submenu, link) {
        const isHidden = submenu.hasAttribute('hidden');
        // Close all other mobile submenus first
        document.querySelectorAll('.nav-parks-mobile-submenu').forEach(el => {
            if (el !== submenu) {
                el.setAttribute('hidden', '');
            }
        });
        document.querySelectorAll('.nav-parks-item .nav-link').forEach(el => {
            if (el !== link) {
                el.setAttribute('aria-expanded', 'false');
            }
        });

        if (isHidden) {
            submenu.removeAttribute('hidden');
            link.setAttribute('aria-expanded', 'true');
        } else {
            submenu.setAttribute('hidden', '');
            link.setAttribute('aria-expanded', 'false');
        }
    }

    // ── Initialize on DOM ready ──
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNationalParksNav);
    } else {
        initNationalParksNav();
    }
})();
