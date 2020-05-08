import styled, { createGlobalStyle } from 'styled-components';
const backgroundURL = 'https://images.alphacoders.com/962/962387.jpg';
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Handlee', cursive;
    
    ::-webkit-scrollbar {
      width: 6px;
      cursor: pointer;
    }
  
    ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 1px;
      border-radius: 1px;
      background: #111; 
    }
  }
  body {
    color: #edeef5;
    background-image: url(${backgroundURL});
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export const Title = styled.p`
  font-size: 36px;
  text-align: center;
  margin: 0;
  padding: 10px;
`;
export default GlobalStyle;