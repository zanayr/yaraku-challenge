import React, { useState } from 'react';

const Input = (props) => {
  const [value, setValue] = useState('');

  const handle_onChange = e => {
    setValue(e.target.value);
  }

  return (
    <div className='text-input row center-content'>
      <div className='wrapper'>
        <label>{props.label}</label>
        <input onChange={handle_onChange}
               placeholder={props.placeholder}
               type='text'
               value={value} />
      </div>
    </div>
  );
};

export default Input;