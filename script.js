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
(function () {
  const logo = document.querySelector(".intro .logo");
  const introPage = document.querySelector(".intro");
  logo.classList.add("show");
  document.body.classList.add("remove-scrolling");

  setTimeout(() => {
    document.body.classList.remove("remove-scrolling");
    introPage.style.opacity = "0";
  }, 5500);

  setTimeout(() => {
    document.querySelector(".intro").remove();
  }, 7000);
})();
