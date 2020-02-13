import React, { useState } from 'react';

const sort = props => {
  const [state, setState] = useState(0);
  const [order, setOrder] = useState(0);

  const handle_stateChange = e => {
    e.preventDefault();
    let nextState = !state;
    setState(nextState);
    props.onclick([nextState, order]);
  }
  const handle_orderChange = e => {
    e.preventDefault();
    let nextOrder = !order;
    setOrder(nextOrder);
    props.onclick([state, nextOrder]);
  }

  return (
    <div className={'sort-button button row center-content justify-between' + (state ? ' active' : '')}>
      <div className='wrapper'>
        <p onClick={handle_stateChange}>{props.value}</p>
        <span className={'dingbat md-icon icon' + (order ? ' active' : '')}
              onClick={handle_orderChange}>c</span>
      </div>
    </div>
  );
};

export default sort;