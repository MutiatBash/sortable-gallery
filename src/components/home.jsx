import { Navbar } from "./navbar";
import { Gallery } from "./gallery";
import { images } from "../images";
import { useState, useContext, useEffect } from "react";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [galleryImages, setGalleryImages] = useState(images);

  function handleSearch(newSearch) {
    if (newSearch.trim() === "") {
      setError("search field cannot be empty");
    }
    setLoading(true);
    // CREATING A DELAY FOR LOADING STATE
    setTimeout(() => {
      const filtered = images.filter((image) =>
        image.tag.toLowerCase().includes(newSearch)
      );

      setGalleryImages(filtered);
      setLoading(false);
    }, 1500);
  }

  useEffect(() => {
    // window.onload = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    // };
  }, []);

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Gallery
        galleryImages={galleryImages}
        loading={loading}
        setLoading={setLoading}
        setGalleryImages={setGalleryImages}
      />
    </div>
  );
};
