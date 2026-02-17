import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK2rw1PSmfpIxlJdlEMWQRNikfJuy17aY",
  authDomain: "store-teles.firebaseapp.com",
  projectId: "store-teles",
  storageBucket: "store-teles.firebasestorage.app",
  messagingSenderId: "349222177486",
  appId: "1:349222177486:web:2e95df839c51b276575e9f",
  measurementId: "G-GG20CL9C4J"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços que vamos usar
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);