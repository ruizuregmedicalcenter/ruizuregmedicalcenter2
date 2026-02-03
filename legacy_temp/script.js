// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle (basic implementation)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
mobileMenuBtn.addEventListener('click', () => {
    alert('Menú móvil en desarrollo. Esta es una demostración de branding.');
});

// Form submission handling
const appointmentForm = document.querySelector('.appointment-form');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = appointmentForm.querySelector('button');
        const originalText = btn.innerText;

        btn.innerText = 'Enviando...';
        btn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            alert('¡Gracias! Hemos recibido tu solicitud. Nos pondremos en contacto pronto.');
            btn.innerText = originalText;
            btn.disabled = false;
            appointmentForm.reset();
        }, 1500);
    });
}

// Smooth revelation on scroll (Basic observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .about-content, .about-image').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

// Add a class to handle the animation in CSS or here
document.styleSheets[0].insertRule('.visible { opacity: 1 !important; transform: translateY(0) !important; }', 0);
