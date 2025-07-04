// Initialize EmailJS (REQUIRED)
 // Replace with your EmailJS public key

// /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
const menuicon=document.getElementById('menu-icon');
const navlinks=document.getElementById('nav-links');
menuicon.addEventListener('click',()=>{
    navlinks.classList.toggle('show');
});
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_1hzg0', 'template_251ah6', formData) // Replace with your actual IDs
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Thank you for your message! I will get back to you soon.');
            e.target.reset(); // Clear the form
        }, function (error) {
            console.log('FAILED...', error);
            alert('Oops! Something went wrong.');
        });
});

// Add active class to nav items when scrolling
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
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

