# Portfolio V5

Hello everyone! 👋

I'm **Jeeva Kaleeswar**, a Full Stack Developer. This is my personal portfolio website built with React — featuring a public-facing site and an admin dashboard. All portfolio data is served from static JSON files with no external backend dependency.

**Live Demo:** [need to update](need to update)

---

## Tech Stack

- **ReactJS** - Frontend framework
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **AOS** - Animate On Scroll library
- **Lucide React** - Icon library
- **Material UI** - React component library
- **SweetAlert2** - Alert dialogs
- **React Helmet Async** - SEO meta tags
- **React Router DOM** - Client-side routing

---

## Pages

### Public
- **Home** — Hero section, about, skills
- **Portfolio** — Projects and certificate gallery loaded from static JSON
- **About** — Background and experience
- **Contact** — Contact form
- **Worked At** — Work history
- **Project Detail** — Individual project page with SEO meta tags

### Admin (Dashboard)
- **Login** — Navigates to the dashboard
- **Dashboard** — Overview panel
- **Projects** — Read-only view of projects from `src/data/projects.json`
- **Certificates** — Read-only view of certificates from `src/data/certificates.json`
- **Comments** — Disabled

---

## Project Data

All portfolio content is stored as static JSON files — no database required.

**`src/data/projects.json`**
```json
[
  {
    "id": 1,
    "title": "Project Name",
    "description": "Project description.",
    "img": "/assets/projects/image.png",
    "link": "https://live-url.com",
    "github": "https://github.com/username/repo",
    "tech_stack": ["React", "Tailwind"],
    "features": ["Feature A", "Feature B"]
  }
]
```

**`src/data/certificates.json`**
```json
[
  {
    "id": 1,
    "title": "Certificate Name",
    "img": "/assets/certificates/image.png"
  }
]
```

Place project images in `public/assets/projects/` and certificate images in `public/assets/certificates/`.

---

## Getting Started

### Prerequisites

- Node.js `>= 14.x`
- npm or yarn

### 1. Clone & Install

```bash
git clone https://github.com/jeevaleo27/Portofolio_V5.git
cd Portofolio_V5
npm install
```

> If you encounter peer dependency issues: `npm install --legacy-peer-deps`

### 2. Environment Variables

Create a `.env` file in the root directory:

```env
APP_URL=https://your-domain.com

HTTPS=true
SSL_CRT_FILE=/path/to/cert.crt
SSL_KEY_FILE=/path/to/key.key
```

`APP_URL` is used for SEO meta tags (Open Graph, Twitter Card, canonical URLs, structured data).

### 3. Run Locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Build for Production

```bash
npm run build
```

Upload the contents of the `dist/` folder to your hosting provider.

---

## Troubleshooting

- Ensure Node.js is installed and you're in the correct directory.
- Restart the dev server after changing `.env` values.
- Clear browser cache if you see stale data.

---

## Credits & Contact

**Jeeva Kaleeswar**
Website: [need to update](need to update) · GitHub: [jeevaleo27](https://github.com/jeevaleo27)

⭐ If this project helped you, consider giving it a star on GitHub!
