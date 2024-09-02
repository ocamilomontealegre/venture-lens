import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase-config";

export const uploadImage = async (image: string): Promise<string> => {
  try {
    if (!image.startsWith("data:image/")) {
      throw new Error("Invalid image format. Expected a base64 encoded data URL.");
    }

    const imageRef = ref(storage, `images/${Date.now()}.jpg`);
    await uploadString(imageRef, image, "data_url");

    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.log(`Error uploading image: ${errorMessage}`);
    throw error;
  }
};
