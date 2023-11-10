import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfTgcOcF0olicnzuDTXdjF-uCtPAJ_DP8",
  authDomain: "login-tailwind-b7ae7.firebaseapp.com",
  projectId: "login-tailwind-b7ae7",
  storageBucket: "login-tailwind-b7ae7.appspot.com",
  messagingSenderId: "1035323301320",
  appId: "1:1035323301320:web:7417237445a970754934fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;