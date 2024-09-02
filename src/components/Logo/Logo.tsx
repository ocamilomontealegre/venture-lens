import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import type { ILogoProps } from "./interfaces/logo-interface";

export const Logo = ({ text, ...props }: Readonly<ILogoProps>): ReactNode => {
  return (
    <div {...props}>
      <Link to={"/"}>{text}</Link>
    </div>
  );
};
