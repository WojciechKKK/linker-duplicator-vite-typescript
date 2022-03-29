import styled from "styled-components";

const ButtonBoxStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ButtonBackgroundStyled = styled.div`
  line-height: 20px;
  height: 20px;
  text-align: center;
  padding: 10px 15px;
  cursor: pointer;
  color: #FFF;
  transition: all 0.5s;
  position: relative;
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
  }
  &:hover::before {
    opacity: 0 ;
    transform: scale(0.5,0.5);
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
  }
  &:hover::after {
    opacity: 1;
	  transform: scale(1,1);
  }
`
export {ButtonBoxStyled, ButtonBackgroundStyled}