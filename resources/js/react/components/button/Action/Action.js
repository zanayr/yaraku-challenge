import React from 'react';

const action = props => {
  const handle_onClick = e => {
    e.preventDefault();
    props.click(props.state);
  }
  return (
    <div className={'action-button button column center-content bg-primary ' + props.position}
         onClick={handle_onClick}>
      <div className='wrapper'>
        <p><span className="dingbat lg-icon">{props.state ? 'f' : 'd'}</span></p>
      </div>
    </div>
  );
};

export default action;