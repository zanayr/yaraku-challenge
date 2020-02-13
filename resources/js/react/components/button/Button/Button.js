import React from 'react';

const button = props => {
  const handle_onClick = e => {
    e.preventDefault();
    props.click();
  };
  return (
    <div className='button column center-content'
         onClick={handle_onClick}>
      <div className='wrapper'>
        <p>{props.value}</p>
      </div>
    </div>
  );
};

export default button;