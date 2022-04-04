import * as translate from "../data/translate.json";
import { useState } from 'react';

interface RemoveDuplicate {
  fnRemoveDuplicate: () => void;
  resultValues: string[];
  duplicates: string[];
  reset: () => void
}

export const useRemoveDuplicate = (valueFromUser: string): RemoveDuplicate => {
  const { errors: { completeText } } = translate;
  const [ resultValues, setResultValues ] = useState([""])
  const [ duplicates, setDuplicates ] = useState([""])

  const reset = () => {
    setResultValues([""]);
    setDuplicates([""])
  };

  const fnRemoveDuplicate = (): void => {
    if(!valueFromUser){ 
      return alert(completeText)
    }

    const resultPhrasesArr: string[] = [];
    const duplicateItemsArr: string[] = []
    const phrasesWithoutWhiteSpace: string[] = valueFromUser
      .split(',').map(word => word.trim())
      .filter(phrase => phrase)

    phrasesWithoutWhiteSpace.forEach(word => {
      resultPhrasesArr.includes(word)
        ? duplicateItemsArr.push(word) 
        : resultPhrasesArr.push(word)
    });

    setResultValues(resultPhrasesArr);
    setDuplicates(duplicateItemsArr);
  }

  return { fnRemoveDuplicate, resultValues, duplicates, reset }
}