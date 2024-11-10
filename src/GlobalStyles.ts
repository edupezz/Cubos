import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
    width: 100vw;
    height: 100vh;

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    font-family: "Montserrat", sans-serif;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }
`;
