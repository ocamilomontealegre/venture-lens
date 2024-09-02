import type { Dispatch, FormEvent, MouseEvent, SetStateAction } from "react";
import type { UserCredential } from "firebase/auth";
import type { IUserAuth } from "@common/interfaces/userAuth-interface";

export interface IUseAuth {
  readonly email: string;
  readonly setEmail: Dispatch<SetStateAction<string>>;
  readonly password: string;
  readonly setPassword: Dispatch<SetStateAction<string>>;
  readonly error: string;
  readonly handleSimpleAuth: (
    event: FormEvent<HTMLElement> | MouseEvent<HTMLButtonElement>,
    method: ({ email, password }: IUserAuth) => Promise<UserCredential>,
  ) => Promise<void>;
  readonly handleGoogleSignIn: () => Promise<void>;
}
