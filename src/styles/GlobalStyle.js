import { createGlobalStyle } from "styled-components";

import "react-circular-progressbar/dist/styles.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-size: 62.10%;
    font-family: 'Montserrat', sans-serif;
  }

  img {
    display: block;
    max-width: 100%;
  }

  html, body, #root {
    height: 100%;

    position: relative;
  }

  a {
    display: block;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export { GlobalStyle };
