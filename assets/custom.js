document.addEventListener('DOMContentLoaded', function () {
  new Swiper('#featured-gallery', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,
  });
});



function scrollDownByBanner() {
    const banner = document.querySelector('.custom-slider-wrapper');
    if (banner) {
      window.scrollBy({
        top: banner.offsetHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  } 


  document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.querySelector(".back-to-top-button");
    backToTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });


