const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const isNepali = document.documentElement.lang === "ne";
const nepaliDigits = (value) => String(value).replace(/[0-9]/g, (digit) => "०१२३४५६७८९"[Number(digit)]);

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
const newsToggle = document.querySelector("[data-news-toggle]");
const newsList = document.querySelector("[data-news-list]");

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

const thumbnailSrc = (imagePath) => {
  const slash = imagePath.lastIndexOf("/");
  const dir = imagePath.slice(0, slash);
  const file = imagePath.slice(slash + 1).replace(/\.[^.]+$/, ".webp");
  return `${dir}/thumbs/${file}`;
};

const renderPublicationCard = (publication) => {
  const imagePrefix = isNepali ? "../" : "";
  const localizedTitle = isNepali
    ? window.PUBLICATION_TITLES_NE?.[publication.title] || publication.title
    : publication.title;
  const fullImage = publication.image ? escapeHtml(imagePrefix + publication.image) : "";
  const thumbImage = publication.image ? escapeHtml(imagePrefix + thumbnailSrc(publication.image)) : "";
  const imageAlt = escapeHtml(isNepali ? localizedTitle : publication.imageAlt || publication.title);
  const imageTitle = escapeHtml(localizedTitle);
  const summary = isNepali
    ? window.PUBLICATION_SUMMARIES_NE?.[publication.title] || publication.summary
    : publication.summary;
  const visual = publication.image
    ? `<button class="pub-image-button" type="button" data-full-image="${fullImage}" data-image-title="${imageTitle}" aria-label="${isNepali ? `चित्रात्मक सार ठूलो बनाएर हेर्नुहोस्: ${imageTitle}` : `Expand graphical abstract for ${imageTitle}`}">
        <picture>
          <source media="(max-width: 700px)" srcset="${fullImage}">
          <img class="pub-abstract" src="${thumbImage}" loading="lazy" decoding="async" alt="${imageAlt}">
        </picture>
      </button>`
    : `<span class="pub-icon ${escapeHtml(publication.icon || "chip")}"></span>`;

  const links = (publication.links || [])
    .map((link) => {
      const iconClass = actionIconClass[link.type] || "link-icon";
      const nepaliActionLabels = { Paper: "शोधपत्र", PDF: "पीडीएफ", Code: "स्रोत कोड" };
      const label = isNepali ? (nepaliActionLabels[link.label] || link.label) : link.label;
      return `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener"><span class="action-icon ${iconClass}"></span>${escapeHtml(label)}</a>`;
    })
    .join("");

  const details = publication.detailsHtml
    ? `<details class="pub-details">
        <summary>${isNepali ? "मूल विवरण (अङ्ग्रेजी)" : "Expand"}</summary>
        <div class="pub-details-body" lang="en">${isNepali ? '<p class="source-language-note" lang="ne">मूल विवरण अङ्ग्रेजीमा</p>' : ""}${publication.detailsHtml}</div>
      </details>`
    : "";

  return `
    <article class="publication-card" data-topic="${escapeHtml(publication.topic)}">
      <div class="pub-visual">
        <span class="pub-meta">${escapeHtml(publication.venue)}</span>
        ${visual}
      </div>
      <div class="pub-body">
        <h2>${escapeHtml(localizedTitle)}</h2>
        ${isNepali && localizedTitle !== publication.title ? `<p class="pub-original-title" lang="en">${escapeHtml(publication.title)}</p>` : ""}
        <div class="pub-summary-row">
          <p>${escapeHtml(summary)}</p>
          ${details}
        </div>
        <div class="pub-actions">${links}</div>
      </div>
    </article>`;
};

if (publicationList && Array.isArray(window.PUBLICATIONS)) {
  publicationList.innerHTML = window.PUBLICATIONS.map(renderPublicationCard).join("");
}

const NEWS_VISIBLE_COUNT = 4;
const NEWS_RECENT_MONTHS = 3;
const newsMonthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const nepaliNewsMonthLabels = ["जनवरी", "फेब्रुअरी", "मार्च", "अप्रिल", "मे", "जुन", "जुलाई", "अगस्ट", "सेप्टेम्बर", "अक्टोबर", "नोभेम्बर", "डिसेम्बर"];

