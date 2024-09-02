import { Camera } from "react-camera-pro";
import { Toaster, toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { Button } from "@components/Button/Button";
import { useAuth } from "@common/hooks/useAuth";
import { useCamera } from "./hooks/useCamera";
import type { ReactNode } from "react";

export const TakePicture = ({ onClose }: { onClose: () => void }): ReactNode => {
  const { user } = useAuth();

  const { cameraRef, image, resetPicture, takePicture, handleUpload, uploading, uploadError } =
    useCamera();

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  const handlePictureUpload = async () => {
    await handleUpload();
    toast("🚀 Picture Uploaded");
  };

  const errorMessages = {
    noCameraAccessible: "No camera found",
  };

  return (
    <div className="relative w-full h-full bg-white flex flex-col items-center justify-between p-4 md:p-8">
      <Button
        className="absolute top-4 right-4 rounded-full p-2 text-white bg-gradient-to-r from-fusion-red to-fuchsia-fever"
        text="Close"
        onClick={onClose}
      />

      <div className="flex flex-col items-center justify-center w-full h-full">
        {!image ? (
          <div className="flex flex-col items-center justify-center w-full h-full md:w-96 md:h-96">
            <Camera ref={cameraRef} aspectRatio={1 / 1} errorMessages={errorMessages} />
            <div className="w-full flex justify-center mt-4">
              <Button
                className="w-full p-2 rounded-full text-white bg-gradient-to-r from-green-400 to-indigo-600"
                text="Take Picture"
                onClick={takePicture}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full md:w-96 md:h-96">
            <img src={image} alt="Captured" className="max-w-full max-h-60 object-cover mb-4" />
            <div className="flex flex-col items-center gap-2 w-full mt-4">
              <Button
                className="w-full p-2 rounded-full text-white bg-gradient-to-r from-green-400 to-indigo-600"
                text="Retake Picture"
                onClick={resetPicture}
              />
              <Button
                className="w-full p-2 rounded-full text-white bg-gradient-to-r from-green-400 to-indigo-600"
                text={uploading ? "Uploading..." : "Upload Picture"}
                onClick={handlePictureUpload}
                disabled={uploading}
              />
              {uploadError && <p className="text-red-500 text-center mt-2">{uploadError}</p>}
            </div>
          </div>
        )}
      </div>

      <Toaster position="bottom-right" />
    </div>
  );
};
