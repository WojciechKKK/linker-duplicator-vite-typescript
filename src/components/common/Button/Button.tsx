import { ButtonBoxStyled, ButtonBackgroundStyled} from './ButtonStyled';
import { FunctionComponent } from 'react';

type ButtonProps = {
  text: string,
  fnClick?: () => void,
  infoBtn?: boolean,
  errorBtn?: boolean
}

const Button: FunctionComponent<ButtonProps> = ({ text, fnClick, infoBtn, errorBtn }) => {
  return (
    <ButtonBoxStyled onClick={fnClick}>
        <ButtonBackgroundStyled infoBtn={infoBtn} errorBtn={errorBtn}>
          <span>{text.toUpperCase()}</span>
        </ButtonBackgroundStyled>
    </ButtonBoxStyled>
  )
}

export default Button;