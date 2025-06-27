import React from 'react';
import './Banner.scss';

function Banner({ imageUrl, title }) {
  return (
    <header className="banner">
      <div className="banner__image-container">
        <img src={imageUrl} alt={title} className="banner__image" />
      </div>
      <h1 className="banner__title">{title}</h1>
    </header>
  );
}

export default Banner;
