import SectionButtonsStyled from './SectionButtonsStyled';
import { FunctionComponent } from 'react';
import * as translate from '../../../data/translate.json';
import Button from '../Button/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {ButtonBoxStyled, ButtonBackgroundStyled } from '../Button/ButtonStyled';

type SectionButtonssProps = {
  valuesForCopy: string[],
  fnResetData: () => void,
  fnRemoveDuplicate: () => void
}

const SectionButtons: FunctionComponent<SectionButtonssProps> = ({ fnResetData, fnRemoveDuplicate, valuesForCopy }) => {
  const { start, copy, reset } = translate.button;

  return (
    <SectionButtonsStyled>
      <Button fnClick={fnRemoveDuplicate} text={start}/>
      
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