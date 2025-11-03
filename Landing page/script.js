// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Remove active class from all nav links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to clicked link
        this.classList.add('active');
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for feature cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Search bar functionality
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

if (searchBtn) {
    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            console.log('Searching for:', query);
            alert('Searching for: ' + query);
            searchInput.value = '';
        }
    });
}

if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query) {
                console.log('Searching for:', query);
                alert('Searching for: ' + query);
                this.value = '';
            }
        }
    });
}

// Hero card slide indicators
const slideDots = document.querySelectorAll('.slide-dot');
const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

slideDots.forEach(dot => {
    dot.addEventListener('click', function() {
        const slideIndex = parseInt(this.getAttribute('data-slide'));
        currentSlide = slideIndex;
        updateSlides();
    });
});

function updateSlides() {
    // Update slide visibility
    heroSlides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('hero-slide-active');
        } else {
            slide.classList.remove('hero-slide-active');
        }
    });

    // Update dot indicators
    slideDots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
        
    });
}

// Auto-advance slides every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    updateSlides();
}, 5000);


// Hamburger Menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');

     if (navbar.classList.contains("menu-open")) {
      navLinks.appendChild(downloadBtn); // move inside
    } else {
      navbar.querySelector(".container").appendChild(downloadBtn); // move back outside
    }
});