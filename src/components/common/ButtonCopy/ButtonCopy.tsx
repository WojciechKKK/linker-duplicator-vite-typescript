import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ButtonBoxStyled, ButtonBackgroundStyled } from '../Button/ButtonStyled';
import { useAlert } from '../../../utils/useAlert';
import {FunctionComponent} from 'react';
import Alert from '../Alert/Alert';

type ButtonCopyProps = {
  copyValue: object,
  text: string
};

const ButtonCopy: FunctionComponent<ButtonCopyProps> = ({ copyValue, text }) => {
  const { visibleAlert, openAlert } = useAlert();
  return (
    <>
      <CopyToClipboard text={`${copyValue}`}>
        <ButtonBoxStyled onClick={() => openAlert()}>
          <ButtonBackgroundStyled>
            <span>{text.toUpperCase()}</span>
          </ButtonBackgroundStyled>
        </ButtonBoxStyled>
      </CopyToClipboard>
      { visibleAlert && <Alert info={text} /> }
    </>
  )
}

export default ButtonCopy;