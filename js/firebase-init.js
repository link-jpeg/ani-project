// js/firebase-init.js
const firebaseConfig = {
    apiKey: "AIzaSyCqUoFOBJFytvMbeonGdJlQnASIFGNtKEo",
    authDomain: "jujupedia-wiki.firebaseapp.com",
    projectId: "jujupedia-wiki",
    storageBucket: "jujupedia-wiki.firebasestorage.app",
    messagingSenderId: "563999265629",
    appId: "1:563999265629:web:2d898b9c9fcf9b99ca4eb4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Auth
const auth = firebase.auth();

console.log('Firebase initialized');