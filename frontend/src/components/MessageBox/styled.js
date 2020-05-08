import styled from 'styled-components';
import background from '../../assets/background.png';
//  background-image: url(${background});

export const Container = styled.ul`
  height: 70vh;
  overflow: auto;
  width: 70vw;
  margin: 0 auto;
  padding: 0;
  background: rgba(44, 69, 245, 0.9);
  background-size: 30%;
  @media only screen and (max-width: 500px) {
    width: 90vw;
  }
`;

export const ListMessages = styled.li`
  width: 34%; 
  margin: ${ props => props.userId ? '0 0 0 62%' : '0 0 0 3%'};
  filter: ${ props => props.userId ? 'brightness(140%)' : ''};
  margin-bottom: 14px;
  margin-top: 14px;
  border-radius: 2px;
  padding: 5px;
  list-style: none;
  background-color: ${ props => props.userId ? 'rgba(20, 20, 20, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
  border-color: ${ props => props.userId ? '#111' : '#fff'};

  margin-top: 12px;
  .name {
    font-size: 12px;
    font-weight: bolder;
    color: #2c45f5;
    padding-right: 10px;
  }
  .message {
    color: ${ props => props.userId ? '#fff' : '#111'};
    font-size: 15.5px;
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: justify;
    white-space: normal;
    word-wrap: break-word;
    white-space: pre-line;
    white-space: pre-wrap;
  }
  .date {
    font-size: 11px;
    color: #2c45f5
  }
  @media only screen and (max-width: 500px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 16px;
    margin-bottom: 14px;
  }
  &:hover {
    filter: drop-shadow(0 0 0.70rem #9e005f);  
    }

`;
