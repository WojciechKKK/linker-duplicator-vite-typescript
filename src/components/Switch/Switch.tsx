import SwitchStyled from './SwitchStyled';
import SwitchText from '../common/SwitchText/SwitchText';
import SwitchLabelStyled from './SwitchLabelStyled';
import './Switch.css';
import { FunctionComponent } from 'react';

type SwitchProps = {
  switchValue: boolean,
  fnSetSwitch: (switchValue: boolean) => void
}

const Switch:FunctionComponent<SwitchProps> = ({switchValue, fnSetSwitch}) => {
  return (
    <SwitchStyled>
      <SwitchText fnOnClick={fnSetSwitch} visible={switchValue} text="Duplicator" />
      <SwitchLabelStyled>
        <input type="checkbox" checked={switchValue} onChange={() => fnSetSwitch(!switchValue)} />
        <span className="slider round"></span>
      </SwitchLabelStyled>
      <SwitchText fnOnClick={fnSetSwitch} visible={!switchValue} text="Linker" />
    </SwitchStyled>
  )
};

export default Switch;