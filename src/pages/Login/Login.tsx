import { AuthForm } from "./components/AuthForm/AuthForm";
import type { ReactNode } from "react";

export const Login = (): ReactNode => {
  const styles = {
    backgroundImage: "url(/public/landscape.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="col-span-12 h-full flex">
      <div className="hidden lg:block w-1/2" style={styles}></div>
      <AuthForm />
    </div>
  );
};
