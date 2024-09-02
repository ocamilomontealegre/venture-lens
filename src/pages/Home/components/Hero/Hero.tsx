import { Button } from "@components/Button/Button";
import { TakePicture } from "@components/TakePicture/TakePicture";
import { useState, type ReactNode } from "react";
import type { IHeroProps } from "./interfaces/hero-interface";

export const Hero = ({ ...props }: Readonly<IHeroProps>): ReactNode => {
  const [showCamera, setShowCamera] = useState(false);

  const handleCaptureClick = () => {
    setShowCamera(true);
  };

  return (
    <section className="relative" {...props}>
      <div className="flex flex-col p-1 lg:p-12 gap-2 w-full lg:w-1/2">
        <h1 className="text-5xl font-bold text-black">Share your adventures to the whole world</h1>
        <Button
          className="w-1/3 h-fit py-2 px-3 rounded-3xl text-sm lg:text-lg uppercase bg-gradient-to-r from-fusion-red to-fuchsia-fever"
          text="capture"
          onClick={handleCaptureClick}
        />
      </div>
      <div className="w-full lg:w-1/2">
        <img className="rounded-3xl" src="/sakura-landscape.jpg" alt="Sakura tree landscape" />
      </div>
      {showCamera && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <TakePicture onClose={() => setShowCamera(false)} />
        </div>
      )}
    </section>
  );
};
