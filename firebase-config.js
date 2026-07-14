// Firebase project config for Cooking with the Matt's.
// This key is safe to be public — it just identifies the project,
// it is not a secret. Access is controlled by Firestore security rules
// (only logged-in users can write) and by the accounts you create in
// the Firebase console (only you and Nate).
const firebaseConfig = {
  apiKey: "AIzaSyBr8z1Fd00npp2nAmjn-YlqZbSflrNTdq0",
  authDomain: "sands-cooking-app.firebaseapp.com",
  projectId: "sands-cooking-app",
  storageBucket: "sands-cooking-app.firebasestorage.app",
  messagingSenderId: "773556192834",
  appId: "1:773556192834:web:d06fbd8e05e64833d34fdb",
  measurementId: "G-0FQ3L71NNX"
};

// If the Firebase SDK scripts or this file fail to load (slow network,
// ad blocker, wrong file path, etc.), the rest of the site should still
// work — recipes just won't sync to the cloud until it's fixed.
window.firebaseReady = false;
try {
  firebase.initializeApp(firebaseConfig);
  window.auth = firebase.auth();
  window.db = firebase.firestore();
  window.firebaseReady = true;
} catch (e) {
  console.error("Firebase failed to initialize — cloud sync disabled:", e);
}
