import React from 'react';

class Abbreviation extends React.Component {
    constructor(props) {
        super(props)
        this.selection = this.props.selection;
    }

    render() {
        return <p>Abbreviation: {this.selection}</p>;
    }
}

export default Abbreviation;