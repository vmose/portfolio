# Victor Mose — Portfolio

Personal portfolio site: [vmose.github.io/portfolio](https://vmose.github.io/portfolio)

## Stack

Plain HTML, CSS, and vanilla JavaScript. No framework, no bundler, no build
step — what's in the repo is what ships.

```
index.html      markup + copy
style.css       design tokens + styles
script.js       nav, scroll-reveal, active-link tracking
assets/         images, favicon, resume.pdf
```

## Running locally

Any static file server works. For example:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Or just open `index.html` directly in a browser — the site has no server
dependencies.

## Deploying

Pushing to `main` triggers `.github/workflows/gh-pages.yml`, which uploads
the repo root as a GitHub Pages artifact and deploys it — no install/build
step required. To deploy from a subfolder instead of the repo root, update
the `path:` value in that workflow.

Make sure GitHub Pages is set to deploy via **GitHub Actions** (not "Deploy
from a branch") under **Settings → Pages**.

## Editing content

- **Copy, projects, links:** edit directly in `index.html`.
- **Colors, type, spacing:** all defined as CSS custom properties at the top
  of `style.css` under `:root` — change a token once, it updates everywhere.
- **Résumé:** replace `assets/resume.pdf` (same filename, so no link
  updates needed).

## Legacy build tooling

`package.json` and the `src/`/`dist/` split from the previous Parcel +
Bootstrap + SCSS setup are no longer used by the live site. They're kept
for reference but can be deleted once you're confident you don't need them.

## License

See [LICENSE.md](./LICENSE.md).
