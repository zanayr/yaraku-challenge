import React from 'react';

const context = props => {
  return (
    <div className='context-button button column center-content'>
      <div className='wrapper'>
        <p><span className='dingbat md-icon'>{props.value}</span></p>
      </div>
    </div>
  );
};

export default context;