import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDkYhznpw7AqP9FFLvbEtIR9VSEo60tIHk",
  authDomain: "venturelens-b3402.firebaseapp.com",
  projectId: "venturelens-b3402",
  storageBucket: "venturelens-b3402.appspot.com",
  messagingSenderId: "964849304847",
  appId: "1:964849304847:web:b4300e3aae4914f954aa7a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
