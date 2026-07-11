// ============================================================
// main.js — NXR TECH
// ============================================================

// 1. NAVBAR — efecto oscuro al hacer scroll (Enrique Prada)
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. HAMBURGER MENU (Enrique Prada)
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');
let menuAbierto = false;

hamburger.addEventListener('click', () => {
    menuAbierto = !menuAbierto;
    navLinks.classList.toggle('nav-abierto', menuAbierto);
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuAbierto = false;
        navLinks.classList.remove('nav-abierto');
    }
});

// 3. ANIMACIONES AL HACER SCROLL — Intersection Observer
const elementosAnimar = document.querySelectorAll('.animar');
const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

elementosAnimar.forEach(el => observador.observe(el));

// 4. CONTADOR ANIMADO — Juan Morales
const contadores = document.querySelectorAll('.jm-contador-numero');
let contadorActivo = false;

const observadorContador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !contadorActivo) {
            contadorActivo = true;
            contadores.forEach(contador => {
                const target = parseInt(contador.getAttribute('data-target'));
                let actual = 0;
                const incremento = target / 80;
                const timer = setInterval(() => {
                    actual += incremento;
                    if (actual >= target) {
                        actual = target;
                        clearInterval(timer);
                    }
                    contador.textContent = Math.floor(actual).toLocaleString() + (target === 98 ? '%' : '+');
                }, 20);
            });
        }
    });
}, { threshold: 0.5 });

const seccionContador = document.getElementById('jm-contador');
if (seccionContador) observadorContador.observe(seccionContador);
