import React from "react";
// components

// style
import { StyleInfoComponent } from "./info-content-style.js";

// assets
import logo from "../../assets/logo.svg";

const InfoContent = (props) => {
  return (
    <StyleInfoComponent>
      <div className="logo">
        <img src={logo} alt="Brasão da OM" />
      </div>

      <div className="content">
        <h2>Faça upload dos deploys<br /> de forma rápida e eficaz.</h2>
        <p>Veja as análises de onde estiver.</p>
      </div>
    </StyleInfoComponent>
  );
};

export default InfoContent;
