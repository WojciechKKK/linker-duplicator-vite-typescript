import styled, { keyframes } from 'styled-components';

const showAlert = keyframes`
  0% { margin-right: -200px }
  100 % { margin-right: 20px }
`
const showAlertMobile = keyframes`
  0% { margin-top: -50px;}
  100 % { margin-top: 0px;}
`

const AlertStyled = styled.div`
  font-size: 13px;
  background: rgba(0, 255, 0, 0.2);
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  text-align: center;
  margin-top: 0px;
  margin-right: 0px;
  width: 100%;
  padding: 10px;

  animation: 0.5s ${showAlertMobile};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @media screen and (min-width: 768px){
    width: 150px;
    margin-top: 20px;
    margin-right: 20px;

    border-radius: var(--text-area-border-radius-size);
    animation: 0.3s ${showAlert};
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`;

export default AlertStyled