const formatNewsDate = (date) => {
  const [year, month] = date.split("-").map(Number);
  return isNepali
    ? `${nepaliNewsMonthLabels[month - 1]} ${nepaliDigits(year)}`
    : `${newsMonthLabels[month - 1]} ${year}`;
};

const isNewsRecent = (date) => {
  const [year, month] = date.split("-").map(Number);
  const itemDate = new Date(year, month - 1, 1);
  const now = new Date();
  const monthsAgo = (now.getFullYear() - itemDate.getFullYear()) * 12 + (now.getMonth() - itemDate.getMonth());
  return monthsAgo >= 0 && monthsAgo <= NEWS_RECENT_MONTHS;
};

const newsHighlights = [
  "Elsevier Journal of Systems Architecture",
  "Discover Artificial Intelligence",
  "Springer Nature",
  "IEEE Access",
  "WACV 2026",
  "Diagnostics",
  "ICCAS 2024",
  "Sensors",
];

const highlightNewsText = (text) => {
  let html = escapeHtml(text);
  newsHighlights.forEach((term) => {
    const safeTerm = escapeHtml(term);
    html = html.split(safeTerm).join(`<span class="news-highlight">${safeTerm}</span>`);
  });
  return html;
};

const renderNewsItem = (item, index) => {
  const itemClass = index >= NEWS_VISIBLE_COUNT ? "news-item news-extra" : "news-item";
  const hiddenAttr = index >= NEWS_VISIBLE_COUNT ? " hidden" : "";
  const newBadgeHidden = isNewsRecent(item.date) ? "" : " hidden";

  return `
    <article class="${itemClass}"${hiddenAttr}>
      <time datetime="${escapeHtml(item.date)}">${escapeHtml(formatNewsDate(item.date))}</time>
      <span class="news-tags"><span class="news-tag news-tag--${escapeHtml(item.tag)}">${escapeHtml(item.tagLabel)}</span><span class="news-new"${newBadgeHidden}>${isNepali ? "नयाँ" : "New"}</span></span>
      <p>${highlightNewsText(item.text)}</p>
    </article>`;
};

if (newsList && Array.isArray(window.NEWS)) {
  newsList.innerHTML = window.NEWS.map(renderNewsItem).join("");
}

const newsExtraItems = document.querySelectorAll(".news-extra");

if (newsToggle) {
  if (newsExtraItems.length) {
    newsToggle.addEventListener("click", () => {
      const expanded = newsToggle.getAttribute("aria-expanded") === "true";
      newsToggle.setAttribute("aria-expanded", String(!expanded));
      newsExtraItems.forEach((item) => {
        item.hidden = expanded;
      });
      newsToggle.textContent = isNepali
        ? (expanded ? "थप हेर्नुहोस्" : "कम देखाउनुहोस्")
        : (expanded ? "More" : "Less");
    });
  } else {
    newsToggle.hidden = true;
  }
}

const lightboxTriggers = document.querySelectorAll(".pub-image-button, .focus-image-button");

if (lightboxTriggers.length) {
  const lightbox = document.createElement("div");
  lightbox.className = "image-lightbox";
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <div class="image-lightbox-panel" role="dialog" aria-modal="true" aria-label="${isNepali ? "ठूलो तस्वीर" : "Expanded image"}">
      <button class="image-lightbox-close" type="button" aria-label="${isNepali ? "तस्वीर बन्द गर्नुहोस्" : "Close expanded image"}">&times;</button>
      <img class="image-lightbox-img" alt="">
      <p class="image-lightbox-title"></p>
    </div>`;
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector(".image-lightbox-img");
  const lightboxTitle = lightbox.querySelector(".image-lightbox-title");
  const lightboxClose = lightbox.querySelector(".image-lightbox-close");

  const closeLightbox = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
  };

  document.addEventListener("click", (event) => {
    const button = event.target.closest(".pub-image-button, .focus-image-button");
    if (!button) return;
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
