// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBH3P1pcxRYea0vut2Odw6yX58hFPqIlbA",
 authDomain: "my-portfolio-project-dc149.firebaseapp.com",
 projectId: "my-portfolio-project-dc149",
storageBucket: "my-portfolio-project-dc149.firebasestorage.app",
messagingSenderId: "53510149921",
appId: "1:53510149921:web:1bc7e43cb6a3e066d45060",
 measurementId: "G-FFEQX9LBNN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();
