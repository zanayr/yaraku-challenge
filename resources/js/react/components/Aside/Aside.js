import React from 'react';

import AddForm from '../form/Add/Add';

const aside = props => {
  return (
    <aside className='column center-content'>
      <div className='wrapper'>
        <AddForm close={props.toggle} />
      </div>
    </aside>
  );
};

export default aside;