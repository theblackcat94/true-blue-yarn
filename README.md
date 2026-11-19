# True Blue Yarn

A responsive, five-page Next.js website for True Blue Yarn, an Australian veteran-focused podcast and production platform.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Open the local URL printed by the development server. Run `npm run build` to verify the production build.

The project uses the Next.js App Router. Routes are `/`, `/about`, `/projects`, `/episodes`, and `/contact`. Shared navigation and video cards are in `components/`; styles are in `app/globals.css` and `app/revision.css`. The contact form opens an email draft and does not store submissions.

## GitHub Pages

Run `npm run build:pages` to produce a static export in `out/`. The script derives the project base path from `GITHUB_REPOSITORY` in GitHub Actions and defaults to `/true-blue-yarn` locally. Set `GITHUB_PAGES_BASE_PATH` to override it. The workflow in `.github/workflows/deploy-pages.yml` publishes the export on pushes to `main` and refreshes it daily.

`npm run sync:episodes` reads the public YouTube channel feed, selects numbered full episodes, and updates `lib/episodes.generated.json`. Daily GitHub Actions builds use this command so a newly published numbered episode can appear without editing site code. YouTube's feed includes only recent uploads; the sync retains older numbered episodes already captured in the checked-in index. If the feed or build fails, the workflow fails visibly and the previous deployed site remains live.

The YouTube embeds on Home and Episodes come from the episode index. The Spotify show embed uses the supplied show URL. The original site images are preserved in `public/images/original/`: Natasha's portrait and the veteran artwork from About, the Wounded Heroes image from Projects, the KSC Law sponsor logo from Home, and the source site's favicon.

The public site links to True Blue Yarn's YouTube, Spotify and Instagram. Every page footer points to Open Arms, Wounded Heroes and RSL Australia for veteran support. The updates form prepares an email request to Natasha; it is not an automated mailing list. Connect a newsletter provider and publish a privacy notice before replacing it with a hosted signup form. Donations, merchandise and the separate foundation archive discussed in the meeting are future projects and are not represented as live services here.
