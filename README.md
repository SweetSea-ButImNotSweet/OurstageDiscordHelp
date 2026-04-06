# OurStage Account Link Guide

A localized, web-based guide designed to help users link their **OurStage** accounts to Discord. This project provides a step-by-step visual instruction set, mimicking the Discord UI for a seamless user experience across multiple languages.

| English                          | Vietnamese                          |
| -------------------------------- | ----------------------------------- |
| ![English](example/guide_en.gif) | ![Vietnamese](example/guide_vi.gif) |

## 🚀 Features

- Multi-language support
- Step-by-step visual illustrations
- Automated GIF export for easy sharing and Discord bookmarking

## 🛠️ Technology Stack

- **Frontend**: HTML5, Vanilla JavaScript (ES Modules)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Internationalization**: [i18next](https://www.i18next.com/)
- **Automation**: [Puppeteer](https://pptr.dev/), [Sharp](https://sharp.pixelplumbing.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd OurstageDiscord
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

### Development

Run the development server:

```bash
npm run dev
```

### Automation: Capturing Screenshots

To generate localized screenshots for all supported languages, run:

```bash
npm run capture
```

The output will be saved in the `output/` directory.

You can also specify the flag `-- --lang={lang}` (replacing `lang` with the language code, check supported language list below)

### Build for Production

To create an optimized production build:

```bash
npm run build
```

## 📂 Project Structure

- `locales/`: contains JSON translation files for each language (e.g., `en.json`, `vi.json`, `ja.json`).
- `capture.js`: The automation script that uses Puppeteer to cycle through languages and take screenshots.
- `main.js`: The core logic for initializing i18n and rendering the guide.
- `index.html`: The main visual structure of the guide.
- `style.css`: Custom styling and Discord-specific UI overrides.

## 🌐 Supported Languages

Currently, the guide is available in:

| Language            | Contributor            |
| ------------------- | ---------------------- |
| English             | BaoCreta, SweetSea     |
| Vietnamese          | BaoCreta, SweetSea     |
| Japanese            | -                      |
| Korean              | TK50P                  |
| Chinese             | _not_kim               |
| Russian             | Seripchik              |
| Spanish             | fka dayla (cinemagirl) |
| Italian             | Alessietto             |
| Portuguese - Brazil | yoki_to10              |

---

Developed with ❤️ for the OurStage community.
