# Mugeri Vhuthuhawe — Portfolio Website

A static personal portfolio for **Mugeri Vhuthuhawe** — Electrical Engineering student, resident keys player, and music technology practitioner.

Built with **plain HTML, CSS, and a small amount of vanilla JavaScript**.
No build step, no frameworks, no dependencies. Hosted on GitHub Pages.

## Design language: "Paper & Stage"

The site pairs two materials into one editorial system:

- **Paper** — warm off-white, printed-paper feel. Used for engineering, credentials,
  biography and anything that reads like an academic or professional record.
- **Stage** — near-black, lit and high-contrast. Used for music, performance media and
  the footer, so media and showreel moments feel like being on stage rather than scrolling
  past documentation.

Details: big serif display headlines (Fraunces), humanist sans body (Inter), mono
labels (JetBrains Mono); hairline rules, italic eyebrows, a copper accent
(`#a8492a`); generous whitespace and editorial measure.

## Pages

| Page | Path | Contents |
|---|---|---|
| Home | `index.html` | Hero, services marquee, two pillars (engineering / music), featured media, stats, CTA |
| About | `about.html` | Biography, current stage, collaborations |
| Engineering | `engineering.html` | Study at Walter Sisulu University, diploma, coursework |
| Music | `music.html` | Resident roles, services, live clips, photo gallery |
| Projects | `projects.html` | Practice & case studies, video evidence |
| Experience | `experience.html` | Timeline across study, performance and collaboration |
| Skills | `skills.html` | Capabilities, software, equipment, familiar tools |
| Contact | `contact.html` | Contact details, message form, FAQ |
| CV | `cv.html` | Print-ready curriculum vitae |
| 404 | `404.html` | Branded not-found page |

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
├── cv.html             Print-ready CV
├── 404.html            Branded not-found page
├── css/styles.css      All styles (design tokens at the top)
├── js/main.js          Mobile nav, footer year, back-to-top
└── assets/
    ├── images/         Photos
    ├── video/          Video clips
    ├── posters/        Video thumbnail frames
```

## Accessibility & quality bar

The site was rebuilt to meet WCAG-minded basics and was verified with automated tooling:

- Semantic HTML with skip link and visible `:focus-visible` rings.
- Mobile-first responsive layout with a collapsible, Escape-aware navigation menu.
- `prefers-reduced-motion` honoured (animations and smooth scrolling disabled).
- The design is light-first (Paper & Stage) and the stage sections are deliberate
  dark inversions with their own contrast ratios.
- No scroll-reveal JS — content is always present in the DOM, so the page reads
  correctly with JavaScript disabled or before JS runs.
- Heading order validated (no skipped levels).
- Contrast-checked text/background pairs (body copy, captions, stage text).
- Zero horizontal overflow at desktop and mobile widths.

Automated audits returned **100 / 100 / 100** for accessibility, best practices and SEO
on the main pages.

## Media

- 11 photos (`assets/images/img-01.jpg` … `img-11.jpg`)
- 12 trimmed 6-second video highlights (`assets/video/video-01.mp4` … `video-12.mp4`)
- Posters in `assets/posters/`

The full, uncut originals remain untouched in the source media folder; web copies were
trimmed to the loudest sustained stretch of each clip.

## Deploy to GitHub Pages

1. Push to the default branch of the `mugerivhuthu360-ship-it/mugeri-portfolio` repo.
2. Repo → **Settings** → **Pages** → Source: **Deploy from a branch** → `main` / root.
3. Live at `https://mugerivhuthu360-ship-it.github.io/mugeri-portfolio/`.

## Editing

- Change copy in the relevant `*.html` file.
- Change colours, spacing and layout in `css/styles.css` (design tokens are at the top).
- The mobile menu and footer year are handled in `js/main.js`.
