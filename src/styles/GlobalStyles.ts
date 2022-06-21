import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #F4EDE8;

    --gray-300: #312e38;
    --gray-500: #28262e;

    --green-300: #008000;
    --green-500: #006600;

    --red-300: #c35050;

    --blue-300: #005eff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--gray-300);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Fira Sans', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

export { GlobalStyles };
