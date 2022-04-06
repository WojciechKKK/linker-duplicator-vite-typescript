import styled, { keyframes } from 'styled-components';

const PopupDetailsStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: default
`
const opacityOn = keyframes`
  0% { opacity: 0; }
  100% {opacity: 1;}
`

const PopupContentStyled = styled.div`
  background: var(--popup-color-background);
  padding: 20px 30px;
  width: var(--popup-width-big)
  color: var(--popup-text-color);
  overflow-wrap: break-word;
  opacity: 0;
  @media screen and (min-width: 768px){
    width: var(--popup-width-small);
  };
  animation: 0.5s ${opacityOn};
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`

export { PopupDetailsStyled, PopupContentStyled }