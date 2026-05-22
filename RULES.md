# Contributor Rules & Repository Guidelines — 3D Portfolio

This document sets expectations for contributors and maintainers of the `3d-portfolio` repository.

## Purpose
Keep the repository maintainable, consistent, and friendly to new contributors while protecting assets and respecting licensing requirements.

## Branching & Commits
- Branch from `main` with descriptive names: `feature/<short-desc>`, `fix/<short-desc>`, or `chore/<short-desc>`.
- Use conventional, clear commit messages. Short summary line (50 chars), optional body. Example:

  Add responsive texture loading for low-end devices

  - Fallback to compressed GLTFs
  - Lazy-load heavy assets

## Pull Requests
- Create PRs for any change to `src/`, `public/`, or build configs.
- Provide a concise description of the change and any testing steps.
- Assign reviewers and link related issues where relevant.

## Code Style and Quality
- Follow existing TypeScript and ESLint rules. Run `npm run lint` before opening PRs.
- Keep changes focused and small: avoid massive unrelated refactors in the same PR.

## 3D & Asset Guidelines
- Keep 3D assets optimized: use compressed GLTF/DRACO where possible and strip unnecessary metadata.
- Avoid committing large binary files > 5–10 MB directly; use a CDN or Git LFS if needed.
- Provide fallback or reduced-quality scene configuration for mobile and low-power devices.

## Project Showcase & Content Guidelines
- Add a short README or metadata file for each showcased project (example: `projects/<slug>.md` or JSON in `src/data/projects.json`). Include: summary, tech stack, role, outcomes/metrics, live link, and screenshots.
- Prefer short measurable bullet points (metrics first) for each project (e.g., "Reduced latency by 40%", "Achieved 94% accuracy").
- Include live links and demo GIFs where possible; keep GIFs small (optimized) and prefer short MP4s for demos.
- Host large media on a CDN or external storage and reference them in the project data to keep repo size small.

## Design & Content Quality
- Keep the portfolio copy concise and scannable: hero tagline, 2–3 key metrics, and primary CTA.
- Use consistent visual language: a small palette, typographic scale, and spacing system.
- Add an accessible contact form and a clear contact CTA; do not include a downloadable resume if the portfolio is intended to be web-only.

## GSAP & Licensing
- Use the `gsap` package from npm (core) for runtime animations. Do not include any trial-only or proprietary GSAP plugin packages unless you have the appropriate license.

## Accessibility & UX
- Ensure keyboard focusability for interactive components and provide text alternatives for meaningful visuals.

## Tests & CI
- Add or update tests when changing behavior or data transformations.
- CI (if configured): PRs should pass linting and type checks before they can be merged.

## Security
- Do not commit secrets or credentials. Use environment variables for build-time config.

## Issues
- Use clear, reproducible issue descriptions. Tag issues with `bug`, `enhancement`, `help wanted`, or `question`.

## Attribution & Third-party Content
- Keep `LICENSE` intact (MIT). Attribute third-party assets and libraries in the `README.md` or an `ATTRIBUTION.md` if required by asset licenses.

## Review & Enforcement
- Maintain a respectful, constructive review process. Merge only after at least one approving review and passing CI checks.

---

If you want, I can add a `PULL_REQUEST_TEMPLATE.md` and `ISSUE_TEMPLATE` next, or open issues for the milestone tasks in the PRD. Which would you prefer I do next?

---

If you'd like, I can also:
- Generate `projects/` metadata entries for the Social Network and RewardSync projects using the details you provided.
- Create a `PULL_REQUEST_TEMPLATE.md` and `ISSUE_TEMPLATE` to make contributions consistent.
