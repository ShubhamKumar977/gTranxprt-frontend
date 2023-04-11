import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/layout.css';

import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-container">
          <div className="navbar-icon">
            <a className="navbar-brand" href="/">
              GTranscriptor
            </a>
          </div>

          <div className="navbar-menu">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="/signup"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
