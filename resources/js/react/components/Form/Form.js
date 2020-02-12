import React from 'react';

import Button from '../button/Button/Button';
import Input from '../input/Input/Input';

const form = props => {
  return (
    <aside className='column center-content'>
      <div className='wrapper'>
        <form className='bg-black'>
          <div className='wrapper'>
            <div className='header'>
              <div className='wrapper'>
                <h3>Add New Book</h3>
              </div>
            </div>
            <Input label='Title'
                placeholder='Title' />
            <Input label='Title'
                placeholder='Title' />
            <div className='form-footer row center-content justify-between'>
            <div className='wrapper'>
                <Button value='Cancel' />
                <Button value='Ok' />
            </div>
            </div>
          </div>
        </form>
      </div>
    </aside>
  );
};

export default form;