import SwitchText from './SwitchText/SwitchText';
import { SwitchLabelStyled, SwitchStyled} from './SwitchStyled';
import { FunctionComponent } from 'react';
import SwitchInput from './SwitchInput/SwitchInput';
import SwitchSpan from './SwitchSpan/SwitchSpan';

type SwitchProps = {
  switchValue: boolean,
  fnSetSwitch: (switchValue: boolean) => void
}

const Switch:FunctionComponent<SwitchProps> = ({switchValue, fnSetSwitch}) => {
  return (
    <SwitchStyled>
      <SwitchText visible={switchValue} />
      <SwitchLabelStyled>
        <SwitchInput checkedValue={switchValue} fnOnChange={fnSetSwitch} />
        <SwitchSpan />
      </SwitchLabelStyled>
    </SwitchStyled>
  )
};

export default Switch;