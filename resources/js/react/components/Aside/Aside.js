import React from 'react';

import BookForm from '../form/Book/Book';

const aside = props => {
  return (
    <aside className='column center-content'>
      <div className='wrapper'>
        <BookForm close={props.toggle}
                  data={props.data}
                  state={props.state} />
      </div>
    </aside>
  );
};

export default aside;