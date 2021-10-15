import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer indigo darken-3">
      <div className="footer-copyright indigo darken-3">
        <div className="container">
          © {new Date().getFullYear()} denys-b
          <a className="grey-text text-lighten-4 right" href="./">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
