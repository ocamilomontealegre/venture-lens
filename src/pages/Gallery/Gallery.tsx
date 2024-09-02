import { useAuth } from "@common/hooks/useAuth";
import { useGallery } from "./hooks/useGallery";
import { Navigate } from "react-router-dom";

export const Gallery = () => {
  const { user } = useAuth();
  const { images, loading, error } = useGallery("images");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (images.length === 0) {
    return <div>No images found.</div>;
  }

  return (
    <section className="col-span-12">
      <div className="grid grid-cols-3 gap-4">
        {images.map((url, index) => (
          <div key={index} className="w-full h-48 bg-gray-200">
            <img
              src={url}
              alt={`Gallery image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
