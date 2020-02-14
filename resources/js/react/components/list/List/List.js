import React from 'react';
import { connect } from 'react-redux';

import Item from '../Item/Item';

const list = props => {
  const items = props.data.map(d => {
    return <Item action={props.action} data={d} key={d.id} />
  });

  return (
    <section className='list column'>
      <div className='wrapper'>
        {items}
      </div>
    </section>
  );
}

// export default list;

const mapStateToProps = state => {
  return {
    data: state.result
  };
};

export default connect(mapStateToProps)(list);