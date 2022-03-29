import { ButtonBoxStyled, ButtonBackgroundStyled} from './ButtonStyled';
import { FunctionComponent } from 'react';

type ButtonProps = {
  text: string,
  fnClick?: () => void
}

const Button: FunctionComponent<ButtonProps> = ({ text, fnClick }) => {
  return (
    <ButtonBoxStyled onClick={fnClick}>
        <ButtonBackgroundStyled>
          <span>{text.toUpperCase()}</span>
        </ButtonBackgroundStyled>
    </ButtonBoxStyled>
  )
}

export default Button;