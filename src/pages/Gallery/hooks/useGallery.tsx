import { useEffect, useState } from "react";
import { fetchImages } from "@services/fetch-images-service";
import type { IUseGallery } from "../interfaces/use-gallery-interface";

export const useGallery = (directory: string): IUseGallery => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const urls = await fetchImages(directory);
        setImages(urls);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        console.error(`Error loading images ${errorMessage}`);
        setError("Failed to load images");
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [directory]);

  return {
    error,
    images,
    loading,
  };
};
