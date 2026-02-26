document.addEventListener("DOMContentLoaded", function () {

    /* ================= MENU MOBILE ================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    /* ================= CARDS EXPANSÍVEIS ================= */

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("active");
        });
    });

    /* ================= BOTÃO WHATSAPP ================= */

    const whatsappBtn = document.getElementById('whatsapp-float');

    if (whatsappBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                whatsappBtn.classList.add('show');
            } else {
                whatsappBtn.classList.remove('show');
            }
        });
    }

    /* ================= ANIMAÇÃO FADE-UP ================= */

    const elements = document.querySelectorAll(".fade-up");

    if (elements.length > 0) {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); // anima só uma vez
                }
            });
        }, {
            threshold: 0.2
        });

        elements.forEach((el, index) => {
            el.style.transitionDelay = `${index * 0.15}s`; // efeito cascata
            observer.observe(el);
        });

    }

});