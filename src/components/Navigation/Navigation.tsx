import { Link } from "react-router-dom";
import { Button } from "@components/Button/Button";
import { useAuth } from "@common/hooks/useAuth";
import type { ReactNode } from "react";
import type { INavigationProps } from "./interfaces/navigation-interface";

export const Navigation = ({ ...props }: Readonly<INavigationProps>): ReactNode => {
  const { user } = useAuth();
  console.log("🚀 ~ Navigation ~ user:", user);

  const menu = [
    { text: "gallery", path: "gallery" },
    ...(!user ? [{ text: "login", path: "login" }] : []),
  ];

  return (
    <nav {...props}>
      {menu.map((menuItem, index) => (
        <Link
          key={index + 1}
          to={menuItem.path}
          className="w-fit h-fit px-3 rounded-3xl text-sm lg:text-lg bg-gradient-to-r from-fusion-red to-fuchsia-fever"
        >
          <Button className="uppercase" text={menuItem.text} />
        </Link>
      ))}
    </nav>
  );
};
