import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-success: #32d15d;
    --color-attention: #e8dc2e;
    --color-danger: #eb4034;
    --color-dark: #2e2e2e;
    --color-info: #24b0e3;
    --color-light: #f5f5f5;

    font-family: "Nunito", sans-serif;
    font-size: 14px;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    min-height: 100%;
    height: 100%;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    color: var(--color-dark);
    background: var(--color-light);
    -webkit-font-smoothing: antialiased !important;
  }

  a {
    text-decoration: none;
  }
`;
