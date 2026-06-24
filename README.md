# Developer Portfolio

A high-performance, responsive developer portfolio showcasing engineering milestones, interactive architecture diagrams, and specialized full-stack video mockups. Built with Next.js 14, React, Tailwind CSS, and TypeScript.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (with native dark mode support)
- **Icons:** Lucide React
- **Components:** Modular architecture with highly isolated feature sections (`TuringoSection`, `EsoSection`, `YouTubeSection`)

---

## 🚀 Key Implementation Highlights

### 1. Dynamic Infrastructure Diagrams

- **ESO Pipeline:** Implements a custom, pixel-perfect layout representing a real-time log ingestion pipeline:
  $$\text{Instruments} \longrightarrow \text{Elasticsearch Database} \longrightarrow \text{Jupyter Notebooks} \longrightarrow \text{Voilà Web Server}$$
- Uses absolute positioning layout rules behind a responsive grid to ensure complex connection vectors remain center-aligned across multiple viewports without layout shifts.

### 2. Multi-Media Performance Ingestion

- **YouTube Work Section:** Integrates a responsive, three-column mobile-viewport mock framework displaying high-fidelity engineering teasers with customized video buffer rendering and auto-loop hardware acceleration.

### 3. Styled Visual Accent Language

- Custom theme orchestration applying precise hexadecimal design configurations (`#febab9` highlights) to unify interactive elements, typography hover animations, and infrastructure system map boundaries.

---

## 📦 Project Directory Structure

```text
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Tab metadata and root configuration
│   │   └── page.tsx         # Central grid views container layout
│   └── components/
│       ├── YouTubeSection.tsx # Video assets grid
│       ├── TuringoSection.tsx # Vue.js/Node infrastructure mockup
│       └── EsoSection.tsx     # Telemetry data pipeline canvas
```
