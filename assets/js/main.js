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
    ? `<button class="pub-image-button" type="button" data-full-image="${escapeHtml(publication.image)}" data-image-title="${escapeHtml(publication.title)}" aria-label="Expand graphical abstract for ${escapeHtml(publication.title)}">
        <img class="pub-abstract" src="${escapeHtml(publication.image)}" alt="${escapeHtml(publication.imageAlt || publication.title)}">
      </button>`
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

if (publicationList) {
  const lightbox = document.createElement("div");
  lightbox.className = "image-lightbox";
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <div class="image-lightbox-panel" role="dialog" aria-modal="true" aria-label="Expanded graphical abstract">
      <button class="image-lightbox-close" type="button" aria-label="Close expanded image">&times;</button>
      <img class="image-lightbox-img" alt="">
      <p class="image-lightbox-title"></p>
    </div>`;
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector(".image-lightbox-img");
  const lightboxTitle = lightbox.querySelector(".image-lightbox-title");
  const lightboxClose = lightbox.querySelector(".image-lightbox-close");
  const desktopMedia = window.matchMedia("(min-width: 701px)");

  const closeLightbox = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
  };

  publicationList.addEventListener("click", (event) => {
    const button = event.target.closest(".pub-image-button");
    if (!button || !desktopMedia.matches) return;
    lightboxImage.src = button.dataset.fullImage;
    lightboxImage.alt = button.querySelector("img")?.alt || "";
    lightboxTitle.textContent = button.dataset.imageTitle || "";
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    lightboxClose.focus();
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox || event.target === lightboxClose) {
      closeLightbox();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
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
