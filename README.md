# Mugeri Vhuthuhawe — Portfolio Website

A static personal portfolio built with plain HTML, CSS and a small amount of JavaScript.
No build step, no dependencies. Deploy to GitHub Pages by pushing the folder.

## Structure

```
portfolio/
├── index.html          Home
├── about.html          About
├── engineering.html    Engineering
├── music.html          Music + video/photo galleries
├── projects.html       Projects & practice
├── experience.html     Experience timeline
├── skills.html         Skills & tools
├── contact.html        Contact
├── css/styles.css      All styles
├── js/main.js          Mobile nav + footer year
└── assets/
    ├── images/         Photos
    ├── video/          Video clips
    └── posters/        Video thumbnail frames
```

---

## Corrections made to the original guideline

The source document (`Mugeri_Vhuthuhawe_Portfolio_Guideline.pdf`) was a working draft.
The following issues were corrected while building the site:

| # | Issue in guideline | Correction in this site |
|---|---|---|
| 1 | Empty placeholders such as `[Add title]`, `[Add if desired]`, `[Choose the email address…]`, `[Add profile URL]` | Removed from all public pages. No bracketed placeholders appear in the site. |
| 2 | "Expected graduation: To be confirmed" | Omitted the graduation date rather than guessing. The site states the verifiable fact: third-year student. |
| 3 | "Andile Tsako — described by you as an award-winning artist. Confirm before publishing" | The unverified "award-winning" descriptor was removed. Both artists are listed as performance/session collaborations. |
| 4 | GitHub email described as "not yet a verified public GitHub profile URL" | The supplied address is used only as a contact email. No GitHub URL is shown until a real public profile exists. |
| 5 | Prose draft with awkward phrasing and `--` dashes | Rewritten into concise, factual copy with consistent em dashes and clean headings. |
| 6 | "Working foundation… complete the gaps before publishing" notice embedded in the content | Removed from public copy. Remaining gaps are tracked here in the README instead. |
| 7 | Case studies described as "not presented as completed formal projects" yet written like finished projects | Reframed honestly as "Projects & Practice" — areas of active work, with the evidence structure explained rather than invented. |
| 8 | Engineering projects section stated "No specific completed engineering projects have been supplied yet" | Replaced with a factual account of coursework and practical focus. No fabricated projects. |
| 9 | Skills listed in several places with slight variations | Consolidated into one Skills page with consistent wording. |
| 10 | "Optional" equipment list with no guidance | Kept as a compact "Familiar tools" subsection — useful credibility for both engineering and music. |
| 11 | Dates mentioned as "to be confirmed" for roles | Roles are shown as "Current" with no invented start dates. |
| 12 | No clear call to action anywhere | Added contact CTAs on Home, Music, Projects, Skills, About and Contact. |
| 13 | No accessibility guidance | Semantic HTML, skip link, alt text, focus styles, ARIA on mobile nav, reduced-motion support. |
| 14 | No responsive guidance | Mobile-first responsive layout with a collapsible nav. |
| 15 | Media not organised for the web | All 25 files copied, renamed consistently, and video poster frames generated. |

### Still to confirm (outside the site copy, for you to supply)

- Expected graduation year / study dates, if you want them shown.
- Start dates and responsibilities for LMAE Sounds and CRC East London.
- Exact nature of the Ziyanda Tshangana and Andile Tsako collaborations.
- 2–4 real engineering projects with photographs, diagrams or simulations.
- Approved recordings or session examples you are allowed to publish.
- Permission to publish artist, band, church or client names, photos and recordings.
- Public GitHub / LinkedIn / YouTube / Instagram links, if you want them listed.

Add these to the relevant HTML files when ready. Nothing inaccurate is currently published.

---

## Media mapping

Original filenames were renamed for clean URLs. The originals remain untouched in
`C:\PROJECT - REBUILD\photos and videos`.

### Photos (`assets/images/`)

