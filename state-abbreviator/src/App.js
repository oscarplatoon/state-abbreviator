import './App.css';
import stateData from './statedata/statedata';
import { useState } from 'react'
import StateOutput from './Components/StateOutput';

function App() {
  const [USState, updateState] = useState(null)

  const displayStates = () => {
      return stateData.map((state,index) => {
        return <option key={index} value={state['alpha-2']}> {state['name']} </option>

      })
  }

  const handleChange = (event) => {
    updateState(event.target.value)
  }

  return (
    <div className="App">
      <h1>State-Abbreviator</h1>
      <form>
        <label>
          Select a state from list
        <select onChange={handleChange}>
          { displayStates() }
        </select>
        </label>
      </form>
      <StateOutput selection={USState}/>
    </div>
  );
}

export default App;
