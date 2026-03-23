# Elevate @ South Mountain

Luxury apartment community landing page—CALCAP-managed, South Phoenix.

## Tech Stack

- **Next.js 14** – React framework with static export
- **Tailwind CSS** – Styling
- **Firebase Hosting** – Project: `elevate-at-smountain`
- **GitHub** – [refiniti-ai/elevate-at-smountain](https://github.com/refiniti-ai/elevate-at-smountain)

## Setup

```bash
npm install
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server at http://localhost:3000 |
| `npm run build` | Static export to `out/` |
| `firebase deploy --only hosting` | Deploy to Firebase |

## Deploy

```bash
npm run build
firebase use elevate-at-smountain
firebase deploy --only hosting
```

## GitHub

- **Remote:** `https://github.com/refiniti-ai/elevate-at-smountain.git`
- **Branch:** `main`
