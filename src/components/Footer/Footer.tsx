import type { ReactNode } from "react";
import type { IFooterProps } from "./interfaces/footer-interface";

export const Footer = ({ ...props }: Readonly<IFooterProps>): ReactNode => {
  return (
    <footer {...props}>
      <p className="text-sm lg:text-lg text-center">
        Made with Love by<a href="https://github.com/ocamilomontealegre">@ocamilomontealegre</a>
      </p>
    </footer>
  );
};