| New name | Original file |
|---|---|
| `img-01.jpg` | `1792874349136.jpg` |
| `img-02.jpg` | `400a2171e016411cb00e3e7f09f3e78d.jpg` |
| `img-03.png` | `file_0000000013dc820eb861ee33ba4bf1ac.png` |
| `img-04.jpg` | `IMG-20260208-WA0030(1).jpg` |
| `img-05.jpg` | `IMG-20261109-WA0000.jpg` |
| `img-06.jpg` | `IMG-20261122-WA0055.jpg` |
| `img-07.jpg` | `IMG-20261122-WA0063.jpg` |
| `img-08.jpg` | `IMG_0317 (1).jpg` |
| `img-09.jpg` | `IMG_0319.jpg` |
| `img-10.jpg` | `IMG_0322.jpg` |
| `img-11.jpg` | `IMG_0343.jpg` |
| `img-12.heic` | `20261007_092107.heic` *(not used — HEIC browser support is limited)* |
| `img-13.HEIC` | `IMG_3563 2.HEIC` *(not used — HEIC browser support is limited)* |

### Videos (`assets/video/`) and posters (`assets/posters/`)

All clips were cut to short highlights using the media-use skill's local ffmpeg
recipe. The best contiguous window was chosen by measuring audio RMS energy in
0.5-second buckets and picking the loudest 6-second stretch; clips under 7 seconds
were left whole. Each clip was re-encoded to H.264/AAC, downscaled (720px wide for
portrait, 1280px for landscape), and given a fresh poster frame.

| New name | Original file | Highlight taken from original | Kept | Size |
|---|---|---|---|---|
| `video-01.mp4` | `20260703_222646.mp4` | 0:00–0:06 | 6s | 1.8 MB |
| `video-02.mp4` | `20260704_001228.mp4` | 0:00–0:03 | 2.5s | 1.0 MB |
| `video-03.mp4` | `20260711_145136.mp4` | 0:02–0:08 | 6s | 2.2 MB |
| `video-04.mp4` | `20260904_212252.mp4` | 0:00–0:04 | 4s | 1.4 MB |
| `video-05.mp4` | `20260904_212301.mp4` | 0:07–0:13 | 6s | 1.4 MB |
| `video-06.mp4` | `20260905_193016.mp4` | 0:02–0:08 | 6s | 1.7 MB |
| `video-07.mp4` | `20261023_224615.mp4` | 0:02–0:08 | 6s | 2.3 MB |
| `video-08.mp4` | `20261024_000956.mp4` | 0:01–0:07 | 6s | 1.0 MB |
| `video-09.mp4` | `3S5A2944.mov` | 0:07–0:13 | 6s | 1.3 MB |
| `video-10.mp4` | `4be1dab026d94dcab0fd959eb890cfa0.mp4` | 0:25.5–0:31.5 | 6s | 0.8 MB |
| `video-11.mp4` | `VID-20260905-WA0010.mp4` | 0:01–0:07 | 6s | 0.5 MB |
| `video-12.mp4` | `VID-20260915-WA0025.mp4` | 1:06–1:12 | 6s | 1.7 MB |

The full, uncut originals remain untouched in `C:\PROJECT - REBUILD\photos and videos`.
Poster images are single frames extracted from each trimmed clip at ~0.5 seconds,
scaled to 640px. Total web video is now about **17 MB** (down from ~504 MB).

> **Note:** "Highlight" here means the loudest sustained stretch, chosen
> programmatically because I cannot watch the footage. If a chosen moment isn't
> the one you want, tell me the clip number and a time range and I'll recut it.

> **Important:** The media files could not be visually inspected in this environment.
> Alt text and captions are neutral placeholders such as "Performance photograph 1".
> Replace them with accurate descriptions once you've checked each file. Swap
> `img-01.jpg` / `img-02.jpg` on Home and About if a different photo suits you better.

---

## Deploy to GitHub Pages

1. Create a GitHub repository (a `username.github.io` repo gives you the cleanest URL).
2. Copy the contents of this `portfolio/` folder into the repo root and push.
3. Repo → **Settings** → **Pages** → Source: **Deploy from a branch** → `main` / root.
4. Your site will be live at `https://username.github.io/` (or `/repo-name/`).

The site itself is about **50 MB** (mostly photos). Videos are trimmed highlights
totalling ~17 MB, all well under GitHub's 100 MB per-file limit. For an even faster
site, host the clips on YouTube/Vimeo and embed them instead.

The hidden `.media/` folder is the HyperFrames media-use ledger created when the
trimmed clips were registered (another ~17 MB). It is not used by the website —
exclude it when deploying if you want the smallest repo.

## Editing

- Change copy in the relevant `*.html` file.
- Change colours, spacing and layout in `css/styles.css` (variables are at the top).
- The mobile menu and footer year are handled in `js/main.js`.
