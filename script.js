const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// Create a mobile menu toggle button
const toggleBtn = document.createElement('button');
toggleBtn.classList.add('nav-toggle');
toggleBtn.innerHTML = '☰';
navbar.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Close menu on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const heroHeading = document.querySelector('.hero h2');
if (heroHeading) {
    const phrases = ['Frontend Developer', 'Tech Blogger', 'Web Designer'];
    let i = 0;
    let j = 0;
    let currentPhrase = [];
    let isDeleting = false;

    function type() {
        if (i >= phrases.length) i = 0;
        const fullPhrase = phrases[i];

        if (isDeleting) {
            currentPhrase = fullPhrase.substring(0, currentPhrase.length - 1);
        } else {
            currentPhrase = fullPhrase.substring(0, currentPhrase.length + 1);
        }

        heroHeading.textContent = currentPhrase;

        let delay = isDeleting ? 50 : 150;

        if (!isDeleting && currentPhrase === fullPhrase) {
            delay = 2000;
            isDeleting = true;
        } else if (isDeleting && currentPhrase === '') {
            isDeleting = false;
            i++;
            delay = 500;
        }

        setTimeout(type, delay);
    }

    type();
}