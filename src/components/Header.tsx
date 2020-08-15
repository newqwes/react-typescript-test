import React from "react";

const Header: React.FC = () => {
  return (
    <div className="navbar">
      <div className="title__text">
        <h2>React + TypeScript</h2>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="/" className="navlink">
              Главная
            </a>
          </li>
          <li>
            <a href="/" className="navlink">
              О Нас
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
