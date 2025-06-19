// Основные анимации появления секций
function revealOnScroll() {
    const sections = document.querySelectorAll('.hero, .services, .about, .blog, .e-jurista');
    const trigger = window.innerHeight * 0.85;
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < trigger) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Анимация появления карточек продуктов и услуг
function revealCardsOnScroll() {
    const cards = document.querySelectorAll('.product-card, .service-card');
    const trigger = window.innerHeight * 0.92;
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < trigger) {
            card.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealCardsOnScroll);
window.addEventListener('DOMContentLoaded', revealCardsOnScroll);

// Плавный скролл для навигации
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Заглушка для формы (можно интегрировать отправку на почту)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    this.reset();
});

// Бургер-меню для мобильной навигации
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});

// Анимация появления футера
function revealFooterOnScroll() {
    const footer = document.querySelector('.footer');
    if (!footer) return;
    const trigger = window.innerHeight + window.scrollY;
    const footerTop = footer.getBoundingClientRect().top + window.scrollY;
    if (trigger > footerTop + 60) {
        footer.classList.add('visible');
    }
}
window.addEventListener('scroll', revealFooterOnScroll);
window.addEventListener('DOMContentLoaded', revealFooterOnScroll);
