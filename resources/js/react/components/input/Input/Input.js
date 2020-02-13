import React, { useState } from 'react';
import * as utility from '../../../utility/utility';

const Input = (props) => {
  const [value, setValue] = useState('');

  const handle_onChange = e => {
    setValue(e.target.value);
  }

  return (
    <div className='text-input row center-content'>
      <div className='wrapper'>
        <label htmlFor={props.label}>{props.label}</label>
        <input onChange={handle_onChange}
               name={props.label}
               placeholder={props.label[0].toUpperCase() + props.label.slice(1)}
               type='text'
               value={value} />
      </div>
    </div>
  );
};

export default Input;