import React from 'react';
import './HeaderBar.scss';

function HeaderBar({ imageUrl, title }) {
  return (
    <header className="header-bar">
      <div className="header-bar__image-container">
        <img src={imageUrl} alt={title} className="header-bar__image" />
      </div>
      <h1 className="header-bar__title">{title}</h1>
    </header>
  );
}

export default HeaderBar;
