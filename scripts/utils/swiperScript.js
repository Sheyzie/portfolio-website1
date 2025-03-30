export const swiper = new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: -710,

  // pagination bullet
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerview: 1,
    },
    768: {
      slidesPerview: 2,
    },
    1024: {
      slidesPerview: 3,
    },
  },
});
