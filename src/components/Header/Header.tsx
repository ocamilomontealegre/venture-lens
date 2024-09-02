import { Logo } from "@components/Logo/Logo";
import { Navigation } from "@components/Navigation/Navigation";
import type { ReactNode } from "react";
import type { IHeaderProps } from "./interfaces/header-interface";

export const Header = ({ ...props }: IHeaderProps): ReactNode => {
  return (
    <header {...props}>
      <Logo className="text-lg lg:text-3xl text-fuchsia-fever font-extrabold" text="VentureLens" />
      <Navigation className="flex gap-2" />
    </header>
  );
};
