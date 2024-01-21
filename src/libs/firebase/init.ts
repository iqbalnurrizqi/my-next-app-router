// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoSwnKM3sCfwMq2nWNWtWajDplcRVGmnQ",
  authDomain: "my-next-app-bb1b9.firebaseapp.com",
  projectId: "my-next-app-bb1b9",
  storageBucket: "my-next-app-bb1b9.appspot.com",
  messagingSenderId: "738722683328",
  appId: "1:738722683328:web:541f91f9b86a45ee1ed025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app