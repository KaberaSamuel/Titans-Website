// link tab synchronization
(function () {
  const sections = document.querySelectorAll("body > section");
  const viewportMargin = window.innerHeight * 0.5;

  sectionsObserver = new IntersectionObserver(intersectionCallback, {
    threshold: 0,
    rootMargin: `-${viewportMargin}px 0px -${viewportMargin}px 0px`,
  });

  function intersectionCallback(entries) {
    entries.forEach((entry) => {
      const queryString = `a[href="#${entry.target.id}"]`;
      const respectiveAnchor = document.querySelector(queryString);

      if (entry.isIntersecting) {
        respectiveAnchor.classList.add("active");
      } else {
        respectiveAnchor.classList.remove("active");
      }
    });
  }

  sections.forEach((section) => {
    sectionsObserver.observe(section);
  });
})();

// Learning Timeline Functionalities
(function () {
  const cards = document.querySelectorAll("#learning-timeline .card");

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("button")) {
        card.classList.toggle("flipped");
      }
    });
  });
})();

// footer functionalities
(function () {
  const footer = document.querySelector("footer");
  const navbar = document.querySelector("nav");

  footerObserver = new IntersectionObserver(intersectionCallback, {
    threshold: 0.2,
  });

  function intersectionCallback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navbar.style.opacity = 0;
      } else {
        navbar.style.opacity = 1;
      }
    });
  }

  footerObserver.observe(footer);
})();

// page intro animation
// (function () {
//   const logo = document.querySelector(".intro .logo");
//   const introPage = document.querySelector(".intro");
//   logo.classList.add("show");
//   document.body.classList.add("remove-scrolling");

//   setTimeout(() => {
//     document.body.classList.remove("remove-scrolling");
//     introPage.style.opacity = "0";
//   }, 5500);

//   setTimeout(() => {
//     document.querySelector(".intro").remove();
//   }, 7000);
// })();

// scroll into view animation
// (function () {
//   ScrollReveal({
//     reset: true,
//     distance: "70px",
//     duration: 2500,
//     delay: 100,
//   });

//   // programs page
//   ScrollReveal().reveal("#programs .title", {
//     origin: "left",
//     delay: 100,
//   });

//   ScrollReveal().reveal("#programs .program .right", {
//     origin: "right",
//     delay: 200,
//   });

//   ScrollReveal().reveal("#programs .program .left", {
//     origin: "left",
//     delay: 300,
//   });

//   ScrollReveal().reveal("#programs .program .image", {
//     origin: "bottom",
//     delay: 300,
//   });

//   ScrollReveal().reveal("#programs > div >:nth-child(2) .image", {
//     origin: "top",
//     delay: 300,
//   });

//   // learning timeline page
//   ScrollReveal().reveal("#learning-timeline .left .step", {
//     origin: "left",
//     delay: 100,
//     interval: 300,
//   });

//   ScrollReveal().reveal("#learning-timeline .right .step", {
//     origin: "right",
//     delay: 400,
//     interval: 300,
//   });

//   // team page
//   ScrollReveal().reveal("#meet-team .background p", {
//     origin: "bottom",
//     delay: 100,
//   });

//   ScrollReveal().reveal("#meet-team .up", {
//     origin: "top",
//     delay: 200,
//   });

//   ScrollReveal().reveal("#meet-team .bottom", {
//     origin: "bottom",
//     delay: 100,
//   });

//   ScrollReveal().reveal("#meet-team .left", {
//     origin: "left",
//     delay: 100,
//   });

//   ScrollReveal().reveal("#meet-team .right", {
//     origin: "right",
//     delay: 300,
//   });

//   // general bottom
//   // ScrollReveal().reveal("#welcome h1, .side-note p", {
//   //   origin: "bottom",
//   // });
// })();

// Challenges Page
(function () {
  const swiper = new Swiper(".swiper", {
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const openingAnchors = document.querySelectorAll("#challenegs a");
  const closingButton = document.querySelector("#carousel-challenges #close i");
  const carousel = document.querySelector("#carousel-challenges");

  closingButton.addEventListener("click", () => {
    carousel.classList.add("hidden");
  });

  openingAnchors.forEach((icon) => {
    icon.addEventListener("click", () => {
      carousel.classList.remove("hidden");
    });
  });
})();
