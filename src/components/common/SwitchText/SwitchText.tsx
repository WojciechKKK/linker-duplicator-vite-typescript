import SwitchTextStyled from './SwitchTextStyled';
import { FunctionComponent } from 'react';

type SwitchTextProps = {
  fnOnClick: (visible: boolean) => void;
  visible: boolean;
  text: string
};

const SwitchText:FunctionComponent<SwitchTextProps> = ({fnOnClick, visible, text}) => {

  return (
    <SwitchTextStyled 
      isVisible={visible} 
      onClick={() => fnOnClick(visible)}
    >
      {text}
    </SwitchTextStyled>
  )
  
};

export default SwitchText;