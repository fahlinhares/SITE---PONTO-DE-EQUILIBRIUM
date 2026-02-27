/* ==================================================
01 - MENU MOBILE
02 - CARDS EXPANSÍVEIS (ACORDEÃO)
03 - BOTÃO WHATSAPP
04 - ANIMAÇÃO FADE-UP
================================================== */



document.addEventListener("DOMContentLoaded", function () {

    /* ===================================================
       MENU MOBILE
    =================================================== */
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const overlay = document.querySelector(".menu-overlay");

    if (menuToggle && navLinks && overlay) {

        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            overlay.classList.toggle("active");
        });

        overlay.addEventListener("click", () => {
            navLinks.classList.remove("active");
            overlay.classList.remove("active");
        });
    }

    /* ===================================================
       CARDS TERAPIAS (ACORDEÃO - ABRE 1 E FECHA OUTRO)
    =================================================== */
    const terapiaCards = document.querySelectorAll("#terapias .terapia-card");

    if (terapiaCards.length > 0) {
        terapiaCards.forEach(card => {
            const header = card.querySelector(".terapia-card-header");

            if (!header) return;

            header.addEventListener("click", function () {

                // Fecha os outros
                terapiaCards.forEach(c => {
                    if (c !== card) {
                        c.classList.remove("active");
                    }
                });

                // Alterna o atual
                card.classList.toggle("active");
            });
        });
    }


     /* ===================================================
       CARDS BENEFÍCIOS
    =================================================== */
    const generalCards = document.querySelectorAll("#beneficios .card");

    if (generalCards.length > 0) {
        generalCards.forEach(card => {
            const header = card.querySelector(".card-header");

            if (!header) return;

            header.addEventListener("click", () => {

                generalCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.classList.remove("active");
                    }
                });

                card.classList.toggle("active");
            });
        });
    }


    /* ===================================================
       BOTÃO WHATSAPP FLUTUANTE
    =================================================== */
    const whatsappBtn = document.getElementById("whatsapp-float");

    if (whatsappBtn) {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 100) {
                whatsappBtn.classList.add("show");
            } else {
                whatsappBtn.classList.remove("show");
            }

        });
    }


    /* ===================================================
       ANIMAÇÃO FADE-UP (INTERSECTION OBSERVER)
    =================================================== */
    const elements = document.querySelectorAll(".fade-up");

    if (elements.length > 0) {

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

});