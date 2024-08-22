const imageSources = [
    "https://github.com/pavan-forlooper/test-website/raw/main/image1.png",
    "https://github.com/pavan-forlooper/test-website/raw/main/image2.png",
    "https://github.com/pavan-forlooper/test-website/raw/main/image3.png"
  ];

  function preloadImages() {
    imageSources.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  // Call preloadImages function to ensure images are loaded
  preloadImages();

  const images = document.querySelectorAll('.image');
  let currentIndex = 0;

  function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }

  setInterval(showNextImage, 5000);
  
  
document.addEventListener("DOMContentLoaded", function() {
const sections = document.querySelectorAll(".animated-section");

function checkScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkScroll);
checkScroll();
});



function scrollToTop() {
window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scroll animation
});
}

// Get a reference to the Kids section
const kidsSection = document.getElementById("kids-section");

// Show/hide the scroll-to-top button based on scroll position
window.addEventListener("scroll", function() {
const scrollButton = document.querySelector(".scroll-to-top-button");

// Calculate the position of the Kids section relative to the viewport
const kidsSectionRect = kidsSection.getBoundingClientRect();

// Define a trigger point based on the Kids section's top position
const triggerPoint = kidsSectionRect.top + window.scrollY;

if (window.scrollY > triggerPoint) {
    // Show the button when the user scrolls down to the Kids section
    scrollButton.classList.add("active");
} else {
    // Hide the button when the user is above the Kids section
    scrollButton.classList.remove("active");
}
});



let menuVisible = false;
const menuIcon = document.getElementById('menuIcon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
  menuVisible = !menuVisible;
  menu.style.display = menuVisible ? 'block' : 'none';
  menuIcon.querySelector('i').classList.toggle('fa-bars'); // Change back to menu icon
  menuIcon.querySelector('i').classList.toggle('fa-times');
}


// Define the functions to handle menu item clicks (replace with actual URLs)
function goToHome() {
  window.location.href = 'home.html';
}

function goToGallery() {
  window.location.href = 'gallery.html';
}

function goToResources() {
  window.location.href = 'resources.html';
}

// JavaScript for scroll-to-top button (if needed)
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
  let CurrentIndex = 0;
const Images = document.querySelectorAll('.image');

function showImage(index) {
// Hide all images
images.forEach(image => image.classList.remove('active'));
// Show the image at the specified index
images[index].classList.add('active');
}

function prevImage() {
currentIndex = (currentIndex - 1 + images.length) % images.length;
showImage(currentIndex);
}

function nextImage() {
currentIndex = (currentIndex + 1) % images.length;
showImage(currentIndex);
}

// Start auto-moving images
setInterval(nextImage, 5000);

function sendQuery() {
var query = document.getElementById('query').value;
if (query.trim() !== '') {
  var mailtoLink = 'mailto:vinaykumarnew97@gmail.com' +
                  '?subject=' + encodeURIComponent('Query from Website') +
                  '&body=' + encodeURIComponent(query);
  window.location.href = mailtoLink;
  document.getElementById('query').value = '';
}
}

document.getElementById('query').addEventListener('input', function() {
var message = document.getElementById('message');
if (this.value.trim() !== '') {
  message.style.display = 'none';
} else {
  message.style.display = 'block';
}
});

function navigateToPage() {
  var selectedValue = document.getElementById('language').value;
  if (selectedValue) {
      window.location.href = selectedValue;
  }
}





