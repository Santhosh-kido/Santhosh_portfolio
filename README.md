# Santhosh R — Personal Portfolio

A fast, accessible, single-page portfolio built with **React** and **Vite**, tailored for Java Full-Stack and Backend Developer opportunities, internships, and fresher roles. Configured for effortless deployment on **Netlify**.

---

## 🎯 Architecture & Design Direction

- **Clean Editorial Aesthetics**: Refined typography with *Newsreader* (serif headings), *DM Sans* (body), and *JetBrains Mono* (code, tags, metrics). Self-hosted via `@fontsource` packages with zero external Google Fonts requests.
- **Zero-Flash Theme Engine**: Seamless light and dark themes based on CSS variables and `data-theme`. Persists to `localStorage` and falls back to system preference (`prefers-color-scheme`), initialized before first paint.
- **Projects as Centerpiece**: Highlights the deployed *Workforce Management System* (AWS EC2 / Spring Boot / PostgreSQL / React) alongside ML projects and upcoming extensions.
- **Single Source of Truth**: All copy, links, metrics, skills, and projects live in `src/data/content.js`.
- **Built-in Netlify Form**: Serverless contact form handling with honeypot spam protection and accessible inline feedback states.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and npm installed.

### Installation

Clone or open the repository directory:

```bash
cd /home/santhosh/.gemini/antigravity/scratch/santhosh-portfolio
npm install
```

### Local Development

Start the local development server:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Production Build

Create an optimized static build in `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📝 How to Update Portfolio Content

All personal details, skills, experience, education, and projects are centralized in:

📂 `src/data/content.js`

To customize:
1. **GitHub Repositories**: Update each project's `github` property (marked with `// TODO: replace with the exact repo URL`).
2. **Contact Info & Socials**: Edit `email`, `phone`, `github`, and `linkedin` fields in `personalData` and `contactData`.
3. **Skills & Tech Stacks**: Add or reorder categories in `skillsData`.
4. **Projects**: Add new projects or update in-progress milestones in `projectsData`.

---

## 🖼️ Assets to Supply Manually

1. **Profile Picture (`/public/profile.jpg`)**:
   - Place your real headshot or portrait at `public/profile.jpg` (recommended aspect ratio: 1:1, e.g., 600x600px).
   - If missing or unreadable, the site automatically renders a clean fallback avatar with your initials.

2. **Resume PDF (`/public/resume.pdf`)**:
   - Replace the starter placeholder PDF at `public/resume.pdf` with your updated professional resume.

---

## 🌐 Deploying to Netlify

This project is pre-configured with `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deploy via Netlify CLI:
```bash
npx netlify deploy --prod
```

### Deploy via Git (GitHub / GitLab):
1. Push your repository to GitHub.
2. Log in to [Netlify](https://app.netlify.com/) and select **"Add new site"** > **"Import an existing project"**.
3. Netlify will auto-detect Vite's build settings (`npm run build` & `dist`).
4. Click **Deploy Site**. Netlify Forms will automatically detect the contact form from `index.html`.

---

## 📄 License

© 2026 Santhosh R. All rights reserved.
