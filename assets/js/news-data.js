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
  "More" toggle. Items dated in 2026 get an automatic "New" badge
  (handled in main.js).
*/

window.NEWS = [
  {
    date: "2026-10",
    tag: "journal",
    tagLabel: "Published",
    text: "GeoBASP, a geography-aware pruning method for Nepal Himalaya landslide segmentation, published in MDPI Electronics.",
    url: "https://www.mdpi.com/2079-9292/15/20/4792",
    linkLabel: "Read paper"
  },
  {
    date: "2026-09",
    tag: "media",
    tagLabel: "Media Coverage",
    text: "Clickmandu covered our Sustainability study on Nepal's public-enterprise decline and industrial replacement gap.",
    url: "https://clickmandu.com/2026/09/494861.html",
    linkLabel: "Read coverage"
  },
  {
    date: "2026-09",
    tag: "journal",
    tagLabel: "Published",
    text: "Nepal public-enterprise decline and industrial replacement-gap study published in MDPI Sustainability."
  },
  {
    date: "2026-08",
    tag: "journal",
    tagLabel: "Published",
    text: "Video-based fire and smoke detection and verification paper published in MDPI Sensors."
  },
  {
    date: "2026-07",
    tag: "journal",
    tagLabel: "Published",
    text: "Vision-based strawberry ripeness grading study published in MDPI Agriculture."
  },
  {
    date: "2026-06",
    tag: "review",
    tagLabel: "Under Review",
    text: "ARM edge-DNN deployment-stack study submitted to Elsevier Journal of Systems Architecture."
  },
  {
    date: "2026-03",
    tag: "conference",
    tagLabel: "Conference",
    text: "One-cycle structured-pruning paper published at WACV 2026."
  },
  {
    date: "2025-09",
    tag: "journal",
    tagLabel: "Journal",
    text: "Paper on infertility risk prediction published in Diagnostics."
  },
  {
    date: "2025-06",
    tag: "journal",
    tagLabel: "Journal",
    text: "FUSE-Net paper on RGB-to-NIR prediction published in MDPI Sensors."
  },
  {
    date: "2025-03",
    tag: "health",
    tagLabel: "Healthcare AI",
    text: "Paper on PCOS and clinical risk factors published in Diagnostics."
  },
  {
    date: "2025-01",
    tag: "service",
    tagLabel: "Editorial Board",
    text: "Joined the Editorial Board of Discover Artificial Intelligence, Springer Nature."
  },
  {
    date: "2024-10",
    tag: "conference",
    tagLabel: "Conference",
    text: "Presented work on structured pruning for hybrid CNN-transformer neural networks at ICCAS 2024."
  }
];
