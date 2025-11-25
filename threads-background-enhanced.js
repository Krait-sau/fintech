// static/js/threads-background-enhanced.js
class ThreadsBackground {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);
        
        this.particles = [];
        this.mouse = { x: 0, y: 0 };
        this.frameCount = 0;
        
        this.init();
    }
    
    init() {
        this.resize();
        this.createParticles();
        this.bindEvents();
        this.animate();
    }
    
    resize() {
        this.width = this.canvas.width = this.container.offsetWidth;
        this.height = this.canvas.height = this.container.offsetHeight;
    }
    
    createParticles() {
        const particleCount = Math.min(80, Math.floor(this.width * this.height / 8000));
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.3 + 0.1
            });
        }
    }
    
    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        
        this.container.addEventListener('mousemove', (e) => {
            const rect = this.container.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
        });
    }
    
    animate() {
        this.frameCount++;
        this.ctx.clearRect(0, 0, this.width, this.height);
        
        // Draw gradient background
        const gradient = this.ctx.createLinearGradient(0, 0, this.width, this.height);
        gradient.addColorStop(0, 'rgba(102, 126, 234, 0.1)');
        gradient.addColorStop(1, 'rgba(118, 75, 162, 0.1)');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        // Update and draw particles
        this.particles.forEach(particle => {
            // Simple wave motion
            particle.x += particle.speedX + Math.sin(this.frameCount * 0.02) * 0.2;
            particle.y += particle.speedY + Math.cos(this.frameCount * 0.02) * 0.2;
            
            // Wrap around edges
            if (particle.x < -10) particle.x = this.width + 10;
            if (particle.x > this.width + 10) particle.x = -10;
            if (particle.y < -10) particle.y = this.height + 10;
            if (particle.y > this.height + 10) particle.y = -10;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(102, 126, 234, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}