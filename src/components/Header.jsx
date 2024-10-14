import React from "react";

import logo from "../assets/logo_y.png";
import "../styles/header.css";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <HashLink to={"/#projects"} className="hpro">
                projects
              </HashLink>
            </li>
            <li>
              <HashLink to={"/#contactus"} className="hcon">
                contact
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
