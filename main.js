// --- Slider ---
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
  centeredSlides: true,
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
  },
});

// --- Hamburger menu ---
const nav = document.getElementById("primary-nav"),
  btn = document.getElementById("hamburger");
let menuIsHidden = true;

btn.addEventListener("click", () => {
  if (menuIsHidden) {
    nav.hidden = false;
    btn.style.position = "fixed";
    btn.setAttribute("src", "assets/icon-close.svg");
    menuIsHidden = false;
  } else {
    nav.hidden = true;
    btn.style.position = "initial";
    btn.setAttribute("src", "assets/icon-hamburger.svg");
    menuIsHidden = true;
  }
});


