import { useState } from 'react'
import './AppGlobalVariables.css'
import Duplicator from './components/Duplicator/Duplicator';
import Linker from './components/Linker/Linker';
import Footer from './components/Footer/Footer';
import Switch from './components/Switch/Switch';
import MainStyled from './components/MainStyled/MainStyled';
import AppStyled from './AppStyled';


function App() {
  const [checked, setChecked] = useState<boolean>(true)
  const setCheckedValue = () => setChecked(prevState => !prevState);

  return (
    <AppStyled isDuplikator={checked}>
      <Switch switchValue={checked} fnSetSwitch={setCheckedValue} />
      <MainStyled>
        { checked
          ? <Linker />
          : <Duplicator />
        }
      </MainStyled>
      <Footer />
    </AppStyled>
  )
}

export default App
