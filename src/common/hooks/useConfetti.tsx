import { useState } from "react";

export const useConfetti = () => {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return {
    showConfetti,
    handleConfetti,
  };
};
