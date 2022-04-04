import { FunctionComponent } from 'react';
import '../SwitchStyledAdditional.css'

type SwitchInputProps = {
  checkedValue: boolean,
  fnOnChange: (checked: boolean) => void
};

const SwitchInput:FunctionComponent<SwitchInputProps> = ({checkedValue, fnOnChange}) => {
  return (
    <>
    <label htmlFor="switch"></label>
      <input 
        id="switch"
        type="checkbox" 
        checked={checkedValue} 
        onChange={() => fnOnChange(!checkedValue)}
      />
    </>
  )
}

export default SwitchInput