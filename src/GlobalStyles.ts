import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    font-family: "Montserrat", sans-serif;
    font-size: 62.5%;
  }

  body {

    width: 100vw;

    font-size: 1.6rem;
    margin: 0;
    padding: 0;
  }
`;
