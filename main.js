// main.js
// Плавное появление и анимации для hero-title, about и services

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
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    fadeInLeft.forEach(el => observer.observe(el));
    fadeInRight.forEach(el => observer.observe(el));
    fadeInUp.forEach(el => observer.observe(el));

    // Анимация service-card при скролле до секции services
    const serviceCards = document.querySelectorAll('.service-card');
    const servicesSection = document.querySelector('.services-list');
    if (servicesSection) {
        const serviceObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    serviceCards.forEach(card => card.classList.add('visible'));
                    serviceObserver.unobserve(servicesSection);
                }
            });
        }, { threshold: 0.2 });
        serviceObserver.observe(servicesSection);
    }

    // Анимация печатания двух строк заголовка
    const firstTyping = document.querySelector('.typing-effect');
    const secondTyping = document.querySelector('.typing-effect-second');
    const accentFade = document.querySelector('.hero-fade-in');
    if (firstTyping && secondTyping && accentFade) {
        firstTyping.addEventListener('animationend', function handler1() {
            firstTyping.classList.add('finished');
            secondTyping.classList.add('animated');
            firstTyping.removeEventListener('animationend', handler1);
        });
        secondTyping.addEventListener('animationend', function handler2() {
            secondTyping.classList.add('finished');
            setTimeout(() => {
                accentFade.classList.add('visible');
            }, 700);
            secondTyping.removeEventListener('animationend', handler2);
        });
    }
});
