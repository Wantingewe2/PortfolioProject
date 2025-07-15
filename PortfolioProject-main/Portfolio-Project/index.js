// Main initialization and setup
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    createStars();
    initializeNavigation();
    console.log('Space Portfolio initialized');
});

// Generate random stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numStars = 100;
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

// Initialize navigation
function initializeNavigation() {
    document.querySelectorAll('.cta-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Button clicked:', btn.textContent);
            // Add your navigation logic here
        });
    });
}
// Mouse parallax effect
document.addEventListener('mousemove', (e) => {
    const planets = document.querySelectorAll('.planet');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    planets.forEach((planet, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 50;
        const y = (mouseY - 0.5) * speed * 50;
        
        planet.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Smooth scrolling utility
function smoothScrollTo(element, duration = 1000) {
    const targetPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}
// Sparkle effects and interactions
document.addEventListener('click', (e) => {
    createSparkle(e.clientX, e.clientY);
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '6px';
    sparkle.style.height = '6px';
    sparkle.style.background = 'radial-gradient(circle, #00d4ff, transparent)';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    sparkle.style.animation = 'sparkleAnim 0.6s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 600);
}

// Particle system for additional effects
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.init();
    }

    init() {
        // Initialize particle system if needed
        console.log('Particle system ready');
    }

    createParticle(x, y, options = {}) {
        // Create particle at position with options
        const particle = {
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            life: 1,
            decay: 0.02,
            ...options
        };
        this.particles.push(particle);
    }

    update() {
        this.particles = this.particles.filter(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life -= particle.decay;
            return particle.life > 0;
        });
    }
}

// Initialize particle system
const particleSystem = new ParticleSystem();
