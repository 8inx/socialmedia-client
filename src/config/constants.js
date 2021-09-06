import { css } from "styled-components";

export const color = {
  navyBlue: '#166FE5',
  vioBlue: '#3E53A5',
  spaceBlue: '#202D58',
  green: '#31A24C',
  orange : '#FB5012',
  cherry: '#F3425F',
  black: '#1C1C1C',
  white: '#FFFFFF',
}

export const media = {
  small: `@media screen and (max-width: 480px )`,
  medium: `@media screen and (max-width: 900px )`,
  large: `@media screen and (max-width: 1100px )`,
  xlarge: `@media screen and (min-width: 1100px )`,
}

export const appScrollbar = ({theme}) => css`

  overflow-y: scroll;
  overflow-x: hidden;

  /* Firefox */
  scrollbar-color: transparent transparent; 
  scrollbar-width: normal;

  /* Chrome webkit */

    /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: transparent; 
  }


  &:hover {
    scrollbar-color: ${theme.color.scrollbar.handle} transparent; 
     /* Track */
    ::-webkit-scrollbar-track {
      background: transparent; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background: ${theme.color.scrollbar.handle}; 
    }
  }
`
