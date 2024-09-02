import type { ReactNode } from "react";

export interface IProtectedRouteProps {
  readonly redirectPath?: string;
  readonly children?: ReactNode;
}
