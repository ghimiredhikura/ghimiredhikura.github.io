const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("open");
  });
}

const filterButtons = document.querySelectorAll(".filter-button");
const publicationCards = document.querySelectorAll(".publication-card");
const scrollCue = document.querySelector(".scroll-cue");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    publicationCards.forEach((card) => {
      const visible = filter === "all" || card.dataset.topic === filter;
      card.hidden = !visible;
    });
  });
});

if (scrollCue) {
  const footer = document.querySelector(".site-footer");

  const updateScrollCue = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const nearBottom = pageHeight - scrollPosition < 320;
    scrollCue.classList.toggle("hidden", nearBottom);
  };

  if (footer && "IntersectionObserver" in window) {
    const footerObserver = new IntersectionObserver(
      (entries) => {
        const footerVisible = entries.some((entry) => entry.isIntersecting);
        scrollCue.classList.toggle("hidden", footerVisible);
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    footerObserver.observe(footer);
  };

  updateScrollCue();
  window.addEventListener("load", updateScrollCue);
  window.addEventListener("scroll", updateScrollCue, { passive: true });
  window.addEventListener("resize", updateScrollCue);
}
