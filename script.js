const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a'); // Select all links inside the navbar

// Toggle the visibility of the navbar when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Hide the navbar after clicking any of its links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active'); // Remove 'active' class to hide the navbar
    });
});


// **************************************************
// <!-- Custom JavaScript for Swiper Configuration -->

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5, /* Show 3 slides with partial visibility (center + 2 halves) */
    spaceBetween: 30, /* Add space between the slides */
    centeredSlides: true, /* Center the middle image */
    loop: true, /* Infinite looping */
    autoplay: {
        delay: 500, /* Change image every 1 second */
        disableOnInteraction: false, /* Autoplay continues even after user interaction */
    },
    speed: 900, /* Transition speed in milliseconds (0.6 seconds) */
    grabCursor: true, /* Enable grab cursor for better UX */
    effect: 'slide', /* Smooth slide transition */
    easing: 'ease-in-out', /* Smooth easing function for transitions */
});
// ************************************************

// Typing Text code
const typed = new Typed('.mulitple-text', {
    strings: [ 'Weight Gain', 'With Yoga', 'With Nutrients', 'Fat Lose', 'Weight Lifting', 'Running'],
    typeSpeed: 40,
    backSpeed: 40, 
    backDelay: 1000,
    loop: true,
});
// ******************************************

// Trainers Section
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

// ***************************************************
// review section
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop : true,
  grabCursor: true,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
  },
});
