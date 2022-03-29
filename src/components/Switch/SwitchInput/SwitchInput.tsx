import { FunctionComponent } from 'react';
import '../SwitchStyledAdditional.css'

type SwitchInputProps = {
  checkedValue: boolean,
  fnOnChange: (checked: boolean) => void
};

const SwitchInput:FunctionComponent<SwitchInputProps> = ({checkedValue, fnOnChange}) => {
  return (
    <input 
      type="checkbox" 
      checked={checkedValue} 
      onChange={() => fnOnChange(!checkedValue)}
    />
  )
}

export default SwitchInput