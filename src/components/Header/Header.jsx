import React from "react";
import { StyleHeader, StyleLogo } from "./header-style";
import logo from "../../assets/logo.svg";

const Header = () => {
  const navigation = ["Contato", "Logout"];

  return (
    <StyleHeader>
      <StyleLogo>
        <a href="/">
          <img src={logo} alt="Brasão da OM" />

          <h2>Hospital Naval de Salvador</h2>
        </a>
      </StyleLogo>
      <nav className="nav">
        <ul>
          {navigation.map((element) => (
            <li key={element}>
              <a href={element}>{element}</a>
            </li>
          ))}
        </ul>
      </nav>
    </StyleHeader>
  );
};

export default Header;
