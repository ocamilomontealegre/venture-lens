import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config";
import type { UserCredential } from "firebase/auth";
import type { IUserAuth } from "@common/interfaces/userAuth-interface";

export const logIn = async ({ email, password }: Readonly<IUserAuth>): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};
