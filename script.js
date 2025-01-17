// Select necessary elements
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu');
const overlay = document.createElement('div');

// Create an overlay element dynamically
overlay.id = 'overlay';
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
overlay.style.zIndex = '900';
overlay.style.display = 'none';
document.body.appendChild(overlay);

// Function to open menu and show overlay
menuToggle.addEventListener('click', () => {
    menu.style.display = 'flex';
    overlay.style.display = 'block';
});

// Function to close menu and hide overlay
closeMenu.addEventListener('click', () => {
    menu.style.display = 'none';
    overlay.style.display = 'none';
});

// Allow clicking the overlay to close the menu
overlay.addEventListener('click', () => {
    menu.style.display = 'none';
    overlay.style.display = 'none';
});

menuToggle.addEventListener('click', () => {
    menu.style.display = 'flex';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
});

// Function to close menu and unblock main page
closeMenu.addEventListener('click', () => {
    menu.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = ''; // Restore scrolling
});

// Language Toggle
const languageToggle = document.getElementById('language-toggle');
languageToggle.addEventListener('click', () => {
    if (languageToggle.textContent === 'తెలుగు') {
        window.location.href = "telugu.html";
        languageToggle.textContent = 'English';
    } else {
        window.location.href = "index.html";
        languageToggle.textContent = 'Telugu';
    }
});


// Select all slides
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

// Pop-up functionality
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup img');
const popupClose = document.querySelector('.popup-close');

// Show pop-up on image click
slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        popup.style.display = 'flex';
        popupImage.src = slide.src;
    });
});

// Close pop-up
popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
    popupImage.style.transform = 'scale(1)'; // Reset zoom
});

// Zoom functionality
let zoomLevel = 1;
popupImage.addEventListener('wheel', (e) => {
    e.preventDefault();
    zoomLevel += e.deltaY * -0.01; // Adjust zoom factor
    zoomLevel = Math.min(Math.max(1, zoomLevel), 3); // Limit zoom range
    popupImage.style.transform = `scale(${zoomLevel})`;
});


(function($) { "use strict";

    $(document).ready(function(){"use strict";
    
            //Scroll back to top
    
            var progressPath = document.querySelector('.progress-wrap path');
            var pathLength = progressPath.getTotalLength();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
            progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
            var updateProgress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength / height);
                progressPath.style.strokeDashoffset = progress;
            }
            updateProgress();
            $(window).scroll(updateProgress);
            var offset = 50;
            var duration = 550;
            jQuery(window).on('scroll', function() {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery('.progress-wrap').addClass('active-progress');
                } else {
                    jQuery('.progress-wrap').removeClass('active-progress');
                }
            });
            jQuery('.progress-wrap').on('click', function(event) {
                event.preventDefault();
                jQuery('html, body').animate({scrollTop: 0}, duration);
                return false;
            })
    
    
        });
    
    })(jQuery);
