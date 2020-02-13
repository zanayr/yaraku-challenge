import React from 'react';
import * as utility from '../../../utility/utility';

const submit = props => {
  return (
    <button className='button column center-content bg-black'
            type='submit'>{utility.capitalize(props.value)}</button>
  );
};

export default submit;