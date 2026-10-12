// Firebase Config
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDcpM2rf6P2CiTMtc98_DaJqJdotTXw2AW",
    authDomain: "jurnal-pkl-8533e.firebaseapp.com",
    projectId: "jurnal-pkl-8533e",
    storageBucket: "jurnal-pkl-8533e.firebasestorage.app",
    messagingSenderId: "379468751359",
    appId: "1:379468751359:web:e283f10ae6ccac40a8c7ca"
};

// Init Firebase (COMPAT)
firebase.initializeApp(FIREBASE_CONFIG);

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