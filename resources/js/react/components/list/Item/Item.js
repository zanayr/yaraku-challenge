import React from 'react';

import Context from '../../button/Context/Context';

const item = props => {
  return (
    <article className="item row center-content justify-between">
      <div className='wrapper'>
        <div className='content column justify-between'>
          <div className='wrapper'>
            <h1>{props.data.title}</h1>
            <p>{props.data.author}</p>
          </div>
        </div>
        <div className='context row center-content'>
          <div className='wrapper'>
            <Context action={() => props.action(1, props.data)} value='a'/>
            <Context action={() => props.action(2, props.data)} value='e'/>
          </div>
        </div>
      </div>
    </article>
  );
};

export default item;