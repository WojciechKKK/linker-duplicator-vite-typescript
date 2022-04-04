import { FunctionComponent } from 'react';
import { PopupDetailsStyled, PopupContentStyled } from './PopupDetailsStyled';
import Button from '../../Button/Button';
import * as translations from '../../../../data/translate.json';
import PopupHeader from '../../PopupHeader/PopupHeader';

type PopupDetailsProps = {
  fnClose: () => void,
  values: string[]
}

const PopupDetails: FunctionComponent<PopupDetailsProps> = ({ fnClose, values }) => {
  const { close } = translations.button;
  const isEmptyList = values[0] === ''|| !values.length;

  return (
    <PopupDetailsStyled>
      <PopupContentStyled>
        <PopupHeader emptyContent={isEmptyList} />
        {!isEmptyList && (
          <ul>
            {values.map((phrase, key) => <li key={`${phrase}+${key}`}>{phrase}</li>)}
          </ul>
        )} 
        <Button text={close} fnClick={fnClose} errorBtn={true} />
      </PopupContentStyled>
    </PopupDetailsStyled>
  )
}

export default PopupDetails;