import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="hamburger-menu">
        <div className="nav-primary">
          <div className="nav-content">
            <div className="nav-title">Menu</div>
            <div className="nav-links">
              <div data-text="Home" className="nav-link">
                <NavLink exact activeClassName="activeLink" to={"/"}>
                  Home
                </NavLink>
              </div>
              <div data-text="About me" className="nav-link">
                <NavLink exact activeClassName="activeLink" to={"/about"}>
                  About
                </NavLink>
              </div>
              <div data-text="Contact" className="nav-link">
                <NavLink exact activeClassName="activeLink" to={"/contact"}>
                  Contact
                </NavLink>
              </div>
              <div data-text="Github" className="nav-link">
                <a
                  href="https://github.com/KingKiarie"
                  target="blank"
                  rel="noopener noreffer"
                >
                  {" "}
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
