import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding : 0;
    }
    button:focus,
    input:focus {
        outline: none;
    }
    button {
        cursor: pointer;
    }
`;
