// ============================================
// Smooth Scrolling & Navigation
// ============================================
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

// ============================================
// Mobile Menu Toggle
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================================
// Parallax Effects (delayed to allow animations to complete)
// ============================================
let animationsComplete = false;

// Wait for animations to complete (1.5s for slide animations)
setTimeout(() => {
    animationsComplete = true;
}, 2000);

window.addEventListener('scroll', () => {
    // Only apply parallax after animations complete
    if (!animationsComplete) return;
    
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        const heroLeft = heroSection.querySelector('.hero-left');
        const heroRight = heroSection.querySelector('.hero-right');
        const heroCenter = heroSection.querySelector('.hero-center');
        
        if (heroLeft) {
            // Use transform with both X and Y to preserve slide position
            // Only apply if animation is complete (check computed style)
            const leftTransform = window.getComputedStyle(heroLeft).transform;
            if (leftTransform && leftTransform !== 'none') {
                heroLeft.style.transform = `translateX(0) translateY(${scrolled * 0.3}px)`;
            }
        }
        if (heroRight) {
            const rightTransform = window.getComputedStyle(heroRight).transform;
            if (rightTransform && rightTransform !== 'none') {
                heroRight.style.transform = `translateX(0) translateY(${scrolled * 0.3}px)`;
            }
        }
        if (heroCenter) {
            heroCenter.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    }
});

// ============================================
// Intersection Observer for Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Observe achievement cards
document.querySelectorAll('.achievement-card').forEach(card => {
    observer.observe(card);
});

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// ============================================
// Skill Bar Animations
// ============================================
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillProgress = entry.target;
            const width = skillProgress.getAttribute('data-width');
            skillProgress.style.width = width + '%';
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-progress').forEach(progress => {
    skillObserver.observe(progress);
});

// ============================================
// Robot Animation Enhancement
// ============================================
const robotImage = document.querySelector('.robot-image');
if (robotImage) {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
    });

    function animateRobot() {
        currentX += (mouseX - currentX) * 0.05;
        currentY += (mouseY - currentY) * 0.05;
        
        if (robotImage) {
            robotImage.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentX * 0.1}deg)`;
        }
        
        requestAnimationFrame(animateRobot);
    }
    
    animateRobot();
}

// ============================================
// Particle Effects
// ============================================
function createParticles() {
    const particleField = document.querySelector('.particle-field');
    if (!particleField) return;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: ${Math.random() > 0.5 ? 'rgba(240, 240, 240, 0.6)' : 'rgba(176, 176, 176, 0.6)'};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            pointer-events: none;
            animation: particleFloat ${Math.random() * 3 + 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        particleField.appendChild(particle);
    }
}

// Add particle animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
        }
        50% {
            transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) scale(1.5);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

createParticles();

// ============================================
// Embedding Particles Animation
// ============================================
function createEmbeddingParticles() {
    const embeddingField = document.querySelector('.embedding-particles');
    if (!embeddingField) return;

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'embedding-particle';
        const isLight = Math.random() > 0.5;
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 4}px;
            height: ${Math.random() * 6 + 4}px;
            background: ${isLight ? 'rgba(240, 240, 240, 0.7)' : 'rgba(176, 176, 176, 0.7)'};
            box-shadow: 0 0 10px ${isLight ? 'rgba(240, 240, 240, 0.5)' : 'rgba(176, 176, 176, 0.5)'};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            pointer-events: none;
            animation: embeddingFloat ${Math.random() * 4 + 3}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        embeddingField.appendChild(particle);
    }
}

const embeddingStyle = document.createElement('style');
embeddingStyle.textContent = `
    @keyframes embeddingFloat {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.7;
        }
        50% {
            transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px) scale(1.8);
            opacity: 1;
        }
    }
