import React, { useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import Button from '../../button/Button/Button';
import Input from '../../input/Input/Input';
import Submit from '../../button/Submit/Submit';

const add = props => {
  const handle_onCancel = () => {
    props.close(null);
  };
  const handle_onSubmit = (e) => {
    e.preventDefault();
    props.post({
      title: form.current.title.value,
      author: form.current.author.value
    });
    props.close(null);
  };

  let form = useRef();

  return (
    <form className='bg-black'
          onSubmit={handle_onSubmit}
          ref={form} >
      <div className='wrapper'>
        <div className='form-header'>
          <div className='wrapper'>
            <h3>Add New Book</h3>
          </div>
        </div>
        <Input label='title' />
        <Input label='author' />
        <div className='form-footer row center-content justify-between'>
          <div className='wrapper'>
            <Button click={handle_onCancel}
                    value='cancel' />
            <Submit value='ok' />
          </div>
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    post: data => dispatch(actions.post_async(data))
  };
};

export default connect(null, mapDispatchToProps)(add);