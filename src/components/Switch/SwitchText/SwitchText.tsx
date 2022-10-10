import { FunctionComponent } from 'react';
import * as translate from '../../../data/translate.json';
import './SwitchTextStyle.css';

type SwitchTextProps = {
  visible: boolean
};

const SwitchText:FunctionComponent<SwitchTextProps> = ({ visible }) => {
  const { linker, duplikator } = translate;
  const headerText = visible ? linker : duplikator
  return (
    <h2 data-text={headerText} className={headerText}>
      {headerText}
    </h2>
  )
};

export default SwitchText;