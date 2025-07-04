import React, { useState } from "react";
import "./Gallery.scss";

function Gallery(props) {
  const { images } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  return (
    <div className="gallery">
      <img
        className="gallery__image"
        key={currentImageIndex}
        src={images[currentImageIndex]}
        alt={`Gallery image ${currentImageIndex + 1}`}
      />
      <button className="gallery__button_prev" onClick={handlePrev}>
        <svg
          className="gallery__arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48"
          height="48"
        >
          <path
            fill="white"
            d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
          />
        </svg>
      </button>
      <div className="gallery__counter">
        {currentImageIndex + 1}/{images.length}
      </div>
      <button className="gallery__button_next" onClick={handleNext}>
        <svg
          className="gallery__arrow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48"
          height="48"
        >
          <path
            fill="white"
            d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
          />
        </svg>
      </button>
    </div>
  );
}

export default Gallery;
