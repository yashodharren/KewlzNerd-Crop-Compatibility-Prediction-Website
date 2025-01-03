import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCd_frnaLWOTRAvnZobTOheQuA7yerfik4",
  authDomain: "kewlznerd.firebaseapp.com",
  projectId: "kewlznerd",
  storageBucket: "kewlznerd.firebasestorage.app",
  messagingSenderId: "183542027281",
  appId: "1:183542027281:web:7934d3ab47ced8042f8db0",
  measurementId: "G-2DY4PDMM1P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);