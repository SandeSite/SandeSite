// ========================================
// PORTFOLIO JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // 1. WELCOME MESSAGE
    // ========================================

    console.log("Welcome to Masande Pobana's portfolio!");

    // ========================================
// MOBILE NAVIGATION MENU
// ========================================
const navLinks = document.querySelectorAll(".nav-links a");
const menuToggle = document.querySelector(".menu-toggle");
const navLinksContainer = document.querySelector(".nav-links");

if (menuToggle && navLinksContainer) {

    menuToggle.addEventListener("click", function () {

        navLinksContainer.classList.toggle("open");

    });

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinksContainer.classList.remove("open");
        });
    });
}

// ========================================
// PROJECT FILTER
// ========================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedFilter = this.getAttribute("data-filter");
        filterButtons.forEach(function (btn) { btn.classList.remove("active"); });
        this.classList.add("active");
        projectCards.forEach(function (card) {
            const category = card.getAttribute("data-category");
            if (selectedFilter === "all" || category === selectedFilter) { card.style.display = "block"; }
            else { card.style.display = "none"; }
        });
    });
});

    // ========================================
    // 2. AUTOMATIC FOOTER YEAR
    // ========================================
    const footerYear = document.querySelector("footer p");
    if (footerYear) { footerYear.innerHTML = `© ${new Date().getFullYear()} Masande Pobana. All rights reserved.`; }

    // ========================================
    // 3. NAVIGATION LINKS
    // ========================================
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (navLink) { navLink.classList.remove("active"); });
            this.classList.add("active");
        });
    });

    // ========================================
    // 4. ACTIVE NAVIGATION WHILE SCROLLING
    // ========================================
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", function () {
        let currentSection = "";
        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) { currentSection = section.getAttribute("id"); }
        });
        navLinks.forEach(function (link) {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + currentSection) { link.classList.add("active"); }
        });
    });

    // ========================================
    // 5. SCROLL-TO-TOP BUTTON
    // ========================================
    const topButton = document.createElement("button");
    topButton.innerHTML = "↑";
    topButton.className = "scroll-top";
    topButton.setAttribute("aria-label", "Scroll to top");
    document.body.appendChild(topButton);
    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) { topButton.classList.add("show"); }
        else { topButton.classList.remove("show"); }
    });
    topButton.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

    // ========================================
    // 6. REVEAL ELEMENTS WHEN SCROLLING
    // ========================================
    const revealElements = document.querySelectorAll(".section, .skill-card, .project-card");
    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add("visible"); } });
    }, { threshold: 0.15 });
    revealElements.forEach(function (element) { element.classList.add("reveal"); revealObserver.observe(element); });

    // ========================================
    // 7. VIEW MY WORK BUTTON
    // ========================================
    const workButton = document.querySelector(".primary-btn");
    if (workButton) { workButton.addEventListener("click", function () { console.log("Viewing portfolio projects..."); }); }

    // ========================================
    // 8. CONTACT BUTTON
    // ========================================
    const contactButton = document.querySelector(".secondary-btn");
    if (contactButton) { contactButton.addEventListener("click", function () { console.log("Opening contact section..."); }); }
});
