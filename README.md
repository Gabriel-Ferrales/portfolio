# Gabriel Ferrales — Data Analytics Portfolio

English-language portfolio built with React, Vite and Tailwind CSS. The page uses native section links, a featured IGDB Gaming Analytics project, a manually controlled screenshot gallery, and a grid of complementary web projects.

## Local development

Use Node.js 20.19+ or 22.12+ (Node 22 LTS recommended).

```sh
npm ci
npm run dev
```

Keep the development command running and open the `Local` URL printed by Vite. Use Ctrl+C to stop it.

If an old `node_modules` installation contains macOS `dataless` files, move it aside within the same parent directory and run `npm ci` to download a fresh local installation. Keep `src` and `public` downloaded locally in iCloud Drive: placeholders can delay startup, images and builds. Restart any running development server after reinstalling dependencies.

Existing checks:

```sh
npm run lint
npm run build
npm run preview
npm audit
```

No automated test suite is configured. Review section links, keyboard focus, gallery selection and previous/next controls, full-size image links, and small-screen layouts when changing the page.

## Dependency maintenance

Vite 7 and its React plugin 5 are used with React 18. Swiper is updated to its patched 12.x release. The `postcss-selector-parser` override selects a patched 7.x version for Tailwind 3 and `postcss-nested`; keep the override until their dependency ranges include the security fix. Verify `npm run lint`, `npm run build` and `npm audit` after dependency changes.

## Content sources

- Education, location, existing web projects and background: original portfolio copy.
- IGDB project description, stack, engineering details, data limitations and live dashboard URL: project README supplied by Gabriel during this update.
- Dashboard images: `public/projects/dashboard/`, supplied by Gabriel. These are static snapshots, not live figures.
- Featured project repository: https://github.com/Gabriel-Ferrales/igdb-gaming
- The resume button opens `public/Gabriel_Ferrales_CV.pdf`, supplied by Gabriel. The portrait is `public/images/myprofile.jpg`. Public asset URLs respect the Vite base path.

The IGDB pipeline runs manually. Do not describe it as scheduled or fully orchestrated. Ratings represent current loaded state, and source metadata may be incomplete or approximate. No new employment history or business outcomes are claimed.
