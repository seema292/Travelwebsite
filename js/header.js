// ==========================================================================
// WILD PATH SAFARI — UNIFIED HEADER & MOBILE DRAWER SCRIPT
// ==========================================================================

(function () {
    "use strict";

    window.toggleMobileMenu = function (e) {
        if (e) e.preventDefault();
        const menu = document.getElementById("mobileMenu");
        const backdrop = document.getElementById("mobileMenuBackdrop");
        const toggle = document.getElementById("navToggle");
        const isOpen = menu ? menu.classList.toggle("open") : false;
        if (backdrop) backdrop.classList.toggle("open", isOpen);
        if (toggle) {
            toggle.setAttribute("aria-expanded", String(isOpen));
            toggle.innerHTML = isOpen
                ? "<i class=\"bi bi-x-lg\" aria-hidden=\"true\"></i>"
                : "<i class=\"bi bi-list\" aria-hidden=\"true\"></i>";
        }
        document.body.classList.toggle("menu-open", isOpen);
    };

    window.closeMobileMenu = function () {
        const menu = document.getElementById("mobileMenu");
        const backdrop = document.getElementById("mobileMenuBackdrop");
        const toggle = document.getElementById("navToggle");
        if (menu) menu.classList.remove("open");
        if (backdrop) backdrop.classList.remove("open");
        if (toggle) {
            toggle.setAttribute("aria-expanded", "false");
            toggle.innerHTML = "<i class=\"bi bi-list\" aria-hidden=\"true\"></i>";
        }
        document.body.classList.remove("menu-open");
    };

    window.toggleMobileParksDropdown = function (btn) {
        const parent = btn.closest(".mobile-dropdown");
        if (!parent) return;
        const isExpanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!isExpanded));
        parent.classList.toggle("open", !isExpanded);
    };

    function initHeader() {
        // Hamburger click
        const navToggle = document.getElementById("navToggle");
        if (navToggle) {
            navToggle.addEventListener("click", window.toggleMobileMenu);
        }

        // Backdrop click
        const backdrop = document.getElementById("mobileMenuBackdrop");
        if (backdrop) {
            backdrop.addEventListener("click", window.closeMobileMenu);
        }

        // Close on ESC
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") {
                window.closeMobileMenu();
            }
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initHeader);
    } else {
        initHeader();
    }
})();