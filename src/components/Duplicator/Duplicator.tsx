import { DuplicatorStyled, SectionStyled}  from './DuplicatorStyled';
import SectionButtons from '../common/SectionButtons/SectionButtons';
import { useEffect, useState } from 'react';
import * as translate from '../../data/translate.json';
import TextAreaField from '../common/TextAreaField/TextAreaField';
import { useRemoveDuplicate } from '../../utils/useRemoveDuplicate';

const Duplicator = () => {
  const { inputPlaceholder, inputPlaceholdertWithoutDuplicates } = translate;
  const [ valueFromUser, setValueFromUser] = useState('');
  const [ valueToUser, setValueToUser] = useState([""]);
  const { fnRemoveDuplicate, resultValues} = useRemoveDuplicate(valueFromUser)

  const resetData = () => {
    setValueFromUser("")
    setValueToUser([""])
  }

  useEffect(() => {
    setValueToUser(resultValues)
  }, [resultValues])

  return (
    <DuplicatorStyled>
      <SectionStyled>
        <TextAreaField 
          placeholder={inputPlaceholder}
          value={valueFromUser}
          onChange={e => setValueFromUser(e.target.value)}
        />
      </SectionStyled>
     
      <SectionButtons
        fnResetData={resetData} 
        fnRemoveDuplicate={fnRemoveDuplicate}
        valuesForCopy={valueToUser}
      />

      <SectionStyled>
        <TextAreaField 
          placeholder={inputPlaceholdertWithoutDuplicates}
          readOnly
          value={valueToUser}
        />
      </SectionStyled>
    </DuplicatorStyled>
  )
};

export default Duplicator;