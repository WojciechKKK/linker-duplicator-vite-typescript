import { DuplicatorStyled, SectionStyled}  from './DuplicatorStyled';
import SectionButtons from '../common/SectionButtons/SectionButtons';
import { useState } from 'react';
import * as translate from '../../data/translate.json';
import TextAreaField from '../common/TextAreaField/TextAreaField';
import { useRemoveDuplicate } from '../../utils/useRemoveDuplicate';
import Details from '../common/Details/Details';

const Duplicator = () => {
  const { inputPlaceholder, inputPlaceholdertWithoutDuplicates } = translate;
  const [ valueFromUser, setValueFromUser] = useState('');
  const { fnRemoveDuplicate, resultValues, duplicates, reset } = useRemoveDuplicate(valueFromUser)

  const resetData = () => {
    setValueFromUser("")
    reset()
  }

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
        fnRemoveData={fnRemoveDuplicate}
        valuesForCopy={resultValues}
      />

      <SectionStyled>
        <TextAreaField 
          placeholder={inputPlaceholdertWithoutDuplicates}
          readOnly
          value={resultValues}
        />
      </SectionStyled>

      <Details
        duplicateElements={duplicates} 
      />
      
    </DuplicatorStyled>
  )
};

export default Duplicator;