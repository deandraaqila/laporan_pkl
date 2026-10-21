// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCIuVEKS9kwcpOk4G44agi01I4VBRkQa3M",
  authDomain: "laporan-pkl-4b426.firebaseapp.com",
  projectId: "laporan-pkl-4b426",
  storageBucket: "laporan-pkl-4b426.firebasestorage.app",
  messagingSenderId: "166230915711",
  appId: "1:166230915711:web:9ea4e1b5a6c99979d31d4a",
  measurementId: "G-JQ8QSDPVQK"
};
// Ubah FIREBASE_CONFIG menjadi firebaseConfig di sini:
firebase.initializeApp(firebaseConfig);

// Global
window.db = firebase.firestore();
window.auth = firebase.auth();
window.firebase = firebase;

console.log('✓ Firebase OK');

// Cloudinary
window.CLOUDINARY_CONFIG = {
    cloudName:"vlgm2xnu",
    uploadPreset: "laporan-pkl"
};