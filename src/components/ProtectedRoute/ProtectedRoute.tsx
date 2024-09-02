import { Navigate } from "react-router-dom";
import { useAuth } from "@common/hooks/useAuth";
import type { ReactNode } from "react";
import type { IProtectedRouteProps } from "./interfaces/protected-route-interface";

export const ProtectedRoute = ({
  children,
  redirectPath = "/login",
}: Readonly<IProtectedRouteProps>): ReactNode => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};
