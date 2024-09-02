import Confetti from "react-confetti";
import { Toaster, toast } from "react-hot-toast";
import { Button } from "@components/Button/Button";
import { logIn, signUp } from "@services/index";
import { useConfetti } from "@common/hooks/useConfetti";
import { useAuth } from "@pages/Login/hooks/useAuth";
import { ToastMessagesEnum } from "@pages/Login/enums/toast-messages-enum";
import type { MouseEvent } from "react";

export const AuthForm = () => {
  const { email, setEmail, password, setPassword, error, handleSimpleAuth, handleGoogleSignIn } =
    useAuth();
  const { handleConfetti, showConfetti } = useConfetti();

  const handleSubmitLogin = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await handleSimpleAuth(event, logIn);
    toast(ToastMessagesEnum.LOGIN);
  };

  const handleSubmitSignUp = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await handleSimpleAuth(event, signUp);
    toast(ToastMessagesEnum.SIGNUP);
    handleConfetti();
  };

  const handleGoogleSignUp = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await handleGoogleSignIn();
    toast(ToastMessagesEnum.SIGNUP);
    handleConfetti();
  };

  return (
    <div className="flex flex-col justify-center gap-2 w-full lg:w-1/2 px-16 text-black bg-white">
      <div>
        <img className="w-9" src="hand_wave.png" alt="Hand Wave" />
        <h2 className="font-bold text-3xl">Welcome to VentureLens!</h2>
      </div>
      <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col">
          <label htmlFor="email-input">Email</label>
          <input
            className="h-12 p-2 rounded-3xl border-gray-200 border-2 bg-white"
            id="email-input"
            type="email"
            name="email"
            value={email}
            required
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password-input">Password</label>
          <input
            className="h-12 p-2 rounded-3xl border-gray-200 border-2 bg-white"
            id="password-input"
            type="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div className="flex flex-row gap-8 text-white font-bold">
          <Button
            text="Login"
            className="w-1/2 h-12 rounded-3xl bg-gradient-to-r from-fusion-red to-fuchsia-fever"
            onClick={handleSubmitLogin}
          />
          <Button
            text="Sign Up"
            className="w-1/2 h-12 rounded-3xl bg-gradient-to-r from-fusion-red to-fuchsia-fever"
            onClick={handleSubmitSignUp}
          />
        </div>
        <button
          className="flex justify-center items-center gap-3 h-12 rounded-3xl border-gray-200 border-2 font-bold"
          onClick={handleGoogleSignUp}
        >
          <img className="size-6" src="google-logo.png" alt="Google Logo" />
          Sing Up with Google
        </button>
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={300}
            gravity={0.6}
            recycle
          />
        )}
      </form>
      <Toaster position="bottom-right" />
    </div>
  );
};
