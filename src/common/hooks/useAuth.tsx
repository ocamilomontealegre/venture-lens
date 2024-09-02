import { useAuthContext } from "@common/context/AuthContext";
import { IAuthContext } from "@common/interfaces";

export const useAuth = (): IAuthContext => {
  const { user } = useAuthContext();
  return { user };
};
