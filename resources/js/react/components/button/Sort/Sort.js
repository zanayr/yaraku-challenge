import React from 'react';

const sort = props => {
  return (
    <div className='sort-button button row center-content justify-between'>
      <div className='wrapper'>
        <p>{props.value}<span className='dingbat md-icon'>c</span></p>
      </div>
    </div>
  );
};

export default sort;