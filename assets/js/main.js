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
const publicationList = document.querySelector("[data-publication-list]");
const scrollCue = document.querySelector(".scroll-cue");

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const actionIconClass = {
  paper: "link-icon",
  pdf: "pdf-icon",
  arxiv: "arxiv-icon",
  github: "github-icon",
};

const renderPublicationCard = (publication) => {
  const visual = publication.image
    ? `<img class="pub-abstract" src="${escapeHtml(publication.image)}" alt="${escapeHtml(publication.imageAlt || publication.title)}">`
    : `<span class="pub-icon ${escapeHtml(publication.icon || "chip")}"></span>`;

  const links = (publication.links || [])
    .map((link) => {
      const iconClass = actionIconClass[link.type] || "link-icon";
      return `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener"><span class="action-icon ${iconClass}"></span>${escapeHtml(link.label)}</a>`;
    })
    .join("");

  const details = publication.detailsHtml
    ? `<details class="pub-details">
        <summary>Expand</summary>
        <div class="pub-details-body">${publication.detailsHtml}</div>
      </details>`
    : "";

  return `
    <article class="publication-card" data-topic="${escapeHtml(publication.topic)}">
      <div class="pub-visual">
        <span class="pub-meta">${escapeHtml(publication.venue)}</span>
        ${visual}
      </div>
      <div class="pub-body">
        <h2>${escapeHtml(publication.title)}</h2>
        <div class="pub-summary-row">
          <p>${escapeHtml(publication.summary)}</p>
          ${details}
        </div>
        <div class="pub-actions">${links}</div>
      </div>
    </article>`;
};

if (publicationList && Array.isArray(window.PUBLICATIONS)) {
  publicationList.innerHTML = window.PUBLICATIONS.map(renderPublicationCard).join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const publicationCards = document.querySelectorAll(".publication-card");
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
