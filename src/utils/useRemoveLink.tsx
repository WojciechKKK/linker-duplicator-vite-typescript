import * as translations from '../data/translate.json';
import { useState } from 'react';
import { useAlert } from '../utils/useAlert';

interface RemoveLink {
  resultValues: string[];
  fnRemoveLink: () => void,
  reset: () => void
}

export const useRemoveLink = (valueFromUser: string): RemoveLink => {
  const { errors: { completeText, wrongLink } } = translations;
  const [ resultValues, setResultValues ] = useState([""]);


  const reset = () => {
    setResultValues([""])
  }

  const fnRemoveLink = () => {
    if(!valueFromUser){
      return;
    }
  
    if(valueFromUser.indexOf(',p') < 0) {
        return alert(wrongLink)
    }

    const result: string[] = []
    let linksArray = valueFromUser.split('\n');
    linksArray.map(link => {
      const findP = link.indexOf(',p');
      const lastMark = link.lastIndexOf(',');
      const getLetterP = link.substring(findP + 1, lastMark)
      result.push(getLetterP)
    })
    setResultValues(result);
  }

  return { resultValues, fnRemoveLink, reset }
}