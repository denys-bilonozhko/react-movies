import React from 'react';

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper indigo darken-3">
          <div className="container">
            <a href="./" className="brand-logo">
              React Movies
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="./">News</a>
              </li>
              <li>
                <a href="./">Blog</a>
              </li>
              <li>
                <a href="./">Account</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
