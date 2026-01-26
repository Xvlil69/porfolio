// Configuration et variables globales
const config = {
    scrollOffset: 100,
    animationDelay: 100,
    smoothScrollDuration: 800
};

// Éléments DOM
const elements = {
    navbar: document.getElementById('navbar'),
    hamburger: document.getElementById('hamburger'),
    navMenu: document.getElementById('nav-menu'),
    themeToggle: document.getElementById('theme-toggle'),
    contactForm: document.getElementById('contact-form')
};

// État de l'application
let state = {
    isDarkMode: localStorage.getItem('darkMode') === 'true',
    isMenuOpen: false,
    scrollY: 0
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    setupAnimations();
    setupSmoothScrolling();
});

// Initialisation de l'application
function initializeApp() {
    // Appliquer le thème sauvegardé
    applyTheme(state.isDarkMode);
    
    // Ajouter la classe active au menu si nécessaire
    if (state.isMenuOpen) {
        elements.navMenu.classList.add('active');
    }
    
    // Initialiser les animations d'entrée
    initFadeInAnimations();
}

// Configuration des écouteurs d'événements
function setupEventListeners() {
    // Navigation mobile
    if (elements.hamburger) {
        elements.hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Basculement du thème
    if (elements.themeToggle) {
        elements.themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Scroll pour la navbar
    window.addEventListener('scroll', handleScroll);
    
    // Formulaire de contact
    if (elements.contactForm) {
        elements.contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Fermer le menu mobile en cliquant sur un lien
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Observer les animations d'entrée
    setupIntersectionObserver();
}

// Gestion du scroll
function handleScroll() {
    state.scrollY = window.scrollY;
    
    // Ajouter/supprimer la classe scrolled à la navbar
    if (state.scrollY > 50) {
        elements.navbar.classList.add('scrolled');
    } else {
        elements.navbar.classList.remove('scrolled');
    }
    
    // Mettre à jour les liens de navigation actifs
    updateActiveNavLink();
}

// Mise à jour du lien de navigation actif
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - config.scrollOffset;
        const sectionHeight = section.clientHeight;
        
        if (state.scrollY >= sectionTop && state.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Basculement du menu mobile
function toggleMobileMenu() {
    state.isMenuOpen = !state.isMenuOpen;
    
    if (state.isMenuOpen) {
        elements.navMenu.classList.add('active');
        elements.hamburger.classList.add('active');
    } else {
        elements.navMenu.classList.remove('active');
        elements.hamburger.classList.remove('active');
    }
}

// Fermer le menu mobile
function closeMobileMenu() {
    state.isMenuOpen = false;
    elements.navMenu.classList.remove('active');
    elements.hamburger.classList.remove('active');
}

// Basculement du thème
function toggleTheme() {
    state.isDarkMode = !state.isDarkMode;
    applyTheme(state.isDarkMode);
    localStorage.setItem('darkMode', state.isDarkMode);
}

// Appliquer le thème
function applyTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    
    // Mettre à jour l'icône du bouton de thème
    const icon = elements.themeToggle.querySelector('i');
    if (icon) {
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Configuration des animations
function setupAnimations() {
    // Animation des statistiques
    animateStats();
    
    // Animation des compétences
    animateSkills();
    
    // Animation des projets
    animateProjects();
}

// Animation des statistiques
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.textContent);
                animateNumber(target, 0, finalValue, 2000);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => observer.observe(stat));
}

// Animation des nombres
function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * easeOutQuart(progress));
        element.textContent = current + '+';
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Fonction d'easing
function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
}

// Animation des compétences
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease';
        observer.observe(item);
    });
}

// Animation des projets
function animateProjects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Configuration du scroll fluide
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - 70; // Offset pour la navbar
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Configuration de l'observateur d'intersection pour les animations d'entrée
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observer tous les éléments avec la classe fade-in
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Initialisation des animations d'entrée
function initFadeInAnimations() {
    // Ajouter la classe fade-in aux éléments appropriés
    const elementsToAnimate = [
        '.hero-text',
        '.hero-image',
        '.about-text',
        '.about-image',
        '.skills-category',
        '.project-card',
        '.certification-card',
        '.contact-info',
        '.contact-form'
    ];
    
    elementsToAnimate.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('fade-in');
        });
    });
}

// Gestion du formulaire de contact
async function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const submitButton = e.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    try {
        // Désactiver le bouton et afficher le chargement
        submitButton.disabled = true;
        submitButton.textContent = 'Envoi en cours...';
        
        // Simuler l'envoi (remplacer par votre logique d'API)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Afficher le succès
        showNotification('Message envoyé avec succès !', 'success');
        e.target.reset();
        
    } catch (error) {
        showNotification('Erreur lors de l\'envoi du message.', 'error');
    } finally {
        // Réactiver le bouton
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }
}

// Affichage des notifications
function showNotification(message, type = 'info') {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Ajouter les styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    // Ajouter au DOM
    document.body.appendChild(notification);
    
    // Animer l'entrée
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Gérer la fermeture
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });
    
    // Auto-fermeture après 5 secondes
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Utilitaires
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimisation des performances
const optimizedScrollHandler = debounce(handleScroll, 10);
window.addEventListener('scroll', optimizedScrollHandler);

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', debounce(() => {
    if (window.innerWidth > 768 && state.isMenuOpen) {
        closeMobileMenu();
    }
}, 250));

// Export pour utilisation globale (si nécessaire)
window.PortfolioApp = {
    toggleTheme,
    toggleMobileMenu,
    closeMobileMenu,
    showNotification
}; 