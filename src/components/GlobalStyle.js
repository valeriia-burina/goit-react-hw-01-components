import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export default createGlobalStyle`

ul,
li,
p {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

span {
  display: block;
}

body {
  margin: 0;
  background-color: #E7ECF2;

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;