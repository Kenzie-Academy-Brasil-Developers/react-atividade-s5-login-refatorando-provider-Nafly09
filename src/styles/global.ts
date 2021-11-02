import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --white: #f5f5f5;
    --black: #000000;
    --orange: #C85311;
    --lightBlue: #C5D4F0;
    --blue: #638FE3;
    --lightGrey: #666360;
    --red: #c53030
}

body {
    background: var(--lightBlue);
    color: var(--black);
}

a {
    color: var(--orange);
    text-decoration: none;
}

body,input, button{
    font-family:"PT Serif", serif;
    font-size: 1rem;
}
h1,h2,h3,h4,h5,h6{
    font-family: "Roboto Mono", monospace;
    font-weight: 700;
    font-size: 37px;
}

button {
    cursor: pointer;
}
`;
