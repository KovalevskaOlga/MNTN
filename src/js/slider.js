const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 800, // Плавность анимации (по умолчанию 300)
  effect: 'fade', // или 'slide', 'cube', 'coverflow'
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 1400,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});