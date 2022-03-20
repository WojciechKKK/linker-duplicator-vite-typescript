import styled from 'styled-components';
import '.././../../App';

interface SwitchTextStyledProps {
  isVisible: boolean;
  onClick: () => void
};

const SwitchTextStyled = styled.p<SwitchTextStyledProps>`
  cursor: pointer;
  padding: 0 10px;
  font-size: 15px;
  color: #FFF;
  transition: var(--transition-time);;
  // text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18;
  
  &:hover{
    color: white
  }
  
${({ isVisible }) => isVisible && `
  text-shadow: none;
  color: grey;
`}
 
`;

export default SwitchTextStyled;

