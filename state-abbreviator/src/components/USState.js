import React from 'react';

const USState = (props) => {
  console.log('SELECTED STATE: ', props.selectedState)
  return (
    <div>
      <h1>{ props.selectedState }</h1>
    </div>
  );
};

export default USState;
