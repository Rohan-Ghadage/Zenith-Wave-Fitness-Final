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

// ================== Calorie Calculator (Modal) ==================
(function () {
  const openBtn = document.getElementById('open-calorie');
  const overlay = document.getElementById('calorie-overlay');
  const closeBtn = document.getElementById('calorie-close');

  if (!openBtn || !overlay || !closeBtn) return;

  function openModal() {
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
  }

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  const form = document.getElementById('calorie-form');
  const genderEl = document.getElementById('cc-gender');
  const ageEl = document.getElementById('cc-age');
  const heightEl = document.getElementById('cc-height');
  const weightEl = document.getElementById('cc-weight');
  const activityEl = document.getElementById('cc-activity');
  const tdeeEl = document.getElementById('cc-tdee');
  const cutEl = document.getElementById('cc-cut');
  const bulkEl = document.getElementById('cc-bulk');
  const results = document.getElementById('cc-results');

  function clamp(n, min, max) { return Math.min(Math.max(n, min), max); }
  function parseNumber(inputEl) {
    const n = Number((inputEl.value || '').trim());
    return Number.isFinite(n) ? n : NaN;
  }
  function formatKcal(n) { return Math.round(n).toLocaleString(); }
  function calculateBmr(gender, age, heightCm, weightKg) {
    const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
    return gender === 'male' ? base + 5 : base - 161;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const gender = genderEl.value;
    let age = parseNumber(ageEl);
    let height = parseNumber(heightEl);
    let weight = parseNumber(weightEl);
    const activity = Number(activityEl.value);

    if (!Number.isFinite(age) || !Number.isFinite(height) || !Number.isFinite(weight) || !Number.isFinite(activity)) {
      results.classList.add('hidden');
      return;
    }

    age = clamp(age, 10, 100);
    height = clamp(height, 100, 250);
    weight = clamp(weight, 30, 300);

    const bmr = calculateBmr(gender, age, height, weight);
    const tdee = bmr * activity;
    const cut = tdee * 0.85;
    const bulk = tdee * 1.10;

    tdeeEl.textContent = formatKcal(tdee);
    cutEl.textContent = formatKcal(cut);
    bulkEl.textContent = formatKcal(bulk);

    results.classList.remove('hidden');
  });
})();
// ================== End Calorie Calculator (Modal) ==================