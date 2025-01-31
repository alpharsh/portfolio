import React from "react";
import "./footer.css";
import SocialHandles from "../../ui/SocialHandles/SocialHandles";

function Footer() {
  return (
    <footer>
      <div className="section__wrapper">
        <SocialHandles />
        <div className="copyright">
          <p className="text__muted">
            Copyright &copy; {new Date().getFullYear()} All rights reserved
          </p>
          <p className="text__muted">Build with ❤️ by alpharsh</p>
        </div>
        <div className="base__logo">
          <h1 className="full__name shine">Harsh Tripathi</h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
