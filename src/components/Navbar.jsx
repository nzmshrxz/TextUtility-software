import React from "react";
import "../components/styles/style.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A1"];
  
  return (
    <div>
      <nav className={`navbar navbar-expand-lg lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                  
                
              </li>
              <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">About Me</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <input
              onClick={props.togglemode}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            {props.mode === 'dark' ? "Light Mode" : "Dark Mode"}
          </div>
          </div>
          {/* <div className="color-palette">
            {colors.map((color) => (
              <div
              key = {color}
              className = 'color-swatch'
              style = {{backgroundColor: color}}
              onClick = {()=> props.changeColor(color)}
              ></div>
              ))}
              </div> */}
              </div>
      </nav>
    </div>
  );
};

export default Navbar;




{/* <div className="color-palette">
            {colors.map((color) => (
              <div
                key={color}
                className="color-swatch"
                style={{ backgroundColor: color }}
                onClick={() => props.changeColor(color)}
              ></div>
            ))}
          </div> */}