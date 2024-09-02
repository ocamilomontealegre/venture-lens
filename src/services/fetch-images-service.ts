import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase-config";

export const fetchImages = async (directory: string): Promise<string[]> => {
  try {
    const directoryRef = ref(storage, directory);
    const { items } = await listAll(directoryRef);

    const urls = await Promise.all(
      items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return url;
      }),
    );
    return urls;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error(`Error fetching images: ${errorMessage}`);
    return [];
  }
};
