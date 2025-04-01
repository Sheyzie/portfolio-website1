export const swiper = new Swiper(".card-wrapper", {
  loop: true,

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
      spaceBetween: 50,
      centeredSlides: true,
    },
    768: {
      slidesPerview: 2,
      slidesPerGroup: 2,
      spaceBetween: -250,
    },
    1020: {
      slidesPerview: 2,
      slidesPerGroup: 2,
      spaceBetween: -300,
    },
    1058: {
      slidesPerview: 3,
      slidesPerGroup: 3,
      spaceBetween: -500,
    },
    1200: {
      slidesPerview: 3,
      slidesPerGroup: 3,
      spaceBetween: -600,
    },
  },
});
