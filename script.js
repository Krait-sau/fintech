// static/js/script.js - Enhanced Version with ReactBits-style Animations

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Auto-hide flash messages after 5 seconds
document.addEventListener('DOMContentLoaded', () => {
    const flashMessages = document.querySelectorAll('.flash-message');
    flashMessages.forEach(message => {
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => {
                if (message.parentNode) {
                    message.parentNode.removeChild(message);
                }
            }, 300);
        }, 5000);
    });

    // Initialize animations
    initAnimations();
});

// ReactBits-style Animation System
class AnimationManager {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.intersectionObserver = new IntersectionObserver(
            this.handleIntersection.bind(this),
            this.observerOptions
        );
    }

    // Animation presets (ReactBits inspired)
    animationPresets = {
        fadeIn: {
            in: 'animate__animated animate__fadeIn',
            out: 'animate__animated animate__fadeOut'
        },
        slideInUp: {
            in: 'animate__animated animate__slideInUp',
            out: 'animate__animated animate__slideOutDown'
        },
        slideInLeft: {
            in: 'animate__animated animate__slideInLeft',
            out: 'animate__animated animate__slideOutLeft'
        },
        slideInRight: {
            in: 'animate__animated animate__slideInRight',
            out: 'animate__animated animate__slideOutRight'
        },
        zoomIn: {
            in: 'animate__animated animate__zoomIn',
            out: 'animate__animated animate__zoomOut'
        },
        bounceIn: {
            in: 'animate__animated animate__bounceIn',
            out: 'animate__animated animate__bounceOut'
        },
        flipInX: {
            in: 'animate__animated animate__flipInX',
            out: 'animate__animated animate__flipOutX'
        },
        lightSpeedIn: {
            in: 'animate__animated animate__lightSpeedInRight',
            out: 'animate__animated animate__lightSpeedOutLeft'
        }
    };

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.animateIn(entry.target);
            } else {
                // Optional: animate out when element leaves viewport
                // this.animateOut(entry.target);
            }
        });
    }

    animateIn(element) {
        // Get animation type from data attribute or use default
        const animationType = element.dataset.animation || 'fadeIn';
        const duration = element.dataset.duration || '1s';
        
        // Remove any existing animation classes
        this.removeAnimationClasses(element);
        
        // Add the animation class
        element.classList.add(...this.animationPresets[animationType].in.split(' '));
        
        // Set custom duration if specified
        if (duration !== '1s') {
            element.style.setProperty('--animate-duration', duration);
        }
        
        // Remove animation class after completion to allow re-triggering
        element.addEventListener('animationend', () => {
            this.removeAnimationClasses(element);
            element.classList.add('animate__animated');
        }, { once: true });
    }

    animateOut(element) {
        const animationType = element.dataset.animation || 'fadeIn';
        this.removeAnimationClasses(element);
        element.classList.add(...this.animationPresets[animationType].out.split(' '));
    }

    removeAnimationClasses(element) {
        Object.values(this.animationPresets).forEach(preset => {
            element.classList.remove(...preset.in.split(' '));
            element.classList.remove(...preset.out.split(' '));
        });
    }

    observeElements(elements) {
        elements.forEach(element => {
            this.intersectionObserver.observe(element);
        });
    }

    // Manual animation triggers
    triggerAnimation(element, animationType = 'fadeIn', duration = '1s') {
        element.dataset.animation = animationType;
        element.dataset.duration = duration;
        this.animateIn(element);
    }

    // Stagger animations for groups of elements
    staggerAnimation(elements, animationType = 'fadeIn', staggerDelay = 200) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                this.triggerAnimation(element, animationType);
            }, index * staggerDelay);
        });
    }
}

// Initialize animation manager
const animationManager = new AnimationManager();

function initAnimations() {
    // Animate hero section immediately
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');

    if (heroTitle) {
        setTimeout(() => animationManager.triggerAnimation(heroTitle, 'zoomIn', '1.5s'), 100);
    }
    if (heroSubtitle) {
        setTimeout(() => animationManager.triggerAnimation(heroSubtitle, 'fadeIn', '1.5s'), 500);
    }
    if (heroDescription) {
        setTimeout(() => animationManager.triggerAnimation(heroDescription, 'fadeIn', '1.5s'), 800);
    }
    if (heroButtons) {
        setTimeout(() => animationManager.triggerAnimation(heroButtons, 'slideInUp', '1s'), 1200);
    }

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll([
        '.section-header',
        '.about-text',
        '.event-card',
        '.team-card',
        '.benefit-item',
        '.stat',
        '.form-container',
        '.event-detail'
    ].join(','));

    animationManager.observeElements(animatedElements);

    // Special staggered animations
    const eventCards = document.querySelectorAll('.event-card');
    const teamCards = document.querySelectorAll('.team-card');
    const benefitItems = document.querySelectorAll('.benefit-item');
    const stats = document.querySelectorAll('.stat');

    // Add data attributes for specific animations
    eventCards.forEach((card, index) => {
        card.dataset.animation = index % 2 === 0 ? 'slideInLeft' : 'slideInRight';
        card.dataset.duration = '0.8s';
    });

    teamCards.forEach(card => {
        card.dataset.animation = 'flipInX';
        card.dataset.duration = '1s';
    });

    benefitItems.forEach(item => {
        item.dataset.animation = 'bounceIn';
        item.dataset.duration = '0.8s';
    });

    stats.forEach(stat => {
        stat.dataset.animation = 'zoomIn';
        stat.dataset.duration = '1s';
    });

    // Navbar scroll animation
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Button hover animations
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('animate__animated', 'animate__pulse');
        });
        
        button.addEventListener('mouseleave', () => {
            setTimeout(() => {
                button.classList.remove('animate__animated', 'animate__pulse');
            }, 300);
        });
    });

    // Form input animations
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
}

// Utility function for manual animation triggering
window.animateElement = function(elementSelector, animationType = 'fadeIn', duration = '1s') {
    const element = document.querySelector(elementSelector);
    if (element) {
        animationManager.triggerAnimation(element, animationType, duration);
    }
};

// Export for global access
window.AnimationManager = AnimationManager;
window.animationManager = animationManager;