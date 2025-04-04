// Animation de chargement de la page
window.addEventListener('load', function() {
    setTimeout(function() {
        document.querySelector('.loading-animation').classList.add('loaded');
    }, 500);
});

// Header au défilement - change les styles du header lors du scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animation des éléments au défilement avec IntersectionObserver
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne tous les éléments avec la classe animate-on-scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    // Configuration de l'observer pour déclencher les animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1  // L'animation est déclenchée lorsque 10% de l'élément est visible
    });
    
    // Observer chaque élément
    animateElements.forEach(element => {
        observer.observe(element);
    });
});

// Navigation fluide pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,  // Décalage de 70px pour tenir compte du header
                behavior: 'smooth'
            });
        }
    });
});

// Validation du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // La soumission est gérée par Formspree, mais on peut ajouter une animation
            const submitButton = document.querySelector('.btn-submit');
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            // On ne fait rien d'autre car Formspree s'occupe de la soumission
        });
    }
});
