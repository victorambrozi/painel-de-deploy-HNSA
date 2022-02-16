import React from "react";
import { StyleHeader, StyleLogo } from "./header-style";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const navigation = ["Contato", "Logout"];

  return (
    <StyleHeader>
      <StyleLogo>
        <Link to="/">
          <img src={logo} alt="Brasão da OM" />

          <h2>Hospital Naval de Salvador</h2>
        </Link>
      </StyleLogo>
      <nav className="nav">
        <ul>
          <li key='contato'>
            <Link to="/contato">Contato</Link>
          </li>

          <li key='logout'>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </nav>
    </StyleHeader>
  );
};

export default Header;
