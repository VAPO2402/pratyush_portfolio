import React from "react";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

import "../styles/footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="reachout">
            <h1>reach out</h1>
            <p><a href="mailto:pratyushkumardelhi55@gmail.com">pratyushkumardelhi55@gmail.com</a></p>
        </div>
        <div className="end">
          <p>do reachout, share your website experience and give your feedback, your friendly neighbourhood batman</p>
          <button className="cfbut">
            <HashLink to={"/#contactus"} className="cflink">
              CONTACT
            </HashLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;