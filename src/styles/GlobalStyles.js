import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-success: #32d15d;
    --color-attention: #e8dc2e;
    --color-danger: #eb4034;
    --color-dark: #2e2e2e;
    --color-info: #24b0e3;
    --color-light: #f5f5f5;
    --color-orange: #ff8000;
    --color-purple: #bd8bca;

    font-family: "Raleway", Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: 400;
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
    background: #fff;
    -webkit-font-smoothing: antialiased !important;
  }

  a {
    text-decoration: none;
  }

  body,
  input,
  button {
    color: var(--color-dark);
  }

  a {
    text-decoration: none;
    color: var(--color-dark);
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    margin-bottom: 15px;
    border-radius: 4px;
    border: 2px solid #ddd;
    font-size: 15px;
    color: #444;
    transition: border-color 0.2s;
    padding: 12px 16px;
  }

  input:focus {
    border-color: var(--color-purple);
  }

  input.hasError {
    border-color: var(--color-danger);
  }

  button {
    display: block;
    background: var(--color-orange);
    color: var(--color-light);
    border: 0;
    cursor: pointer;
    border-radius: 4px;
    width: 100%;
    padding: 16px;
    font-weight: bold;
    font-size: 15px;
    transition: background-color 0.2s;
  }
  button:hover {
    background-color: #d47413;
  }
`;
