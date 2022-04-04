import SectionButtonsStyled from './SectionButtonsStyled';
import { FunctionComponent } from 'react';
import * as translate from '../../../data/translate.json';
import Button from '../Button/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {ButtonBoxStyled, ButtonBackgroundStyled } from '../Button/ButtonStyled';

type SectionButtonssProps = {
  valuesForCopy: string[],
  fnResetData: () => void,
  fnRemoveData: () => void,
  horizontalView?: boolean
}

const SectionButtons: FunctionComponent<SectionButtonssProps> = ({ fnResetData, fnRemoveData, valuesForCopy, horizontalView }) => {
  const { start, copy, reset } = translate.button;

  return (
    <SectionButtonsStyled horizontalView={horizontalView}>
      <Button fnClick={fnRemoveData} text={start}/>
      
      <CopyToClipboard text={`${valuesForCopy}`}>
        <ButtonBoxStyled>
          <ButtonBackgroundStyled>
            <span>{copy.toUpperCase()}</span>
          </ButtonBackgroundStyled>
        </ButtonBoxStyled>
      </CopyToClipboard>
        
      <Button fnClick={fnResetData} text={reset}/>
    </SectionButtonsStyled>
  )
};

export default SectionButtons;