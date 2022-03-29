import SwitchTextStyled from './SwitchTextStyled';
import { FunctionComponent } from 'react';
import * as translate from '../../../data/translate.json';

type SwitchTextProps = {
  visible: boolean
};

const SwitchText:FunctionComponent<SwitchTextProps> = ({ visible }) => {
  const { linker, duplikator } = translate;
  return (
    <SwitchTextStyled isVisible={visible}>
      { visible ? linker : duplikator }
    </SwitchTextStyled>
  )
};

export default SwitchText;