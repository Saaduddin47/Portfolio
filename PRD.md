# Product Requirements Document (PRD) — 3D Portfolio

## Project Overview

A single-page, interactive 3D portfolio showcasing the author's profile, skills, projects and contact details. The site uses React + TypeScript with a Three.js scene (via React Three Fiber) and GSAP-driven animations to provide a performant, visually engaging experience for portfolio visitors and potential employers.

## Objectives
- Present the author's skills, work, and story in an engaging, visual manner.
- Provide a performant experience across desktop and modern mobile devices.
- Make content easily editable so other contributors or the owner can update copy, assets, and the 3D scene.

## Key Features (Must-have)
- Landing section with hero text, animated 3D character/scene and clear CTA.
- Reusable content sections: About, What I Do, Tech Stack, Work, Career, Contact.
- Smooth page transitions and scroll-driven animation sequences implemented with GSAP.
- Custom cursor and hover interactions for enhanced interactivity on desktop.
- Accessible fallback for non-WebGL or low-power devices.

## Nice-to-have Features (Optional)
- Adjustable scene quality slider for performance tuning on low-end devices.
- Multi-language/content variants (i18n-ready data layer).
- CMS-backed content insertion (e.g., Netlify CMS or headless CMS) for non-developer edits.

## Target Users
- Hiring managers and recruiters evaluating UX/3D/animation and AI/ML skills.
- Technical leads and engineering peers assessing full‑stack and ML competence.
- Potential clients or employers looking for demonstrable project case studies.

## Success Metrics
- Time-on-page for landing > 60s for engaged visitors (indicative of interaction).
- Bounce rate under 50% for traffic from portfolio links.
- Visitors clicking CTA (contact link / email) > 5% of unique visitors.

## UX / Accessibility Requirements
- Keyboard navigable top-level sections and focus-visible states for interactive elements.
- Semantic HTML for content sections, with ARIA roles where necessary.
- Text alternatives for images and descriptive captions for the 3D scene where relevant.
- Ensure color contrast meets WCAG AA for text elements.

## Performance Requirements
- Initial load: keep Time To Interactive (TTI) low by code-splitting heavy 3D logic and lazy-loading non-essential assets.
- Use reduced-quality or fallback for devices that report low GPU or low-power mode.

## Technical Stack
- Frontend: React 18 + TypeScript
- Bundler/dev: Vite
- 3D: three.js via `@react-three/fiber` and helpers in `@react-three/drei`
- Animation: GSAP
- Backend (example projects): Node.js, Express, MongoDB, Flask
- Testing & tooling: ESLint, TypeScript type-checking

## Architecture & File Structure Notes
- `src/components/Character/` — central 3D scene and character-related logic; isolate heavy computations here.
- `src/data/` — single source of truth for textual content to enable easy customization.
- `src/components/styles/` — modularized CSS per component for maintainability.

## Constraints & Considerations
- GSAP plugin licensing: use core `gsap` package and avoid deprecated trial packages.
- Keep production bundle size in check; prefer compressed GLTFs and CDN-hosted large static assets where appropriate.
- Mobile devices may need simplified scenes or fallback visuals to preserve UX.

## Milestones (Suggested)
1. Project audit and documentation (this PRD + contributor rules). — Complete
2. CI: Add lint/type check workflows and build preview step. — 1 week
3. Performance tuning: split scene bundle, lazy-load assets. — 1–2 weeks
4. Optional: CMS integration or content authoring flow. — 2–3 weeks

## Testing Strategy
- Local dev (`npm run dev`) and manual QA across desktop and mobile emulators.
- Build verification (`npm run build` + `npm run preview`) to ensure production-ready bundles.
- Type-checks and ESLint run on CI before merge to main branch.

## Deployment
- Build with `npm run build` and deploy the `dist/` folder to a static host (Netlify, Vercel, Cloudflare Pages).

## Security and Privacy Notes
- Avoid embedding private API keys in source. Use environment variables for any secrets required at build-time.
- Sanitize any user-supplied data (contact forms) before sending to backend or third-party services.

## Owner / Contacts (as provided)
- Name: Syed Saaduddin Azhaan
- Email: saaduddinsyed10@gmail.com
- Phone: +91 8331928125
- Location: Hyderabad, India
- Education: B.Tech in Computer Science (Data Science), Lords Institute of Engineering and Technology — CGPA: 8.7 / 10 (Graduation: Jun 2026)


---

This PRD is a concise reference to guide product decisions, performance improvements, and collaboration. If you'd like, I can expand any section into a checklist or create GitHub Issues for the milestones above.

## Key Projects (showcase entries)

- AI-Powered PDF Summarizer
	- Stack: Python, LangChain, OpenAI / FAISS, Streamlit, AWS EC2
	- Summary: RAG-based system to process and summarize long PDFs. Includes LLM orchestration, chunking and retrieval, and CI/CD with GitHub Actions for production deployment.

- Credit Card Fraud Detection
	- Stack: Python, Scikit-learn, SMOTE, Random Forest
	- Summary: Trained Random Forest on an imbalanced dataset (284k+ transactions) with SMOTE augmentation — achieved ~94% accuracy and published results.

- Face Recognition Attendance System
	- Stack: Flask, OpenCV, KNN, REST API
	- Summary: Real-time attendance automation for 100+ students with ~92% accuracy and a RESTful backend.

- Social Network — Academic Portal
	- Stack: Next.js (or React), Node.js, MongoDB, Redis, Docker, Kubernetes, AWS
	- Live: https://social-network-final.vercel.app/
	- Summary: Full-stack academic social network with JWT auth, RBAC, Redis caching, and CI/CD; supports 300+ users and was deployed with container orchestration.

- RewardSync — Recruitment Incentive Platform
	- Stack: React, Vite, Tailwind CSS, Node.js, Express, MongoDB
	- Live: https://reward-sync.vercel.app/login
	- Summary: Full-stack recruitment incentive management platform with role-based dashboards, JWT auth, automated eligibility and duplicate claim prevention, Excel report export using ExcelJS, and business rules for recovery/claims tracking.

## Visual & UX Improvements (suggestions)

- Add individual project case study pages with: problem, solution, architecture diagram, tech stack, screenshots, and measurable outcomes.
- Include live demo links and short embedded screencasts/GIFs for interactive projects (e.g., Social Network, RewardSync).
- Add a compact project gallery/cards grid so visitors can scan work quickly with hover states showing tech tags and short metrics.
- Improve hero section with a concise tagline, action buttons (View Projects, Contact), and a subtle animated 3D scene that links to the case study.
- Use consistent typographic scale, spacing, and color accents to highlight metrics (e.g., "94% accuracy", "300+ users").
-- Add a clear "Hire me" contact flow and prominent contact CTA on the site.

If you'd like I can update the portfolio site copy in `src/data/` and create individual project markdown files (or JSON data entries) for each project so the site renders the new resume and project information automatically.
