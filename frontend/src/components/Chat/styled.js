import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 70vw;
  height: 10vh;
  border: none;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 14px;
  padding: 0;
  display: flex;
  background: rgba(240, 240, 240, 0.96);
  resize: none;
  &::selection{
    background: rgba(0, 0, 0, 0.3);
  }
  &::placeholder{
    font-size: 16px;
    padding-left: 4px;
    color: #2c45f5;
    opacity: 0.6;
  }
  @media only screen and (max-width: 500px) {
    width: 90vw;
  }
`

export default TextArea;