import React, { useState } from 'react';

const Search = (props) => {
  const [value, setValue] = useState('');

  const handle_onChange = e => {
    setValue(e.target.value);
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

export default Search;