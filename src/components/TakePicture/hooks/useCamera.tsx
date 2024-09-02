import { useRef, useState } from "react";
import { CameraType } from "react-camera-pro";
import { uploadImage } from "@services/index";
import type { IUseCamera } from "../interfaces/use-camera-interface";

export const useCamera = (): IUseCamera => {
  const cameraRef = useRef<CameraType | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const takePicture = () => {
    if (cameraRef.current) {
      const picture = cameraRef.current.takePhoto();
      setImage(picture as string);
    }
  };

  const resetPicture = () => {
    setImage(null);
  };

  const handleUpload = async () => {
    if (image) {
      setUploading(true);
      setUploadError(null);
      try {
        const url = await uploadImage(image);
        console.log("Image uploaded successfully:", url);
      } catch (error) {
        setUploadError("Failed to upload image. Please try again.");
      } finally {
        setUploading(false);
      }
    }
  };

  return {
    cameraRef,
    image,
    takePicture,
    resetPicture,
    handleUpload,
    uploading,
    uploadError,
  };
};
