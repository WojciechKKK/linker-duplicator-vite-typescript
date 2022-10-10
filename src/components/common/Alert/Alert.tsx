import { FunctionComponent, useState } from 'react';
import AlertStyled from './AlertStyled';
import * as translations from '../../../data//translate.json';
import Button from '../Button/Button';
import {ButtonBackgroundStyled} from '../Button/ButtonStyled';

interface AlertProps {
  info: string,
  warning?: boolean,
  error?: boolean,
  success?: boolean
}

const Alert: FunctionComponent<AlertProps> = ({ info, warning, error, success }) => {
  const { start, copy, reset } = translations.buttons;
  const { startAlert, copyAlert, resetAlert } = translations.alerts;

  const alertProps = { 
    success: info == reset || info == copy,
    error: info === start
  }

  const setAlertInfo = (text: string) => {
    switch(text) {
      case reset:
        return resetAlert;
      case start:
        return startAlert;
      case copy:
        return copyAlert;
      default:
        return false;
    }
  }

  if(!setAlertInfo(info)){
    return null;
  }

  return (
    <AlertStyled {...alertProps}>
      {setAlertInfo(info)} 
    </AlertStyled>
  )
};

export default Alert;