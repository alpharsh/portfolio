import React from "react";
import "./servicecard.css";
import SocialHandles from "../SocialHandles/SocialHandles";

function ServiceCard({ title, description, icon, color, colorRGB }) {
  return (
    <div
      className="blur__overlay flex service__card"
      style={{ "--color-primary": color, "--color-primary-rgb": colorRGB }}
    >
      <div className="service__card-top">
        <div className="ball ball1"></div>
        <div className="ball ball2"></div>
        <div className="ball ball3"></div>
        <div className="ball ball4"></div>
        <div className="ball ball5 flex__center">{icon}</div>
      </div>
      <div className="service__card-middle">
        <h2 className="title">
            <span className="g-text">{title}</span>
        </h2>
        <p className="text__muted description">{description}</p>
      </div>
      <div className="service__card-bottom">
        <SocialHandles />
      </div>
    </div>
  );
}

export default ServiceCard;
