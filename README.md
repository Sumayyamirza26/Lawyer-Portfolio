# Lawyer Portfolio

A modern, elegant, and fully responsive frontend portfolio website built for **Adv. Sajad Ahmad Mir** — Advocate, Legal Consultant, and Public Speaker (Founder of Sajad Mir & Associates).

---

## 📌 Project Overview

This project is a dedicated professional portfolio website designed to showcase legal services, expertise domains, professional milestones, and client testimonials with an authoritative and refined visual aesthetic.

* **Purpose**: To provide a credible digital presence for a legal advocate, enabling prospective clients to explore practice areas, understand professional credentials, and easily schedule consultations.
* **What Users Can Do**:
  * Explore core legal practice areas including Civil Litigation, Criminal Law, Family Law, Property Disputes, and Business Advisory.
  * Learn about the advocate's background, professional credentials, and core practice values.
  * View dynamic metric counters highlighting cases handled, practice areas, and years of experience.
  * Follow an interactive timeline tracing career milestones and legal achievements.
  * Read client feedback through an automated, interactive testimonials carousel.
  * Connect directly via client-side email consultation booking or instant WhatsApp messaging.
  * Smoothly navigate between sections using a responsive navigation bar or return to the top via a quick scroll button.
* **Architecture**: This is a **frontend-only project**. It runs entirely in the client's browser with no server, database, or backend API integrations.

---

## ✨ Features

* **Responsive Design**: Fluid layout tailored for mobile devices, tablets, laptops, and desktop screens.
* **Intro Loading Screen**: Framer Motion preloader with ambient gold glow and loading indicators before rendering content.
* **Live Scroll Progress Bar**: A sleek progress bar at the very top of the page that tracks user scroll depth in real time.
* **Sticky Navigation Bar**:
  * Glassmorphism background transition on scroll.
  * Active section scrollspy highlighting.
  * Mobile drawer menu with smooth toggle controls.
* **Hero Section**: Advocate presentation featuring a stylized portrait card with subtle floating motion, gold gradient typography, and media feature credentials.
* **Animated Statistics**: IntersectionObserver-powered animated counters displaying key metrics as they enter the viewport.
* **Practice Areas Grid**: 8 distinct legal service cards with Lucide icons, hover elevation, and direct consultation triggers.
* **Career Timeline**: Alternating milestone cards detailing professional growth from foundation to ethical advocacy.
* **Interactive Testimonials Carousel**:
  * Automatic slide rotation every 5 seconds.
  * Interactive slide navigation dots.
  * Previous and next control buttons.
* **Quick Contact Integrations**:
  * Direct `mailto:` action button for booking confidential consultations.
  * Floating WhatsApp button for instant messaging.
* **Scroll-to-Top Button**: Floating return-to-top button that smoothly appears when scrolling down the page.
* **Scroll-Reveal Animations**: Lightweight custom React hook (`useReveal`) managing staggered fade-and-slide entry effects.
* **Accessibility & Reduced Motion**: Full support for `:focus-visible` navigation and `prefers-reduced-motion` media queries.

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

## 🎨 Design & UI

* **Color Palette**:
  * **Deep Navy (`#0F172A`)**: Primary background conveying authority, solemnity, and prestige.
  * **Warm Gold (`#D4AF37`)**: Accent color symbolizing justice, excellence, and quality.
  * **Light Surface (`#F8FAFC`)**: Clean, contrasting background for practice and testimonial sections.
* **Typography**:
  * **Display Font**: *Playfair Display* (classic serif) for headlines, imparting legal tradition and distinction.
  * **Body Font**: *Inter* (modern sans-serif) for clean readability and interface elements.
* **Visual Motifs**: Subtle geometric grid backgrounds, hairline gold dividers, corner borders, and glassmorphic card elements with soft backdrop blurs.
* **Motion & Responsiveness**: Fluid grid layouts paired with subtle scroll-reveal entrance effects, optimized for seamless viewing across all screen dimensions.

---

## 🧑‍💻 Author

**Sumayya Mirza**

* GitHub: [https://github.com/Sumayyamirza26](https://github.com/Sumayyamirza26)
* LinkedIn: [https://linkedin.com/in/sumayya-mirza](https://linkedin.com/in/sumayya-mirza)
