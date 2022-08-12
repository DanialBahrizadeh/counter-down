import {
  GlobalStyleComponent,
  createGlobalStyle,
  DefaultTheme,
} from "styled-components";

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
   body {
    font-family: 'Red Hat Text', sans-serif; 
    font-size: 14px;
    height: 100vh;
    background: hsl(249, 18%, 14%) url('./images/bg-stars.svg') repeat;

   }

   #root {
    width: 100%;
    height: 100%;
   }

   @keyframes endpage {
      0% {
        transform: rotateX(-15deg);
        background-color: hsl(240,21%,22%);
        bottom: 50%;
        z-index: 999;
      } 

      100% {
        transform: rotateX(15deg);
        background-color: hsl(236,21%,26%);
        bottom: 1px;
        z-index: -1;
      }
   }

`;

export default GlobalStyle;
