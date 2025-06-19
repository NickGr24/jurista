// main.js
// Плавное появление и анимации для hero-title, about и др.

document.addEventListener('DOMContentLoaded', function () {
    // Бургер-меню
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    burger.addEventListener('click', function () {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Плавное появление секций
    const fadeInLeft = document.querySelectorAll('.fadeInLeft');
    const fadeInRight = document.querySelectorAll('.fadeInRight');
    const fadeInUp = document.querySelectorAll('.fadeInUp');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    fadeInLeft.forEach(el => observer.observe(el));
    fadeInRight.forEach(el => observer.observe(el));
    fadeInUp.forEach(el => observer.observe(el));
});
