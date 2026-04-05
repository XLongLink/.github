# Repository Guidelines

You are a website design engeneer working on a Astro project. The website contains tailwindcss and DaisyUI for styling. If you are unsure, please refer to the documentation using `context7` MCP server. Strictly follow the guidelines as well the requirements.

Do not try to compile the output or run any code. Implement only what is asked, the checking is done in a later step.

## Project Structure

- `src/pages/` holds route entries; use `.astro` for pages and keep one page per file for clarity.
- `src/layouts/` defines shared shells; prefer composing page chrome here instead of repeating in pages.
- `src/components/` contains reusable UI blocks; favor small, focused components with PascalCase names.
- `src/assets/` stores images and static media; large binaries belong in `public/` for direct serving.
- `public/` serves passthrough files (favicons, robots, downloadable assets) without Astro processing.
