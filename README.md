# Elevate at Smountain

Website built with Vite, deployed on Firebase Hosting, version-controlled on GitHub.

## Tech Stack

- **Vite** – Fast build tool
- **Firebase Hosting** – Global CDN, HTTPS, project ID: `elevate-at-smountain`
- **GitHub** – Source control: [refiniti-ai/elevate-at-smountain](https://github.com/refiniti-ai/elevate-at-smountain)

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Get Firebase Web Config

1. Open [Firebase Console](https://console.firebase.google.com/) and select the `elevate-at-smountain` project.
2. Click the gear icon → **Project settings** → **General**.
3. Under **Your apps**, click **Add app** → Web (</>).
4. Copy the config object into `src/main.js` (replace the placeholder `firebaseConfig`).

### 3. Login to Firebase CLI (if not already)

```bash
npm install -g firebase-tools
firebase login
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server at http://localhost:5173 |
| `npm run build` | Build for production (output: `dist/`) |
| `npm run preview` | Preview production build locally |
| `firebase deploy --only hosting` | Deploy to Firebase Hosting |

## Deploy to Firebase

Deploys **only** to project `elevate-at-smountain` (see `.firebaserc`). Other Firebase projects are unaffected.

```bash
npm run build
firebase use elevate-at-smountain   # Explicit project (optional, already set)
firebase deploy --only hosting     # Hosting only, no Firestore/Functions
```

## GitHub

- **Remote:** `https://github.com/refiniti-ai/elevate-at-smountain.git`
- **Branch:** `main`
- **Isolation:** This repo only pushes to its own remote; other projects use separate folders/repos.

To push your first commit:

```bash
git add .
git commit -m "Initial setup: Vite + Firebase + GitHub"
git push -u origin main
```

## Optional: Firebase GitHub Action

For automatic deploys on push, add GitHub Actions with Firebase service account credentials. See [Firebase Hosting GitHub Action](https://github.com/marketplace/actions/deploy-to-firebase-hosting).
