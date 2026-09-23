/*
  News data for the homepage Recent News card.

  Add new items to the TOP of the array (newest first) using this shape:
  {
    date: "2026-06",        // "YYYY-MM", used for sorting/display and the "New" badge
    tag: "review",          // review | conference | journal | health | service
    tagLabel: "Under Review",
    text: "Short one-line update."
  }

  Only the first 4 items show by default; the rest collapse behind the
  "More" toggle. Items dated in 2026 get an automatic "New" badge
  (handled in main.js).
*/

window.NEWS = [
  {
    date: "2026-09",
    tag: "journal",
    tagLabel: "Published",
    text: "Public Enterprise Decline and the Industrial Replacement Gap in Nepal: Evidence from Product-Level Trade Data and Explainable Machine Learning published in MDPI Sustainability."
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
    text: "Vision-Based Strawberry Ripeness Grading for Harvest Decision Support in Smart Greenhouses published in MDPI Agriculture."
  },
  {
    date: "2026-06",
    tag: "review",
    tagLabel: "Under Review",
    text: "Deployment-Stack Effects for ARM Edge DNN Inference paper submitted to Elsevier Journal of Systems Architecture."
  },
  {
    date: "2026-03",
    tag: "conference",
    tagLabel: "Conference",
    text: "Paper on one-cycle structured pruning published at WACV 2026, held March 6–10, 2026, in Tucson, Arizona."
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
