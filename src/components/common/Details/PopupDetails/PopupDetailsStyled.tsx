import styled from 'styled-components';

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

const PopupContentStyled = styled.div`
  background: var(--popup-color-background);
  padding: 20px 30px;
  width: var(--popup-width);
  color: var(--popup-text-color);
  overflow-wrap: break-word;
  @media screen and (min-width: 768px){
    width: 30vw;
  }
`
export { PopupDetailsStyled, PopupContentStyled }