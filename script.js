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

// horizontal scrolling
