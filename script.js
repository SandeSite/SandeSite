document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinksContainer = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("main section[id]");

    menuToggle.addEventListener("click", function () {
        const isOpen = navLinksContainer.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    });
    navLinks.forEach(function (link) { link.addEventListener("click", function () { navLinksContainer.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false"); }); });
    document.getElementById("footer-year").textContent = new Date().getFullYear();

    window.addEventListener("scroll", function () {
        let currentSection = "";
        sections.forEach(function (section) { if (window.scrollY >= section.offsetTop - 160) { currentSection = section.id; } });
        navLinks.forEach(function (link) { link.classList.toggle("active", link.getAttribute("href") === "#" + currentSection); });
    }, { passive: true });

    const topButton = document.createElement("button");
    topButton.className = "scroll-top"; topButton.type = "button"; topButton.textContent = "↑"; topButton.setAttribute("aria-label", "Scroll to top"); document.body.appendChild(topButton);
    window.addEventListener("scroll", function () { topButton.classList.toggle("show", window.scrollY > 500); }, { passive: true });
    topButton.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

    const filterButtons = document.querySelectorAll(".filter-btn"); const projectCards = document.querySelectorAll(".project-card");
    filterButtons.forEach(function (button) { button.addEventListener("click", function () { const selected = button.dataset.filter; filterButtons.forEach(function (item) { item.classList.toggle("active", item === button); }); projectCards.forEach(function (card) { card.classList.toggle("is-hidden", !(selected === "all" || card.dataset.category === selected)); }); }); });

    if ("IntersectionObserver" in window) { const observer = new IntersectionObserver(function (entries, observed) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add("visible"); observed.unobserve(entry.target); } }); }, { threshold: 0.12 }); document.querySelectorAll(".section, .skill-card, .project-card").forEach(function (element) { element.classList.add("reveal"); observer.observe(element); }); }
});
