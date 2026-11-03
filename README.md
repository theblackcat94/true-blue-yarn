# True Blue Yarn

A responsive, five-page Next.js website for True Blue Yarn, an Australian veteran-focused podcast and production platform.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open the local URL printed by the development server. Run `npm run build` to verify the production build.

The project uses the Next.js App Router. Routes are `/`, `/about`, `/projects`, `/episodes`, and `/contact`. Shared navigation and video cards are in `components/`; styles are in `app/globals.css`. The contact form opens an email draft and does not store submissions.

## GitHub Pages

Run `npm run build:pages` to produce a static export in `out/`. The script derives the project base path from `GITHUB_REPOSITORY` in GitHub Actions and defaults to `/true-blue-yarn` locally. Set `GITHUB_PAGES_BASE_PATH` to override it. The workflow in `.github/workflows/deploy-pages.yml` publishes the export from pushes to `main` after the repository's Pages source is set to GitHub Actions.

The three YouTube embeds on Home and Episodes are sourced from the current True Blue Yarn home page. The original site images are preserved in `public/images/original/`: Natasha's portrait and the veteran artwork from About, the Wounded Heroes image from Projects, the KSC Law sponsor logo from Home, and the source site's favicon. The new editorial hero image is in `public/images/podcast-coast.png`.

The public site links to True Blue Yarn's YouTube channel and Instagram, and to Open Arms for official veteran and family support. Update episode links and editorial copy as the show grows.
