# AI Engineer Portfolio

A modern portfolio website for Abinand B Arjun, showcasing AI engineering work, projects, experience, and contact details. The site is built with React and Vite, and includes animated sections, custom UI effects, interactive project cards, and a terminal-inspired developer aesthetic.

## Overview

This portfolio is designed to present:

- AI and ML engineering expertise
- Featured project highlights
- Professional experience and career timeline
- Skills and technology stack
- Contact and social links
- Responsive, polished UI with motion-based transitions

## Tech Stack

- React 19
- Vite 8
- React Router
- Framer Motion
- Tailwind CSS
- Lucide React
- canvas-confetti
- simple-icons

## Features

- Dynamic single-page portfolio experience
- Animated section transitions and motion effects
- Custom cursor and interactive visual styling
- Responsive layout for desktop and mobile devices
- Theme-aware UI with light/dark support
- Projects and experience sections driven by structured portfolio data
- Terminal-style command display and developer-themed elements

## Project Structure

```bash
Portfolio/
├── public/
│   └── projects/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── pages/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── public/
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The app will be available in the default Vite development server URL, usually:

```bash
http://localhost:5173
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Content Customization

Portfolio content is centralized in:

- `src/data/portfolioData.js`

You can update:

- personal bio and contact details
- project descriptions and links
- work experience
- skill categories
- terminal command outputs

## Notes

This project is built as a personal portfolio for AI/ML engineering work and is ready for customization with your own branding, resume links, social URLs, and project data.

## License

This project is for personal portfolio use. Update or remove the license section as needed for your own deployment.
