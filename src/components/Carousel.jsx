import React, { useState, useEffect } from "react";
import "../styles/components/carousel.scss";

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  const nextImage = () => {
    setImageOpacity(0);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setImageOpacity(0.3);
    }, 500);
  };

  const prevImage = () => {
    setImageOpacity(0);
    setTimeout(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setImageOpacity(0.3);
    }, 500);
  };

  useEffect(() => {
    setImageOpacity(0.68);
  }, [currentImageIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img
          className="carousel-image"
          src={images[currentImageIndex]}
          alt={`img-modal ${currentImageIndex + 1}`}
          style={{ opacity: imageOpacity }}
        />
        <div className="buttons">
          <button className="carousel-button next" onClick={nextImage}>
            Suivant &#8250;
          </button>{" "}
          <button className="carousel-button prev" onClick={prevImage}>
            &#8249; Précédent
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
