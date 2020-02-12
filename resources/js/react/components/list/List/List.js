import React from 'react';

import Item from '../Item/Item';

const list = props => {
  const items = Object.keys(props.data).map(key => {
    let item = props.data[key];
    return <Item data={item} key={item.id} />
  });

  return (
    <section className='list column'>
      <div className='wrapper'>
        {items}
      </div>
    </section>
  );
}

export default list;