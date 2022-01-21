import React from "react";
import { StyleHeader } from "./header-style";

const Header = () => {
  const navigation = ["FAQ", "Contato", "Logout"];

  return (
    <StyleHeader>
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
