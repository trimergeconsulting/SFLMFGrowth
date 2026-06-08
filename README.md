# South Florida Smart Manufacturing & Resilience Cluster (SFL-SMRC)

A static landing page for the SFL-SMRC program — a Regional Innovation Cluster
supporting small and mid-sized manufacturers across Miami-Dade, Broward, and
Palm Beach counties.

Built with plain HTML, CSS, and vanilla JavaScript. No build step, no
dependencies — open it and it works.

## Project structure

```
sfl-smrc/
├── index.html          # Page markup / content
├── css/
│   └── styles.css      # All styling (colors, layout, animations)
├── js/
│   └── script.js       # Sticky nav, mobile menu, scroll reveals
├── .gitignore
├── LICENSE
└── README.md
```

## Run locally

It's a static site, so just open `index.html` in a browser. To serve it over a
local web server (recommended, avoids any path quirks):

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Making changes

- **Text & content** → edit `index.html`. Each section is labeled with an HTML
  comment (`<!-- Services -->`, `<!-- Impact -->`, etc.).
- **Colors, fonts, spacing** → edit the `:root` variables at the top of
  `css/styles.css`. Change `--blue`, `--navy`, `--cyan` to re-theme the whole site.
- **Behavior** (menu, scroll animations) → edit `js/script.js`.
- **Images** → swap the `src` URLs in `index.html`. To self-host instead of
  hot-linking, drop files into an `images/` folder and point to `images/your-file.jpg`.

## Push to GitHub

```bash
cd sfl-smrc
git init
git add .
git commit -m "Initial commit: SFL-SMRC landing page"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy

**GitHub Pages** — in your repo: Settings → Pages → Source: `main` branch,
`/ (root)`. Your site goes live at `https://<your-username>.github.io/<your-repo>/`.

**Netlify** — drag the `sfl-smrc` folder onto the Netlify dashboard, or connect
the GitHub repo. No build command needed; publish directory is the root.

**Vercel** — import the repo; framework preset "Other", no build step.

## License

MIT — see [LICENSE](LICENSE).
