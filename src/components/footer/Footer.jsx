import React from 'react';

export const Footer = () => {
  return (
    <footer class="page-footer indigo darken-3">
      <div class="footer-copyright">
        <div class="container">
          © {new Date().getFullYear()} denys-b
          <a class="grey-text text-lighten-4 right" href="./">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
