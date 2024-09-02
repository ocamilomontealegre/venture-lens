import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase-config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error(`Error signing with Google ${errorMessage}`);
    throw error;
  }
};
