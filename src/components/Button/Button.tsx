import { IButtonProps } from "./Interfaces/button-interface";

export const Button = ({ children, text, ...props }: Readonly<IButtonProps>) => {
  return (
    <button {...props}>
      {children}
      {text}
    </button>
  );
};
