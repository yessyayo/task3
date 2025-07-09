import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDJLnYo07Nik0z-tdGT49QK49kqCL6GLcw',
  authDomain: 'task3-1393d.firebaseapp.com',
  projectId: 'task3-1393d',
  storageBucket: 'task3-1393d.firebasestorage.app',
  messagingSenderId: '906889048344',
  appId: '1:906889048344:web:dc19573e68fd8d48e0ae6d'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
