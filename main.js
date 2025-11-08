/*var type=new Typed('.test',{
    strings:["Développeur Web","Developpeur Mobile","Trader","Entrepreneur"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
*/
});
// Animation du texte avec Typed.js
var type = new Typed('.test', {
    strings: ['Développeur Web', 'Trader', 'Entrepreneur'],
    typeSpeed: 100,
    backSpeed: 100,
    
    loop: true
});

// Menu hamburger pour mobile
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

// Créer l'icône hamburger si elle n'existe pas
if (!menuIcon) {
    const header = document.querySelector('.header');
    const icon = document.createElement('div');
    icon.className = 'menu-icon';
    icon.innerHTML = '<i class="fas fa-bars"></i>';
    header.appendChild(icon);
    
    // Réattribuer la référence
    const newMenuIcon = document.querySelector('.menu-icon');
    
    // Toggle menu
    newMenuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        const iconElement = newMenuIcon.querySelector('i');
        iconElement.classList.toggle('fa-bars');
        iconElement.classList.toggle('fa-times');
    });
    
    // Fermer le menu quand on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            newMenuIcon.querySelector('i').classList.remove('fa-times');
            newMenuIcon.querySelector('i').classList.add('fa-bars');
        });
    });
}

// Fermer le menu si on clique en dehors
document.addEventListener('click', (e) => {
    const icon = document.querySelector('.menu-icon');
    if (icon && !navbar.contains(e.target) && !icon.contains(e.target)) {
        navbar.classList.remove('active');
        icon.querySelector('i').classList.remove('fa-times');
        icon.querySelector('i').classList.add('fa-bars');
    }
});

// Smooth scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation des barres de compétences au scroll
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fillBar 1.5s ease-in-out forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-per').forEach(skill => {
    observer.observe(skill);
});

// Active link dans la navbar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});









