import SectionButtonsStyled from './SectionButtonsStyled';
import { FunctionComponent } from 'react';
import * as translate from '../../../data/translate.json';
import Button from '../Button/Button';
import ButtonCopy from '../ButtonCopy/ButtonCopy';

type SectionButtonssProps = {
  valuesForCopy: string[],
  fnResetData: () => void,
  fnRemoveData: () => void,
  horizontalView?: boolean,
  valueFromUser?: string
}

const SectionButtons: FunctionComponent<SectionButtonssProps> = ({ fnResetData, fnRemoveData, valuesForCopy, horizontalView, valueFromUser }) => {
  const { start, copy, reset } = translate.buttons;

  return (
    <SectionButtonsStyled horizontalView={horizontalView}>
      <Button 
        text={start} 
        fnClick={fnRemoveData} 
        showAlert={valueFromUser?.length ? false : true} 
      />
      
      <ButtonCopy 
        copyValue={valuesForCopy}
        text={copy}
      />

      <Button 
        text={reset}
        fnClick={fnResetData} 
        showAlert={true} 
      />

    </SectionButtonsStyled>
  )
};

export default SectionButtons;