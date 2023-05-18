import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;

    &::selection {
      background-color: #FBE4E1
    }
  }

  html, body, #root {
    height: 100%;
    overflow-y: hidden;
  }
`;

export default GlobalStyle;
