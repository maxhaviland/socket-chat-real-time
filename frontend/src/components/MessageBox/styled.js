import styled from 'styled-components';
import background from '../../assets/background.png';

export const Container = styled.ul`
  height: 70vh;
  overflow: auto;
  border: solid 1px #777777;
  margin: 0;
  padding: 0;
  background-image: url(${background});
  background-size: 30%
`;

export const ListMessages = styled.li`
  width: 40%; 
  margin: ${ props => props.mySelf ? '0 0 0 1%' : '0 0 0 50%'};
  margin-bottom: 10px;
  border: solid 1px;
  border-radius: 5px;
  padding: 5px;
  list-style: none;
  background-color: ${ props => props.mySelf ? '#edfcf6' : '#f4f2ff'};
  border-color: ${ props => props.mySelf ? '#ccfcdb' : '#ccdafc'};

  margin-top: 12px;
  .name {
    font-size: 14px;
    font-weight: bold;
    opacity: 0.7;
  }
  .message {
    color: #333;
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
    opacity: 0.7;
  }
  @media only screen and (max-width: 500px) {
    width: auto;
    margin-left: 0;
    margin-right: 0;
  }
`;
