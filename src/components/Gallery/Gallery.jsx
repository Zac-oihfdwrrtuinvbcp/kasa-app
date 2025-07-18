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

  const showNavigation = images.length > 1;

  return (
    <div className="gallery">
      <img
        className="gallery__image"
        key={currentImageIndex}
        src={images[currentImageIndex]}
        alt={`Gallery image ${currentImageIndex + 1}`}
      />
      {showNavigation && (
        <>
          <button className="gallery__button_prev" onClick={handlePrev}>
            <svg className="gallery__button_arrow">
              <use href={`/Icons.svg#left-arrow`}/>
            </svg>
          </button>
          <div className="gallery__counter">
            {currentImageIndex + 1}/{images.length}
          </div>
          <button className="gallery__button_next" onClick={handleNext}>
            <svg className="gallery__button_arrow">
              <use href={`/Icons.svg#left-arrow`}/>
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

export default Gallery;
