import { FunctionComponent, useState } from 'react';
import AlertStyled from './AlertStyled';
import * as translations from '../../../data//translate.json';

interface AlertProps {
  info: string
}

const Alert: FunctionComponent<AlertProps> = ({ info }) => {
  const { start, copy, reset } = translations.buttons;
  const { startAlert, copyAlert, resetAlert } = translations.alerts;

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
    <AlertStyled>
      {setAlertInfo(info)} 
    </AlertStyled>
  )
};

export default Alert;