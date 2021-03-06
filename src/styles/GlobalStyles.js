import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root{
  --primary: #efb6b2;
  --secondary: #4e4e4e;
  --error: #ff4a4a;
}

body{
  font-family: "Noto Serif";
  color: var(--secondary);
}

.App{
  max-width: 960px;
  margin: 0 auto;
}

`;
