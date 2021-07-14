import './App.css';
import states from './statedata/index'
import React from 'react'
import Abbreviation from './components/Abbreviation'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedState: '' };  // selectedState will represent the currently selected State in the drop-down
    }

    // will get all dropdown options available to be rendered
    getUsStatesAsOption() {
        let usStatesAsOption = states.map(usState => {
            return <option value={usState['alpha-2']} key={usState['alpha-2']}>{usState.name}</option>;  /* key is like pk or id */
        });

        return usStatesAsOption;
    }

    handleChange = (e) => {
        this.setState({ selectedState: e.target.value });  // can call .value b/c we specified it in <option>
    }

    render() {
        return (
            <div className="App">
                <select name="states" onChange={this.handleChange.bind(this)}>  {/* .bind(this) is passing in 'this' into handleChange so that 'this' is accesible inside handleChange */}
                    {this.getUsStatesAsOption()}
                </select>

                <Abbreviation selection={this.state.selectedState} />
            </div>
        );
    }
}

export default App;
