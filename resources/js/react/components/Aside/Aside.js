import React from 'react';

// import BookForm from '../form/Book/Book';
import Dialog from '../Dialog/Dialog';

const aside = props => {
  // let form = props.state != 2 ?
  //   <BookForm close={props.toggle}
  //     data={props.data}
  //     state={props.state} /> :
  //   <DeleteForm class={props.toggle}
  //     data={props.data} />;
  // }
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