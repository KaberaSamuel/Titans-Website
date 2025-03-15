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
