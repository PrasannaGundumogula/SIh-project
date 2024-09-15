import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyCpQGJ1665x3xJVxfjq4Q2M6N3sA9GUOjQ",
  authDomain: "parsing-sih.firebaseapp.com",
  projectId: "parsing-sih",
  storageBucket: "parsing-sih.appspot.com",
  messagingSenderId: "150215076485",
  appId: "1:150215076485:web:b232ed93389de62e9c97ec",
  measurementId: "G-MW14H8TXVZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Sign Up
document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password === confirmPassword) {
    try {
      await createUserWithEmailAndPassword(auth, username, password);
      alert('User signed up successfully!');
    } catch (error) {
      console.error('Error during sign-up:', error);
      alert('Error during sign-up');
    }
  } else {
    alert('Passwords do not match');
  }
});

// Handle Login
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  try {
    await signInWithEmailAndPassword(auth, username, password);
    alert('User logged in successfully!');
  } catch (error) {
    console.error('Error during login:', error);
    alert('Error during login');
  }
});
