import { Header } from "@components/Header/Header";
import { Footer } from "@components/Footer/Footer";
import type { ReactNode } from "react";
import type { IMainLayoutProps } from "./interfaces/mainlayout-interface";

export const MainLayout = ({ children }: Readonly<IMainLayoutProps>): ReactNode => {
  return (
    <main className="grid grid-cols-12 size-full py-2 px-8 lg:py-8 lg:px-16 bg-white">
      <Header className="col-span-12 flex justify-between items-center h-1/5" />
      {children}
      <Footer className="col-span-12 flex justify-center h-1/5 text-black" />
    </main>
  );
};