`;
document.head.appendChild(embeddingStyle);

createEmbeddingParticles();

// ============================================
// Form Handling
// ============================================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// ============================================
// Navbar Scroll Effect
// ============================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(51, 51, 51, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(51, 51, 51, 0.9)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// Active Navigation Link
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// Glitch Effect on Hero
// ============================================
const glitchEffect = document.querySelector('.glitch-effect');
if (glitchEffect) {
    setInterval(() => {
        glitchEffect.style.animation = 'none';
        setTimeout(() => {
            glitchEffect.style.animation = 'glitch 0.3s infinite';
        }, 10);
    }, 5000);
}

// ============================================
// Holographic Shimmer Effect
// ============================================
const shimmerElements = document.querySelectorAll('.holographic-shimmer');
shimmerElements.forEach(element => {
    setInterval(() => {
        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = 'shimmer 3s ease-in-out infinite';
        }, 10);
    }, 3000);
});

// ============================================
// Icon Hover Effects
// ============================================
const aiIcons = document.querySelectorAll('.ai-icons > div');
aiIcons.forEach((icon, index) => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2) rotate(5deg)';
        icon.style.boxShadow = '0 0 20px rgba(240, 240, 240, 0.5)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1) rotate(0deg)';
        icon.style.boxShadow = '0 0 5px rgba(176, 176, 176, 0.2)';
    });
});

// ============================================
// Typing Effect for Hero Subtitle (Optional)
// ============================================
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let index = 0;
    
    function typeText() {
        if (index < text.length) {
            heroSubtitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 100);
        }
    }
    
    // Start typing effect after a delay
    setTimeout(typeText, 1000);
}

// ============================================
// Cursor Trail Effect (Optional Enhancement)
// ============================================
let cursorTrail = [];
const maxTrailLength = 10;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    if (cursorTrail.length > maxTrailLength) {
        cursorTrail.shift();
    }
    
    // Remove old trail points
    cursorTrail = cursorTrail.filter(point => Date.now() - point.time < 500);
});

// ============================================
// Performance Optimization
// ============================================
let ticking = false;

function updateAnimations() {
    // All animation updates go here
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}

// ============================================
// Role Slider Animation
// ============================================
let currentRoleIndex = 0;
let roleItems = [];
let roleInterval;

function showRole(index) {
    if (roleItems.length === 0) return;
    
    roleItems.forEach((item, i) => {
        item.classList.remove('active', 'prev', 'next');
        
        if (i === index) {
            item.classList.add('active');
        } else if (i < index) {
            item.classList.add('prev');
        } else {
            item.classList.add('next');
        }
    });
}

function nextRole() {
    if (roleItems.length === 0) return;
    currentRoleIndex = (currentRoleIndex + 1) % roleItems.length;
    showRole(currentRoleIndex);
}

function goToRole(index) {
    if (roleItems.length === 0) return;
    currentRoleIndex = index;
    showRole(currentRoleIndex);
    // Reset auto-slide timer
    stopRoleSlider();
    startRoleSlider();
}

function startRoleSlider() {
    roleItems = document.querySelectorAll('.role-item');
    if (roleItems.length === 0) return;
    
    // Initial show
    showRole(0);
    
    // Auto-slide every 4 seconds
    roleInterval = setInterval(() => {
        nextRole();
    }, 4000);
}

function stopRoleSlider() {
    if (roleInterval) {
        clearInterval(roleInterval);
        roleInterval = null;
    }
}

// Initialize role slider when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const roleSlider = document.querySelector('.role-slider');
    if (roleSlider) {
        // Pause on hover
        roleSlider.addEventListener('mouseenter', stopRoleSlider);
        roleSlider.addEventListener('mouseleave', startRoleSlider);
        
        // Click to switch roles
        roleItems = document.querySelectorAll('.role-item');
        roleItems.forEach((item, index) => {
            item.style.cursor = 'pointer';
            item.addEventListener('click', () => {
                goToRole(index);
            });
        });
    }
});

// ============================================
// Initialize on Load
// ============================================
window.addEventListener('load', () => {
    // Add fade-in animation to body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Start role slider
    startRoleSlider();
    
    // Initialize skill bars
    document.querySelectorAll('.skill-progress').forEach(progress => {
        progress.style.width = '0%';
    });
});

// ============================================
// Console Easter Egg
// ============================================
console.log('%c🚀 Welcome to Alan Sabu John\'s Portfolio', 'color: #F0F0F0; font-size: 20px; font-weight: bold;');
console.log('%cHuman Intelligence × Artificial Intelligence', 'color: #B0B0B0; font-size: 14px;');
console.log('%cBuilt with cutting-edge AI and data analytics expertise', 'color: #707070; font-size: 12px;');

