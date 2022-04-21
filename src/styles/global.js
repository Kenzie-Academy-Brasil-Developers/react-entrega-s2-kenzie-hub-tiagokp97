import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root {
    --pink: #FF577F;
    --pink-focus: #FF427F;
    --disable: #59323F;
    --sucess:#3FE864;
    --failed: #E83F5B;
    --grey-10: #868E96;
    --grey-20: #343B41;
    --grey-30: #212529;
    --grey-40: #121214;
}

body {
    background: #121214;
    color: black;
}

body, input, button {
    font-family: "inter";
    font-size: 1rem;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}

`;
