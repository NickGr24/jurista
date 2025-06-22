// main.js
// Плавное появление и анимации для hero-title, about и services

document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS Library
    AOS.init({
        duration: 800, // values from 0 to 3000, with step 50ms
        once: true, // whether animation should happen only once - while scrolling down
    });

    // Бургер-меню
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    const navLinks = nav.querySelectorAll('a');

    burger.addEventListener('click', function () {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
        });
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

    // Staggered animation for service cards to prevent flickering
    const serviceCards = document.querySelectorAll('.service-card');
    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    serviceCards.forEach(card => {
        cardObserver.observe(card);
    });

    // Animate hero text fade in
    const accentFade = document.querySelector('.hero-fade-in');
    if (accentFade) {
        setTimeout(() => {
            accentFade.classList.add('visible');
        }, 500); // Short delay for effect
    }

    // Scrolling circle animation - simplified with CSS transitions/AOS
    // The complex JS logic has been removed in favor of a CSS and data-attribute-driven approach
    // for better performance and maintainability.
});
