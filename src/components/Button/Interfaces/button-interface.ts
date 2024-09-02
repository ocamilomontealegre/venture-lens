import { ButtonHTMLAttributes, type ReactNode } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly text: string;
  readonly children?: ReactNode;
}
