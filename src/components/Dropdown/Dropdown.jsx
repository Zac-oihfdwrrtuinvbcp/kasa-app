import React, { useState } from "react";
import "./Dropdown.scss";

function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className={`dropdown__toggle ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        <h3 className="dropdown__title">{title}</h3>
        <svg className={`dropdown__arrow ${isOpen ? 'open' : ''}`}>
            <use href={`/Icons.svg#up-arrow`}/>
        </svg>
      </button>
        <ul className={`dropdown__content ${isOpen ? "open" : ""}`}>
          {items.map((item, index) => (
            <li key={index} className="dropdown__item">
              {item}
            </li>
          ))}
        </ul>
    </div>
  );
}
export default Dropdown;
