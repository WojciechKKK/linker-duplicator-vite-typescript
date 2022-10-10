import styled from "styled-components";

interface ButtonBackgroundStyledProps {
  infoBtn?: boolean;
  errorBtn?: boolean;
  successBtn?: boolean
}

const ButtonBoxStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ButtonBackgroundStyled = styled.div<ButtonBackgroundStyledProps>`
  line-height: 20px;
  height: 20px;
  text-align: center;
  padding: 10px 15px;
  cursor: pointer;
  color: #FFF;
  ${({ infoBtn }) => infoBtn && `
    color: rgba(209, 120, 0, 0.8);
  `}
  ${({ errorBtn }) => errorBtn && `
   color: rgba(255, 0, 0, 0.8);
  `}  
  ${({ successBtn }) => successBtn && `
  color: rgba(0, 255, 0, 0.8);
 `}  
  transition: all 0.5s;
  position: relative;
  border-radius: var(--button-border-radius-size);
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255,255,255,0.1);
    transition: all 0.3s;
    ${({ infoBtn }) => infoBtn && `
      background-color: rgba(209,120,0,0.1);
    `}
    ${({ errorBtn }) => errorBtn && `
      background-color: rgba(255,0,0,0.1);
    `}
    ${({ successBtn }) => successBtn && `
    background-color: rgba(0,255,0,0.1);
  `}
    border-radius: var(--button-border-radius-size);
  }
  &:hover::before {
    opacity: 0 ;
    transform: scale(0.5,0.5);
    border-radius: var(--button-border-radius-size);
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid rgba(255,255,255,0.5);
    transform: scale(1.2,1.2);
    ${({ infoBtn }) => infoBtn && `
      border: 1px solid rgba(209, 120, 0, 0.8);
    `}
    ${({ errorBtn }) => errorBtn && `
      border: 1px solid rgba(209,0,0,0.8);
    `}
    ${({ successBtn }) => successBtn && `
    border: 1px solid rgba(0,209,0,0.8);
  `}
  }
  &:hover::after {
    opacity: 1;
	  transform: scale(1,1);
    border-radius: var(--button-border-radius-size);
  }
  border-radius: var(--button-border-radius-size);
`
export {ButtonBoxStyled, ButtonBackgroundStyled}