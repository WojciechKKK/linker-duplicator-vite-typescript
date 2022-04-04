import { LinkerStyled, SectionStyled } from './LinkerStyled';
import TextAreaField from '../common/TextAreaField/TextAreaField';
import * as translation from '../../data/translate.json';
import { useState } from 'react';
import SectionButtons from '../common/SectionButtons/SectionButtons';
import { useRemoveLink } from './../../utils/useRemoveLink';

const Linker = () => {
  const { linkerInputPlaceholder, linkerOutputPlaceholder} = translation;
  const [ valueFromUser, setValueFromUser] = useState('');
  const { resultValues, fnRemoveLink, reset } = useRemoveLink(valueFromUser);

  const resetData = () => {
    setValueFromUser("")
    reset()
  }

  return (
    <LinkerStyled>
      <SectionStyled>
        <TextAreaField 
          placeholder={linkerInputPlaceholder}
          value={valueFromUser}
          onChange={e => setValueFromUser(e.target.value)}
        />
      </SectionStyled>

      <SectionButtons
        horizontalView={true}
        fnResetData={resetData} 
        fnRemoveData={fnRemoveLink}
        valuesForCopy={resultValues}
      />

      <SectionStyled>
        <TextAreaField 
          placeholder={linkerOutputPlaceholder}
          readOnly
          value={resultValues}
        />
      </SectionStyled>
    </LinkerStyled>
  )
};

export default Linker;