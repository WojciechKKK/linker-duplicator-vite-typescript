import styled from 'styled-components';
import '../../../App';

interface SwitchTextStyledProps {
  isVisible: boolean;
};

const SwitchTextStyled = styled.p<SwitchTextStyledProps>`
  cursor: pointer;
  padding: 0 5px;
  font-size: var(--header-font-size);
  color: var(--header-text-color);
  transition: var(--switch-transition-time);
  
// ${({ isVisible }) => isVisible && `
//   text-shadow: none;
//   color: grey;
// `}
`;

export default SwitchTextStyled;

