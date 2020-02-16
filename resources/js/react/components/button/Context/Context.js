import React from 'react';

const context = props => {
  const handle_onClick = e => {
    e.preventDefault();
    props.action();
  };
  return (
    <div className='button column center-content'
         onClick={handle_onClick}>
      <div className='wrapper'>
        <p><span className='dingbat md-icon'>{props.value}</span></p>
      </div>
    </div>
  );
};

export default context;