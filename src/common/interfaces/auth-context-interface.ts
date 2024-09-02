import { User } from "firebase/auth";

export interface IAuthContext {
  readonly user: User | null;
}
