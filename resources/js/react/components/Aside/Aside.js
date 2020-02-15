import React from 'react';

// import BookForm from '../form/Book/Book';
import Dialog from '../Dialog/Dialog';

const aside = props => {
  return (
    <aside className='column center-content'>
      <div className='wrapper'>
        <Dialog close={props.toggle}
                data={props.data}
                state={props.state} />
      </div>
    </aside>
  );
};

export default aside;