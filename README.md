# Personal Website Template

A clean, responsive, single-page personal website template ready to deploy on **GitHub Pages** (or any static host). No build tools or dependencies required — just HTML, CSS, and vanilla JavaScript.

## Preview sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen intro with your name, tagline, and social links |
| **About** | Short bio, avatar photo, and résumé download button |
| **Skills** | Icon card grid of your technical skills |
| **Projects** | Card grid linking to source code and live demos |
| **Experience** | Chronological timeline of jobs and education |
| **Contact** | Client-validated contact form (hook up to Formspree / EmailJS) |

## Quick start

1. **Fork** or clone this repository.
2. Open `index.html` and replace every `Your Name`, `yourusername`, and placeholder text with your own information.
3. Drop your photo into `assets/avatar.jpg` (or update the `<img src>` path).
4. Put your résumé PDF at `assets/resume.pdf` (or update the download link).
5. Connect the contact form to a real back-end (see the comment block in `js/main.js`).
6. Push to GitHub — enable **Settings → Pages → Deploy from branch** to publish instantly.

## File structure

```
.
├── index.html        # Main HTML (all sections)
├── css/
│   └── style.css     # All styles (CSS custom properties, responsive)
├── js/
│   └── main.js       # Scroll effects, mobile nav, form validation
└── assets/           # Place avatar.jpg and resume.pdf here
```

## Customisation tips

- **Colours** – change the CSS custom properties at the top of `css/style.css` (`:root { … }`).
- **Font** – swap the `--font-sans` variable for any Google Font.
- **Sections** – add or remove `<section>` blocks in `index.html` and update the nav links accordingly.
- **Contact form** – replace the `setTimeout` mock in `js/main.js` with a real `fetch` call to [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/).

## License

Released under the [MIT License](https://opensource.org/licenses/MIT). Free to use for personal and commercial projects.
