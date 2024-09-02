import { Hero } from "./components/Hero/Hero";
import type { ReactNode } from "react";

export const Home = (): ReactNode => {
  return <Hero className="col-span-12 flex flex-col justify-center lg:flex-row gap-6" />;
};
