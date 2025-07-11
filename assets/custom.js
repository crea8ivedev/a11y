// document.addEventListener("DOMContentLoaded", function () {
//   new Swiper("#featured-gallery", {
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     slidesPerView: 1,
//     spaceBetween: 10,
//   });
// });

document
  .querySelector("details.search-popup")
  .addEventListener("toggle", function () {
    if (this.open) {
      this.classList.add("active");
    } else {
      this.classList.remove("active");
    }
  });
function scrollDownByBanner() {
  const banner = document.querySelector(
    ".custom-slider-wrapper, .banner__media",
  );
  if (banner) {
    window.scrollBy({
      top: banner.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.querySelector(".back-to-top-button");
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// FAQ PDP
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".pdp-accordion-item");

  items.forEach((item) => {
    const header = item.querySelector(".pdp-accordion-header");

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      items.forEach((i) => i.classList.remove("active"));

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});

//Sticy Add to cart

document.addEventListener("DOMContentLoaded", function () {
  const drawer = document.getElementById("sticky-cart-drawer");
  const toggleBtn = document.getElementById("toggle-cart-drawer");
  const variantButtons = document.querySelectorAll(".variant-button");
  const variantInput = document.getElementById("variant-id-input");

  // Set first variant as active by default
  if (variantButtons.length > 0) {
    variantButtons[0].classList.add("active");
  }

  // Toggle drawer function
  function toggleDrawer() {
    const isCollapsed = drawer.classList.contains("collapsed");
    drawer.classList.toggle("collapsed");
    toggleBtn.textContent = isCollapsed ? "–" : "+";
    toggleBtn.setAttribute("aria-expanded", isCollapsed ? "true" : "false");
  }

  // Toggle when clicking button
  toggleBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDrawer();
  });

  // Toggle when clicking header (optional)
  document
    .querySelector(".sticky-cart-header")
    .addEventListener("click", function () {
      toggleDrawer();
    });

  // Variant selection
  variantButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation();
      variantButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      variantInput.value = this.dataset.variantId;
    });
  });

  // --- Intersection Observer to show/hide drawer based on #ctm-product-info visibility ---
  const productInfo = document.querySelector("#ctm-product-info");
  if (productInfo && drawer) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            drawer.classList.add("hidden"); // Hide when in view
          } else {
            drawer.classList.remove("hidden"); // Show when out of view
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(productInfo);
  }

  // const right = document.querySelector('.ctm-product-page .product .product__media-wrapper .product__column-sticky .slider-mobile-gutter');
  // const left = document.querySelector('.ctm-product-page .product .product__media-wrapper .product__column-sticky .thumbnail-slider');

  // function matchHeights() {
  //   left.style.maxHeight = right.offsetHeight + 'px';
  // }

  // window.addEventListener('load', matchHeights);
  // window.addEventListener('resize', matchHeights);
});
