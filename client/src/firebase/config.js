import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCHHwtFD4CuA7aYvhGIt4_0-92chtEWKec",
  authDomain: "stayio.firebaseapp.com",
  projectId: "stayio",
  storageBucket: "stayio.firebasestorage.app",
  messagingSenderId: "675588126739",
  appId: "1:675588126739:web:0df2bc104f3e34a5af27e6",
  measurementId: "G-YFBD0P0VVV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
