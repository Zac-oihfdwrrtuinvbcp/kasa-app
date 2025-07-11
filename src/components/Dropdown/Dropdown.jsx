import React, { useState } from "react";
import "./Dropdown.scss";

function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown__toggle" onClick={toggleDropdown}>
        <h3 className="dropdown__title">{title}</h3>
        <svg className={`dropdown__arrow ${isOpen ? 'dropdown__arrow--open' : ''}`} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href={`/Icons.svg#down-arrow`}/>
        </svg>
      </button>
      {isOpen && (
        <ul className="dropdown__content">
          {items.map((item, index) => (
            <li key={index} className="dropdown__item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Dropdown;
