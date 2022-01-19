import { createGlobalStyle } from "styled-components";

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
`;

export { GlobalStyle };
