// static/js/enhanced-animations.js
class EnhancedAnimations {
    constructor() {
        this.initScrollAnimations();
        this.initCounterAnimation();
    }
    
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('animate__animated');
                    
                    // Add specific animation based on element type
                    if (entry.target.classList.contains('enhanced-card')) {
                        entry.target.classList.add('animate__fadeInUp');
                    }
                }
            });
        }, observerOptions);
        
        // Observe all enhanced cards
        document.querySelectorAll('.enhanced-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    }
    
    initCounterAnimation() {
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounters();
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);
        
        const statsSection = document.querySelector('.stats');
        if (statsSection) {
            observer.observe(statsSection);
        }
    }
    
    animateCounters() {
        const counters = document.querySelectorAll('.stat h3');
        const speed = 200; // Lower is faster
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const count = parseInt(counter.innerText);
            
            if (count < target) {
                const increment = target / speed;
                const updateCount = () => {
                    const currentCount = parseInt(counter.innerText);
                    if (currentCount < target) {
                        counter.innerText = Math.ceil(currentCount + increment);
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            }
        });
    }
}

// Initialize enhanced animations
document.addEventListener('DOMContentLoaded', () => {
    new EnhancedAnimations();
});