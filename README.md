# Deepak Ghimire Personal Website

Static bilingual personal and academic website for Deepak Ghimire.

- Live site: [https://ghimiredeepak.com.np/](https://ghimiredeepak.com.np/)
- GitHub repository: [ghimiredhikura/ghimiredhikura.github.io](https://github.com/ghimiredhikura/ghimiredhikura.github.io)
- English pages are in the project root.
- Nepali pages are under `ne/`.
- GitHub Pages publishes the `main` branch and uses the custom domain stored in `CNAME`.

## Main Files

| Content | English | Nepali or shared data |
| --- | --- | --- |
| Homepage | `index.html` | `ne/index.html` |
| Selected publications | `assets/js/publications-data.js` | `assets/js/publications-ne.js` |
| Additional publication archive | `publications.html` | `ne/publications.html` |
| Recent News | `assets/js/news-data.js` | `assets/js/news-ne.js` |
| Writing listings | `writing.html` | `ne/writing.html` |
| Full articles and notes | `writing/` | `ne/writing/` when a separate Nepali version exists |
| Gallery | `gallery.html` | `ne/gallery.html` |
| Shared behavior | `assets/js/main.js` | Used by both languages |
| Base styles | `assets/css/styles.css` | Used by both languages |
| Current visual overrides | `assets/css/redesign.css` | Used by both languages |
| Images and publisher logos | `assets/images/` | Used by both languages |

## General Editing Rules

1. Save HTML, JavaScript, CSS, and Markdown files as UTF-8.
2. Keep the English and Nepali versions synchronized.
3. Put the newest publication, news item, or writing entry first. The website displays entries in file order; it does not sort them automatically.
4. Use natural Nepali based on the technical context. Do not translate technical terms word for word when that makes them unclear.
5. Keep published Nepali news articles in their original wording. Their titles and full article bodies should not be rewritten as translations.
6. Use lowercase, hyphenated filenames such as `new-paper-title.webp` and `new-article-title.html`.
7. Check relative paths carefully. Files under `ne/` normally need `../`; files under `ne/writing/` normally need `../../` to reach `assets/`.

## Preview Locally

Run a local web server instead of opening the HTML files directly:

```powershell
cd D:\deepak-website
python -m http.server 8000
```

Open these pages:

- `http://localhost:8000/`
- `http://localhost:8000/ne/`
- `http://localhost:8000/publications.html`
- `http://localhost:8000/ne/publications.html`
- `http://localhost:8000/writing.html`
- `http://localhost:8000/ne/writing.html`

Use another port if `8000` is already occupied:

```powershell
python -m http.server 8080
```

## Add a Selected Publication

Selected publication cards are generated from `window.PUBLICATIONS` in `assets/js/publications-data.js`. They appear in the same order as the array.

### 1. Prepare the graphical abstract

When a publication has an image, add both versions with the same base filename:

```text
assets/images/new-paper.webp
assets/images/thumbs/new-paper.webp
```

The full image is used in the lightbox and on small screens. The thumbnail is loaded in the desktop publication list.

If no image is available, leave `image` empty and use one of the existing fallback icons:

```text
chip | face | traffic | color | driver | interaction
```

### 2. Add the English publication record

Add the new object near the top of `window.PUBLICATIONS` in `assets/js/publications-data.js`:

```js
{
  topic: "vision",
  venue: "Journal Name, 2026 · Q1 Journal",
  title: "Exact English Paper Title",
  summary: "A short two or three sentence explanation for a general technical reader.",
  image: "assets/images/new-paper.webp",
  imageAlt: "Graphical abstract for Exact English Paper Title",
  icon: "",
  links: [
    { label: "Paper", url: "https://doi.org/...", type: "paper" },
    { label: "PDF", url: "https://example.com/paper.pdf", type: "pdf" },
    { label: "GitHub", url: "https://github.com/...", type: "github" }
  ],
  detailsHtml: ""
},
```

Allowed `topic` values correspond to the existing filters:

```text
edge-ai | vision | agri | health | systems
```

Common link types are:

```text
paper | pdf | arxiv | github
```

For expanded authors, affiliations, abstract, DOI, and keywords, copy the `detailsHtml` structure from an existing complete publication record. Escape double quotes inside the JavaScript string as `\"`.

### 3. Add the Nepali title and summary

Use the publication's exact English title as the key in both maps in `assets/js/publications-ne.js`:

```js
window.PUBLICATION_TITLES_NE = {
  "Exact English Paper Title": "सन्दर्भअनुसार स्वाभाविक नेपाली शीर्षक",
  // existing entries
};

window.PUBLICATION_SUMMARIES_NE = {
  "Exact English Paper Title": "प्राविधिक विषयलाई सामान्य पाठकले बुझ्ने गरी लेखिएको स्वाभाविक नेपाली सारांश।",
  // existing entries
};
```

The key must match `title` in `publications-data.js` character for character. The official English title and expanded publication details remain available on the Nepali page.

### 4. Validate the publication update

```powershell
node --check assets/js/publications-data.js
node --check assets/js/publications-ne.js
```

Check the new card and every filter on both publication pages. Confirm that the graphical abstract opens at full size and all external links work.

## Add an Additional Publication to the Full Archive

The compact **Additional Papers / थप शोधपत्रहरू** archive is written directly in HTML.

1. Copy one complete `<li>...</li>` entry in `publications.html`.
2. Insert it at the correct date position inside `.other-pub-list`.
3. Update the type, venue, year, title, authors, and link.
4. Copy the matching entry into `ne/publications.html`.
5. In Nepali, keep the official title in `<small class="other-pub-original" lang="en">` and provide a natural Nepali heading in `<strong>`.

Example English entry:

```html
<li>
  <a href="https://doi.org/..." target="_blank" rel="noopener">
    <div class="other-pub-head">
      <span class="other-pub-type journal">Journal</span>
      <span class="other-pub-meta">Journal Name · 2026</span>
    </div>
    <strong>Official publication title</strong>
    <span class="other-pub-authors"><b>Deepak Ghimire</b>, Coauthor Name</span>
  </a>
</li>
```

Use `journal` or `conf` on `.other-pub-type` to retain the existing visual style.

## Add a Recent News Item

Recent News is generated from two parallel arrays:

- English: `assets/js/news-data.js`
- Nepali: `assets/js/news-ne.js`

Add the newest item at the top of both `window.NEWS` arrays:

```js
{
  date: "2026-09",
  tag: "journal",
  tagLabel: "Journal",
  text: "Paper title or concise update published in Journal Name."
},
```

Nepali counterpart:

```js
{
  date: "2026-09",
  tag: "journal",
  tagLabel: "जर्नल",
  text: "उही समाचारको स्वाभाविक र सन्दर्भअनुसार स्पष्ट नेपाली विवरण।"
},
```

Available tag styles are:

```text
review | conference | journal | health | service
```

Important behavior:

- `date` must use `YYYY-MM`.
- Items are displayed in array order, so place the newest item first.
- The first four items are visible initially.
- Older items appear behind the **More / थप हेर्नुहोस्** control.
- Items from the current month or previous three months receive the automatic **New / नयाँ** badge.
- Venue names listed in `newsHighlights` in `assets/js/main.js` are emphasized. Add a new venue there only when it should receive the same emphasis.

Validate both files:

```powershell
node --check assets/js/news-data.js
node --check assets/js/news-ne.js
```

## Add a Published Article to Writing

Published article listings are maintained directly in:

- `writing.html`
- `ne/writing.html`

The two pages currently show the newest three entries in each writing section. Entries after the third are hidden by the inline script, and the `.explore-more` link becomes visible. Give that link a real archive destination before relying on it for older entries.

### 1. Add or reuse the publisher logo

Store publisher logos in `assets/images/`, for example:

```text
assets/images/publisher_logo.png
```

Use the root path in `writing.html`:

```html
<img class="source-logo" src="assets/images/publisher_logo.png" alt="Publisher Name">
```

Use `../` in `ne/writing.html`:

```html
<img class="source-logo" src="../assets/images/publisher_logo.png" alt="Publisher Name">
```

### 2. Add the listing entry

Copy a complete `<article class="writing-entry">...</article>` block and place it first under the **Published Articles** section.

```html
<article class="writing-entry">
  <div class="writing-entry-meta">
    <span>Opinion</span>
    <img class="source-logo" src="assets/images/publisher_logo.png" alt="Publisher Name">
    <time datetime="2026-09-22T12:00:00+05:45">Displayed publication date</time>
  </div>
  <div class="writing-entry-copy">
    <h3>Published article title</h3>
    <p>A concise introduction or excerpt.</p>
    <div class="writing-entry-actions" aria-label="Read options">
      <span>Full article</span>
      <a class="read-local" href="writing/article-slug.html">Read here</a>
      <span class="read-separator">|</span>
      <a class="read-source" href="https://publisher.example/article" target="_blank" rel="noopener">Read at Publisher</a>
    </div>
  </div>
</article>
```

Use an ISO Gregorian value in the `datetime` attribute even when the visible date is written in Nepali or Bikram Sambat.

Then add the corresponding entry to `ne/writing.html`. Paths from that page normally use:

```text
../assets/images/...
../writing/...
```

For an article originally published in Nepali, keep its published Nepali title and wording in both listings. Do not translate or rewrite the full article body.

### 3. Add a local full-article page when needed

For an original Nepali portal article:

1. Copy an existing page under `writing/`.
2. Rename it to a descriptive slug such as `writing/article-slug.html`.
3. Update `<title>`, metadata, publication information, source link, heading, and article body.
4. Keep the published article wording unchanged.
5. Link both writing listings to that page when the same original article is shown in both languages.

For a site-authored bilingual research note:

```text
writing/note-slug.html
ne/writing/note-slug.html
```

Translate the explanation naturally for the Nepali page and preserve technical meaning. Check navigation, stylesheet, image, and back-link paths after copying a page between directories.

## Add a Research Note, Vlog, or Field Note

Use the second `.writing-section` in `writing.html` and `ne/writing.html`.

Copy an existing `.writing-entry`, place the newest entry first, and update:

- Content type
- Machine-readable and visible date
- Title
- Short description
- Local page, video, or external link
- Natural Nepali counterpart

## Update Homepage Content

Most profile content is written directly in `index.html` and `ne/index.html`, including:

- Hero text and metrics
- Research areas
- Experience
- Education
- Academic service
- Public profiles
- Contact introduction
- Origin

When changing one of these areas, update both files in the same edit. Keep dates, organization names, links, and claims consistent while allowing the Nepali wording to read naturally.

## Add a Gallery Image

1. Put the optimized image in `assets/images/`.
2. Copy a `<figure class="gallery-item">...</figure>` block in `gallery.html`.
3. Add the corresponding block to `ne/gallery.html`.
4. Update the path, meaningful `alt` text, and caption.

English example:

```html
<figure class="gallery-item">
  <img src="assets/images/project-fieldwork.webp" alt="Field test of an agricultural monitoring system">
  <figcaption>Agricultural field testing</figcaption>
</figure>
```

The Nepali page uses `../assets/images/project-fieldwork.webp`.

## Cache Versioning

Browsers may continue using an older CSS or JavaScript file after deployment. When changing a shared asset, increment its query-string version in every page that loads it.

Example:

```html
<link rel="stylesheet" href="assets/css/redesign.css?v=18">
<script src="assets/js/main.js?v=3"></script>
<script src="assets/js/news-data.js?v=2"></script>
```

Use the correct relative prefix on Nepali and nested article pages. Search all references before changing versions:

```powershell
rg -n "redesign.css|main.js|news-data.js|publications-data.js" -g "*.html"
```

## Pre-deployment Checklist

1. Preview the English and Nepali versions locally.
2. Test desktop and mobile widths.
3. Confirm newest-first ordering.
4. Check that images and publisher logos load without 404 errors.
5. Test publication filters, expansion panels, Recent News, and image lightboxes.
6. Open every new internal and external link.
7. Confirm English and Nepali content agree on dates and facts.
8. Check JavaScript syntax:

   ```powershell
   node --check assets/js/main.js
   node --check assets/js/news-data.js
   node --check assets/js/news-ne.js
   node --check assets/js/publications-data.js
   node --check assets/js/publications-ne.js
   ```

9. Review the files that will be published:

   ```powershell
   git status
   git diff --check
   git diff
   ```

## Publish Updates

After reviewing the changes:

```powershell
git add .
git commit -m "Update website content"
git push origin main
```

GitHub Pages will publish the `main` branch to [https://ghimiredeepak.com.np/](https://ghimiredeepak.com.np/). Keep the `CNAME` file in the repository root; deleting it can disconnect the custom domain.
