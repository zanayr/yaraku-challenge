import React from 'react';

const button = props => {
  return (
    <div className='button column center-content'>
      <div className='wrapper'>
        <p>{props.value}</p>
      </div>
    </div>
  );
};

export default button;