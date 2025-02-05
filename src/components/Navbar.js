import React from 'react';

export default function Navbar(props) {
  const navbarStyle = {
    backgroundColor: props.darkMode ? '#343a40' : '#f8f9fa',
    color: props.darkMode ? 'white' : 'black',
  };

  return (
    <nav className="navbar navbar-expand-lg" style={navbarStyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: navbarStyle.color }}>
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" style={{ color: navbarStyle.color }}>
                {props.hm}
              </a>
            </li>
          </ul>
          <div className="form-check form-switch ms-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="darkModeSwitch"
              onChange={props.toggleDarkMode}
              checked={props.darkMode}
            />
            <label className="form-check-label" htmlFor="darkModeSwitch" style={{ color: navbarStyle.color }}>
              {props.darkMode ? 'Dark Mode' : 'Light Mode'}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}