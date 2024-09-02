import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "@services/sign-in-with-google-service";
import type { FormEvent } from "react";
import type { UserCredential } from "firebase/auth";
import type { IUseAuth } from "../interfaces/use-auth-interface";
import type { IUserAuth } from "@common/interfaces/userAuth-interface";

export const useAuth = (): IUseAuth => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSimpleAuth = async (
    event: FormEvent<HTMLElement>,
    method: ({ email, password }: IUserAuth) => Promise<UserCredential>,
  ): Promise<void> => {
    event.preventDefault;
    setError("");

    try {
      await method({ email, password });
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setError(`Login error, please review your email and password, ${errorMessage}`);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setError(`Google sign-in error: ${errorMessage}`);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSimpleAuth,
    handleGoogleSignIn,
  };
};
