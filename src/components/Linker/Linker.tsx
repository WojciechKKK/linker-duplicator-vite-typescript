import { LinkerStyled, SectionStyled } from './LinkerStyled';
import { ThemeType, TextAreaField } from '../common/TextAreaField/TextAreaField';
import * as translation from '../../data/translate.json';
import { useState } from 'react';
import SectionButtons from '../common/SectionButtons/SectionButtons';
import { useRemoveLink } from './../../utils/useRemoveLink';
import Alert from '../common/Alert/Alert';

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
          theme={ThemeType.DARK}
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
        valueFromUser={valueFromUser}
      />

      <SectionStyled>
        <TextAreaField 
          theme={ThemeType.DARK}
          placeholder={linkerOutputPlaceholder}
          readOnly
          value={resultValues}
        />
      </SectionStyled>

    </LinkerStyled>
  )
};

export default Linker;