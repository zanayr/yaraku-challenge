import React, { useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

import Button from '../../button/Button/Button';
import Input from '../../input/Input/Input';
import Submit from '../../button/Submit/Submit';

const book = props => {
  const handle_onCancel = () => {
    props.close(null);
  };
  const handle_onSubmit = (e) => {
    e.preventDefault();
    const title = form.current.title.value;
    const author = form.current.author.value;
    switch (props.state) {
      case 0:
        props.post({
          title: title,
          author: author
        });
        break;
      case 1:
        props.put(props.data.id, {
          title: title,
          author: author
        });
      default:
        break;
    }
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
            <h3>{props.state ? 'Edit' : 'Add'} Book</h3>
          </div>
        </div>
        <Input label='title'
               value={props.state ? props.data.title : ''}/>
        <Input label='author'
               value={props.state ? props.data.author : ''}/>
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
    post: data => dispatch(actions.post_async(data)),
    put: (id, data) => dispatch(actions.put_async(id, data))
  };
};

export default connect(null, mapDispatchToProps)(book);