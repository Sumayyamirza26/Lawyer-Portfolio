# Lawyer Portfolio

A modern, elegant, and fully responsive frontend portfolio website built for **Adv. Sajad Ahmad Mir** — Advocate, Legal Consultant, and Public Speaker (Founder of Sajad Mir & Associates).

---

## 🚀 Live Demo

🔗 **Live Website:** [https://lawyer-portfolio-rosy.vercel.app/](https://lawyer-portfolio-rosy.vercel.app/)

---

## 📌 Project Overview

A modern, frontend-only portfolio website designed for **Adv. Sajad Ahmad Mir** (Founder of Sajad Mir & Associates). It provides an authoritative digital presence where prospective clients can explore practice areas, review career milestones, read testimonials, and easily book legal consultations.

> **Note:** This is a purely client-side frontend application running entirely in the browser with no backend or database dependencies.

---

## ✨ Features

* **Responsive Layout**: Clean, adaptable design across mobile, tablet, and desktop devices.
* **Sticky Navigation**: Glassmorphic navbar with active section scrollspy and a mobile drawer menu.
* **Scroll Indicators**: Real-time top scroll progress bar and a floating return-to-top button.
* **Branded Preloader**: Smooth intro loading screen built with Framer Motion.
* **Animated Counter**: Viewport-triggered statistics highlighting legal experience and cases handled.
* **Practice Areas Grid**: Interactive service cards detailing 8 core legal practice areas.
* **Milestone Timeline**: Structured chronological showcase of legal experience and professional growth.
* **Testimonials Carousel**: Client review slider featuring automatic playback and manual controls.
* **Quick Contact**: One-click consultation booking via email (`mailto:`) and a fixed WhatsApp chat button.
* **Scroll-Reveal Animations**: Lightweight entrance transitions powered by an `IntersectionObserver` hook.

---

## 🛠️ Tech Stack

* **React (v18)** – Component-based UI library
* **Vite** – Next-generation frontend tooling and local development server
* **Tailwind CSS** – Utility-first CSS framework for custom styling and layouts
* **React Router (v6)** – Client-side routing infrastructure
* **Framer Motion** – Animation and motion library for interactive components
* **Lucide React** – Clean, modern SVG icon library
* **PostCSS & Autoprefixer** – Automated CSS transformation and vendor prefixing

---

## 📂 Project Structure

```text
lawyer-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── image.png
│   │       └── placeholder.txt
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Expertise.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── MediaFeatures.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProfessionalProfile.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── Testimonials.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── WhyChooseMe.jsx
│   ├── data/
│   │   └── content.js
│   ├── hooks/
│   │   └── useReveal.js
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation & Setup

Ensure you have [Node.js](https://nodejs.org/) (version 18 or higher recommended) and npm installed.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sumayyamirza26/lawyer-portfolio.git
   ```

2. **Navigate to the project root**:
   ```bash
   cd lawyer-portfolio
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

---

## 💻 Running the Project

Start the local development server:

```bash
npm run dev
```

Once started, open the local URL provided in the terminal (typically `http://localhost:5173`) in your browser to view the application.

### Additional Build Commands

* **Build for Production**:
  ```bash
  npm run build
  ```
* **Preview Production Build**:
  ```bash
  npm run preview
  ```

---

## 🧑‍💻 Author

**Sumayya Mirza**

* GitHub: [https://github.com/Sumayyamirza26](https://github.com/Sumayyamirza26)
* LinkedIn: [https://linkedin.com/in/sumayya-mirza](https://linkedin.com/in/sumayya-mirza)
