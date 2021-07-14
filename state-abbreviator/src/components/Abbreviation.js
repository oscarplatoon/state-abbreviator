import React from 'react';

class Abbreviation extends React.Component {
    render() {
        return <p>Abbreviation: {this.props.selection}</p>;  /* props is available automatically */
    }
}

export default Abbreviation;