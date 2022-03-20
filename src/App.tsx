import { useState } from 'react'
import './App.css'
import Duplicator from './components/Duplicator/Duplicator';
import Linker from './components/Linker/Linker';
import Footer from './components/Footer/Footer';
import Switch from './components/Switch/Switch';
import MainStyled from './components/MainStyled/MainStyled';

function App() {
  const [checked, setChecked] = useState<boolean>(false)

  const setCheckedValue = () => setChecked(prevState => !prevState)
  return (
    <div className="App">
      <Switch switchValue={checked} fnSetSwitch={setCheckedValue} />
      <MainStyled>
        { checked
          ? <Linker  />
          : <Duplicator />
        }
      </MainStyled>
      <Footer />
      {/* <TestType /> */}
    </div>
  )
}

export default App
