import PopupHeaderStyled from './PopupHeaderStyled';
import * as translations from '../../../data/translate.json';
import { FunctionComponent } from 'react';

type PopupHeaderProps = {
  emptyContent: boolean
};

const PopupHeader: FunctionComponent<PopupHeaderProps> = ({ emptyContent }) => {
  const { noDuplicates, duplicatesHeader } = translations;
  
  return (
    <PopupHeaderStyled>
       { emptyContent ? noDuplicates : duplicatesHeader }
    </PopupHeaderStyled>
  )
}

export default PopupHeader;