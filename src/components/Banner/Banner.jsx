import React from 'react';
import './Banner.scss';

function Banner({ imageUrl, title }) {
  const imageClass = `banner__image ${title ? 'banner__image--with-title' : ''}`;
  
  return (
    <header className="banner">
      <div className="banner__image-container">
        <img src={imageUrl} alt={title} className={imageClass} />
      </div>
      <h1 className="banner__title">{title}</h1>
    </header>
  );
}

export default Banner;
