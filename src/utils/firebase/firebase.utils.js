import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBLDx_yKtqAMmOguXB0VcM_E_YI00aCmA",
  authDomain: "roadster-db.firebaseapp.com",
  projectId: "roadster-db",
  storageBucket: "roadster-db.firebasestorage.app",
  messagingSenderId: "351338269726",
  appId: "1:351338269726:web:03d522c973af7fae6db20f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
