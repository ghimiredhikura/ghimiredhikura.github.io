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
  "More" toggle. Items dated within the last 3 months get an automatic
  "New" badge (handled in main.js).
*/

window.NEWS = [
  {
    date: "2026-06",
    tag: "review",
    tagLabel: "Under Review",
    text: "Deployment-Stack Effects for ARM Edge DNN Inference paper submitted to Elsevier Journal of Systems Architecture."
  },
  {
    date: "2026-06",
    tag: "review",
    tagLabel: "Under Review",
    text: "Video-based fire and smoke detection and verification paper submitted to IEEE Access."
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
    text: "FUSE-Net paper on RGB-to-NIR prediction published in Sensors."
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
    tagLabel: "Academic Service",
    text: "Joined the Editorial Board of Discover Artificial Intelligence, Springer Nature."
  },
  {
    date: "2024-10",
    tag: "conference",
    tagLabel: "Conference",
    text: "Presented work on structured pruning for hybrid CNN-transformer neural networks at ICCAS 2024."
  }
];
