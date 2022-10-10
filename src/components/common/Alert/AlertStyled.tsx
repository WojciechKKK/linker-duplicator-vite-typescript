import styled, { keyframes } from 'styled-components';

interface AlertStyledProps {
  warning?: boolean;
  error?: boolean;
  success?: boolean
}

const showAlert = keyframes`
  0% { margin-right: -200px }
  100 % { margin-right: 20px }
`
const showAlertMobile = keyframes`
  0% { margin-top: -50px;}
  100 % { margin-top: 0px;}
`

const AlertStyled = styled.div<AlertStyledProps>`
  font-size: 13px;
  color: white;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  text-align: center;
  margin-top: 0px;
  margin-right: 0px;
  width: 100%;
  padding: 10px 0;

  ${({ warning }) => warning && `
    background-color: rgba(209,120,0,0.1);
    color: rgba(209, 120, 0, 0.8);
  `}
  ${({ error }) => error && `
    background-color: rgba(255,0,0,0.1);
    color: rgba(255, 0, 0, 0.8);
  `}
  ${({ success }) => success && `
    background-color: rgba(0,255,0,0.1);
    color: rgba(0, 255, 0, 0.8);
  `}

  animation: 0.5s ${showAlertMobile};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @media screen and (min-width: 768px){
    width: 200px;
    margin-top: 20px;
    padding: 10px;
    margin-right: 10px;

    border-radius: var(--text-area-border-radius-size);
    animation: 0.3s ${showAlert};
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`;

export default AlertStyled