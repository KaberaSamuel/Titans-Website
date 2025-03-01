const navbar = document.querySelector("nav");
const home = document.querySelector("#home");
let lastYScroll = 0;

window.addEventListener("scroll", () => {
  const yScroll = window.scrollY;

  // down scroll
  if (yScroll > lastYScroll) {
    // checking if not in home page view
    if (yScroll > home.clientHeight) {
      navbar.style.backgroundColor = "rgba(0,0,0.8)";
      navbar.style.backdropFilter = "blur(5px)";
    }
    navbar.style.top = "-60px";

    // up scroll
  } else {
    // checking if in home page view
    if (yScroll < home.clientHeight) {
      navbar.style.backdropFilter = "blur(0px)";
      navbar.style.backgroundColor = "rgba(0,0,0,0)";
    }

    navbar.style.top = "0px";
  }

  lastYScroll = yScroll;
});

// swiper js
const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  slidesPerView: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
