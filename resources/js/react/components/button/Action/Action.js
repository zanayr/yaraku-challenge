import React from 'react';

const action = props => {
  const handle_onClick = e => {
    e.preventDefault();
    props.click(0);
  }
  return (
    <div className='action-button button column center-content bg-primary'
         onClick={handle_onClick}>
      <div className='wrapper'>
        <p><span className="dingbat lg-icon">d</span></p>
      </div>
    </div>
  );
};

export default action;