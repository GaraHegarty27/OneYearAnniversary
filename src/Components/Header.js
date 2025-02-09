import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "../Css/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Utility function to import images dynamically
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const images = importAll(require.context("../Assets", false, /\.(png|jpe?g|svg)$/));

function Header() {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Shuffle and preload images
  useEffect(() => {
    const preloadImages = async () => {
      const shuffled = [...images].sort(() => Math.random() - 0.5); // Shuffle images
      const promises = shuffled.map((src) => new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = img.onerror = () => resolve(src); // Resolve on both load and error
      }));

      const loadedImages = await Promise.all(promises); // Wait for all images to load
      setShuffledImages(loadedImages); // Set the shuffled images
      setImagesLoaded(true); // Mark images as loaded
    };

    preloadImages();
  }, []);

  return (
    <header>
      {imagesLoaded ? (
        <Carousel fade interval={1500}>
          {shuffledImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p>Loading images...</p>
      )}
    </header>
  );
}

export default Header;
