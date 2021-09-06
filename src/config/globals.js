import { css } from "styled-components";

export const globals = ({theme}) => css`

  * { 
    box-sizing: border-box;
  }
  
  *, *::before, *::after { 
    margin : 0;
  }

  ul, ol { 
    list-style-type: none; 
    padding-left:0;
  }

  html {
    font-size: 14px;
    font-family: ${theme.font};
  }

  body {

  }

  h1 {font-size: 28px;}
  h2 {font-size: 24px;}
  h3 {font-size: 18px;}
  h4 {font-size: 15px;}
  h5 {font-size: 14px;}
  h6 {font-size: 12px;}

  p,a,span {font-size: 14px;}
  a {text-decoration: none;}
`