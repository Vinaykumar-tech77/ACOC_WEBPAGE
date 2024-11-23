// Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', () => {
    menu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
    menu.style.display = 'none';
});

// Language Toggle
const languageToggle = document.getElementById('language-toggle');
languageToggle.addEventListener('click', () => {
    if (languageToggle.textContent === 'Telugu') {
        window.location.href = "telugu.html";
        languageToggle.textContent = 'English';
        alert('Switched to Telugu');
    } else {
        window.location.href = "index.html";
        languageToggle.textContent = 'Telugu';
        alert('Switched to English');
    }
});

const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

// Function to show the current slide
function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === n) slide.classList.add('active');
    });
}

// Automatic slide transition
function autoSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

// Previous slide
prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

// Next slide
next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

// Start auto-sliding every 4 seconds
let slideInterval = setInterval(autoSlide, 4000);

// Pause auto-sliding when user interacts
document.querySelector('.controls').addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

document.querySelector('.controls').addEventListener('mouseleave', () => {
    slideInterval = setInterval(autoSlide, 4000);
});


document.getElementById('query-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const query = event.target.query.value;
  
    if (!query.trim()) {
      alert('Please enter your query.');
      return;
    }
  
    // Simulate sending the query to an email
    alert('Your query has been sent! Thank you.');
    event.target.reset();
  });
  