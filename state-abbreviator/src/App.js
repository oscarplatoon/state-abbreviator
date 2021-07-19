import { useState } from 'react';
import './App.css';
import stateData from './statedata'
import USState from './components/USState';
import Select from 'react-select';

function App() {
  const [selectedState, setSelectedState] = useState(null);

  const displayDropDownOptions = () => {
    return stateData.map((state, index) => {
      return <option key={index} value={state['alpha-2']}>{state['name']}</option>
    })
  }

  const handleChange = (evt) => {
    setSelectedState(evt.target.value)
  }

  return (
    <div className="App">
      <h1>Select State From Dropdown Menu</h1>
      <select onChange={handleChange}>
        {
          displayDropDownOptions()
        }
      </select>
      {/*<div style={{width: '25%', margin: 'auto'}}>
        <Select
          options={stateData}
          onChange={handleChange}
          />
      </div>*/}
      <USState selectedState={selectedState} />
    </div>
  );
}

export default App;
