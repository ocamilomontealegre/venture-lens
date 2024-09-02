import type { HTMLProps } from "react";

export interface ILogoProps extends HTMLProps<HTMLDivElement> {
  readonly text: string;
}
