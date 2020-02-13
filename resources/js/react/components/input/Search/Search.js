import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const Search = (props) => {
  const [value, setValue] = useState('');

  const handle_onChange = e => {
    const value = e.target.value;
    props.search(value);
    setValue(value);
  }

  return (
    <div className='search-input row center-content'>
      <div className='wrapper'>
        <label>Search</label>
        <input onChange={handle_onChange}
               placeholder='Search'
               type='text'
               value={value} />
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    search: data => dispatch(actions.search_async(data))
  };
};

export default connect(null, mapDispatchToProps)(Search);