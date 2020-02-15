import React, { useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import Button from '../button/Button/Button'
import Input from '../input/Input/Input';
import Submit from '../button/Submit/Submit';

const book = props => {
  const handle_onCancel = () => {
    props.close(null);
  };
  const handle_onSubmit = (e) => {
    e.preventDefault();
    const title = form.current.title ? form.current.title.value : null;
    const author = form.current.author ? form.current.author.value : null;
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
        break;
      case 2:
        props.delete(props.data);
        break;
      case 3:
        props.export({
          title: title
        });
        break;
      default:
        break;
    }
    props.close(null);
  };
  //  From ref
  let form = useRef();

  //  From content
  let header;
  let content = (
    <Input label='title'
           value={(props.state && props.data) ? props.data.title : ''}/>
  );
  switch (props.state) {
    case 0:
      header = 'Add Book';
      break;
    case 1:
      header = 'Edit Book';
      break;
    case 2:
      header = 'Delete Book';
      content = (
        <div className='form-message'>
          <div className='wrapper'>
           <p>{`Are you sure you want to delete ${props.data.title} by ${props.data.author} from your collection?`}</p>
          </div>
        </div>
      );
      break;
    case 3:
      header = 'Download Books';
      break;
    default:
      break;
  }
  
  return (
    <form className='bg-black'
          onSubmit={handle_onSubmit}
          ref={form} >
      <div className='wrapper'>
        <div className='form-header'>
          <div className='wrapper'>
            <h3>{header}</h3>
          </div>
        </div>
        {content}
        {props.state < 2 ? <Input label='author'
               value={(props.state && props.data) ? props.data.author : ''}/> : null}
        <div className='form-footer row center-content justify-between'>
          <div className='wrapper'>
            <Button click={handle_onCancel}
                    value='cancel' />
            <Submit value={props.state != 2 ? 'ok' : 'confirm'} />
          </div>
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    delete: data => dispatch(actions.delete_async(data)),
    export: data => dispatch(actions.export_async(data)),
    post: data => dispatch(actions.post_async(data)),
    put: (id, data) => dispatch(actions.put_async(id, data))
  };
};

export default connect(null, mapDispatchToProps)(book);