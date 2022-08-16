import { createGlobalStyle } from 'styled-components';
import 'normalize.css';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0px 20px;
`;

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(40, 45, 108, 0.049);
  color: #212121;
  line-height: 1.5;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

button {
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}
`;
