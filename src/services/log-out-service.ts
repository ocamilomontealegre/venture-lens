import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

export const logOut = async (): Promise<void> => {
  return signOut(auth);
};
