import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }
 html{
    font-size: 62.5%;
 }
 body{
    font-family: "Plus Jakarta Sans", sans-serif;
    background: #F9FAFD;
 }
`;
