import stateData from "./statedata/index.js";
import {useState} from "react";

function StateDropDown() {
  const [selectedState, setSelectedState] = useState(undefined)

  const displayDropDown= () => {
    return stateData.map((data, index) => {
      return <option key={index} value ={data['alpha-2']}>{data['name']}</option>
    })
  }

    const handleChange = (evt) => {
      setSelectedState(evt.target.value)
    }


  return (
    <div>
      <h1>Select a State!!!!</h1>
      <select onChange={handleChange}>
      {displayDropDown()}
      </select>
      <h1>
      { selectedState }
      </h1>
    </div>  
  );
}

export default StateDropDown;