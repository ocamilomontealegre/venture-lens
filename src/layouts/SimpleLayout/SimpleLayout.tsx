import type { ReactNode } from "react";
import type { ISimpleLayoutProps } from "./interfaces/simplelayout-interface";

export const SimpleLayout = ({ children }: Readonly<ISimpleLayoutProps>): ReactNode => {
  return <main className="grid grid-cols-12 size-full">{children}</main>;
};
