import React, { useState } from "react";

export default function About() {
  const [darkMode, setDarkMode] = useState(false);

  const mystyle = {
    color: darkMode ? "white" : "black",
    backgroundColor: darkMode ? "black" : "white",
    border: "1px solid gray",
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default until the collapse plugin adds the appropriate
              classes.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>This is the second item's accordion body.</strong>
            </div>
          </div>
        </div>

        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <strong>This is the third item's accordion body.</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={toggleDarkMode}
        >
          {darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
        </button>
      </div>
    </>
  );
}
