import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --red: #f05454;
    --light-grey: #e8e8e8;
    --blue: #30475e;
    --dark-blue: #222831;
    --dark-blue: #222831;

    font-size: 80%;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html,
  body,
  #root {
    height: 100vh;
  }

  body {
    background: #e8e8e8;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Roboto, sans-serif;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 70.5%;
    }
  }


`;
