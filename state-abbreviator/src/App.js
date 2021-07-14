import './App.css';
import states from './statedata/index'
import react from 'react'
import Abbreviation from './components/Abbreviation'

class App extends react.Component {
    constructor(props) {
        super(props);
        this.state = { selectedState: '' };
    }

    getStatesAsOption() {
        let statesAsOption = states.map(state => {
            return <option value={state['alpha-2']} key={state['alpha-2']}>{state.name}</option>
        });

        return statesAsOption
    }

    handleChange = (e) => {
        this.setState({ selectedState: e.target.value });
    }

    render() {
        return (
            <div className="App">
                <select name="states" onChange={this.handleChange.bind(this)}>  {/* .bind(this) is passing in 'this' into handleChange so that 'this' is accesible inside handleChange */}
                    {this.getStatesAsOption()}
                </select>

                <Abbreviation selection={'this.state.selectedState'} />
            </div>
        );
    }
}

export default App;
