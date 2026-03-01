document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();
    initAccordion("#terapias .terapia-card", ".terapia-card-header");
    initAccordion("#beneficios .card", ".card-header");
    initWhatsappButton();
    initFadeUp();

});


/* =========================
   MENU MOBILE
========================= */
function initMobileMenu() {

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const overlay = document.querySelector(".menu-overlay");

    if (!menuToggle || !navLinks || !overlay) return;

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", closeMenu);

    // FECHAR AO CLICAR EM LINK
    const navItems = navLinks.querySelectorAll("a");
    navItems.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    function closeMenu() {
        navLinks.classList.remove("active");
        overlay.classList.remove("active");
    }
}


/* =========================
   ACORDEÃO GENÉRICO
========================= */
function initAccordion(selector, headerClass) {

    const cards = document.querySelectorAll(selector);
    if (!cards.length) return;

    cards.forEach(card => {
        const header = card.querySelector(headerClass);
        if (!header) return;

        header.addEventListener("click", () => {

            cards.forEach(other => {
                if (other !== card) {
                    other.classList.remove("active");
                }
            });

            card.classList.toggle("active");
        });
    });
}


/* =========================
   BOTÃO WHATSAPP
========================= */
function initWhatsappButton() {

    const whatsappBtn = document.getElementById("whatsapp-float");
    if (!whatsappBtn) return;

    window.addEventListener("scroll", () => {
        whatsappBtn.classList.toggle("show", window.scrollY > 100);
    });
}


/* =========================
   ANIMAÇÃO FADE-UP
========================= */
function initFadeUp() {

    const elements = document.querySelectorAll(".fade-up");
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(el);
    });
}