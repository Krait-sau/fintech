// static/js/auto-typer.js
class AutoTyper {
    constructor(element, texts, options = {}) {
        this.element = element;
        this.texts = texts;
        this.options = {
            typeSpeed: 50,
            deleteSpeed: 30,
            pauseTime: 2000,
            loop: true,
            ...options
        };
        
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.isPaused = false;
        
        this.init();
    }
    
    init() {
        this.element.classList.add('auto-typer-cursor');
        this.type();
    }
    
    type() {
        const currentText = this.texts[this.currentTextIndex];
        
        if (this.isDeleting) {
            this.currentCharIndex--;
        } else {
            this.currentCharIndex++;
        }
        
        const displayText = currentText.substring(0, this.currentCharIndex);
        this.element.textContent = displayText;
        
        let typeSpeed = this.isDeleting ? this.options.deleteSpeed : this.options.typeSpeed;
        
        if (!this.isDeleting && this.currentCharIndex === currentText.length) {
            typeSpeed = this.options.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize auto-typer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const typerElement = document.getElementById('auto-typer');
    if (typerElement) {
        const texts = [
            "Bridging Finance and Technology",
            "Exploring Blockchain & AI",
            "Building the Future of FinTech",
            "Connecting Innovators",
            "Transforming Financial Systems"
        ];
        
        new AutoTyper(typerElement, texts, {
            typeSpeed: 60,
            deleteSpeed: 40,
            pauseTime: 1500
        });
    }
});