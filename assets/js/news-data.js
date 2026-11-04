/*
  News data for the homepage Recent News card.

  Add new items to the TOP of the array (newest first) using this shape:
  {
    date: "2026-06",        // "YYYY-MM", used for sorting/display and the "New" badge
    tag: "review",          // review | conference | journal | health | service | media
    tagLabel: "Under Review",
    text: "Short one-line update.",
    url: "https://...",     // optional source link
    linkLabel: "Read source" // required when url is present
  }

  Only the first 4 items show by default; the rest collapse behind the
  "See more" toggle. Items dated in 2026 get an automatic "New" badge
  (handled in main.js).
*/

window.NEWS = [
  {
    date: "2026-10",
    tag: "journal",
    tagLabel: "Published",
    text: "GeoBASP geography-aware pruning for landslide segmentation in Nepal, published in MDPI Electronics.",
    url: "https://www.mdpi.com/2079-9292/15/20/4792",
    linkLabel: "Read paper"
  },
  {
    date: "2026-09",
    tag: "media",
    tagLabel: "Media Coverage",
    text: "Clickmandu featured our study of public-enterprise decline and Nepal’s industrial replacement gap.",
    url: "https://clickmandu.com/2026/09/494861.html",
    linkLabel: "Read coverage"
  },
  {
    date: "2026-09",
    tag: "journal",
    tagLabel: "Published",
    text: "Study on public-enterprise decline and Nepal’s industrial replacement gap published in MDPI Sustainability."
  },
  {
    date: "2026-08",
    tag: "journal",
    tagLabel: "Published",
    text: "Video-based fire and smoke detection with track-level verification published in MDPI Sensors."
  },
  {
    date: "2026-07",
    tag: "journal",
    tagLabel: "Published",
    text: "Vision-based strawberry ripeness grading for greenhouse harvest decisions published in MDPI Agriculture."
  },
  {
    date: "2026-06",
    tag: "review",
    tagLabel: "Under Review",
    text: "ARM edge-DNN deployment-stack effects paper submitted to Elsevier Journal of Systems Architecture."
  },
  {
    date: "2026-03",
    tag: "conference",
    tagLabel: "Conference",
    text: "One-cycle structured pruning with stability-driven subnetwork search published at WACV 2026."
  },
  {
    date: "2025-09",
    tag: "journal",
    tagLabel: "Journal",
    text: "Machine-learning study of female infertility trends and risk prediction published in Diagnostics."
  },
  {
    date: "2025-06",
    tag: "journal",
    tagLabel: "Journal",
    text: "FUSE-Net study on predicting near-infrared imagery from RGB images published in MDPI Sensors."
  },
  {
    date: "2025-03",
    tag: "health",
    tagLabel: "Healthcare AI",
    text: "Data-driven study of PCOS and its clinical, physical, and reproductive factors published in Diagnostics."
  },
  {
    date: "2025-01",
    tag: "service",
    tagLabel: "Editorial Board",
    text: "Joined the editorial board of Discover Artificial Intelligence (Springer Nature)."
  },
  {
    date: "2024-10",
    tag: "conference",
    tagLabel: "Conference",
    text: "Presented structured pruning for hybrid CNN–transformer neural networks at ICCAS 2024."
  }
];
