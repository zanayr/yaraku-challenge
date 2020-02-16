import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const Search = (props) => {
  const [value, setValue] = useState('');

  const handle_onClear = e => {
    e.preventDefault();
    props.clear();
    setValue('');
  }
  const handle_onChange = e => {
    const value = e.target.value;
    props.search(value);
    setValue(value);
  }

  const clear = (
    <div className='clear-button button column center-content'
         onClick={handle_onClear}>
      <div className='wrapper'>
        <p className='dingbat sm-icon'>e</p>
      </div>
    </div>
  );

  return (
    <div className='search row center-content'>
      <div className='wrapper'>
        <label>Search</label>
        <input onChange={handle_onChange}
               placeholder='Search'
               type='text'
               value={value} />
        {value.length ? clear : null}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    clear: () => dispatch(actions.clear_async()),
    search: data => dispatch(actions.search_async(data))
  };
};

export default connect(null, mapDispatchToProps)(Search);