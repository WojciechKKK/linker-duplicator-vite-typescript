import { ButtonBoxStyled, ButtonBackgroundStyled} from './ButtonStyled';
import { FunctionComponent } from 'react';
import { useAlert } from '../../../utils/useAlert';
import Alert from '../Alert/Alert';

type ButtonProps = {
  text: string,
  fnClick?: () => void,
  infoBtn?: boolean,
  errorBtn?: boolean,
  showAlert?: boolean
}

const Button: FunctionComponent<ButtonProps> = ({ text, fnClick, infoBtn, errorBtn, showAlert }) => {
  const { visibleAlert, openAlert } = useAlert();
  
  const fnBtnClick = () => {
    //prevent loop on clivk btn by user
    if(!visibleAlert){
      if(fnClick){
        fnClick();
      }

      if(showAlert) {
        openAlert()
      } 
    } 
  }

  return (
    <>
      <ButtonBoxStyled onClick={fnBtnClick}>
          <ButtonBackgroundStyled infoBtn={infoBtn} errorBtn={errorBtn}>
            <span>{text.toUpperCase()}</span>
          </ButtonBackgroundStyled>
      </ButtonBoxStyled>
      { visibleAlert && <Alert info={text} /> }
    </>
  )
}

export default Button;