import { initializeApp } from '@firebase/app';

// Firebase config - replace with your project's config from Firebase Console
// Go to Project Settings > General > Your apps > Add app (Web)
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'elevate-at-smountain.firebaseapp.com',
  projectId: 'elevate-at-smountain',
  storageBucket: 'elevate-at-smountain.firebasestorage.app',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase (only when config is set)
if (firebaseConfig.apiKey && firebaseConfig.apiKey !== 'YOUR_API_KEY') {
  initializeApp(firebaseConfig);
}

// App entry point
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app.innerHTML = `
    <main class="hero">
      <h1>Elevate at Smountain</h1>
      <p>Your website is ready. Edit <code>src/main.js</code> to get started.</p>
    </main>
  `;
});
