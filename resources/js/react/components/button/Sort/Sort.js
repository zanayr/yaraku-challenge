import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const sort = props => {
  const active = props.sortValue === props.value;

  const handle_stateChange = e => {
    e.preventDefault();
    props.loading();
    props.onSort({
      direction: active ? 1 - props.direction : 0,
      value: props.value
    });
  }

  return (
    <div className={'sort-button button row center-content justify-between' + (active ? ' active' : '')}
         onClick={handle_stateChange}>
      <div className='wrapper'>
        <p>{props.value}</p>
        <span className={'dingbat md-icon icon' + (props.direction ? ' active' : '')}>c</span>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    direction: state.sort.direction,
    sortValue: state.sort.value
  };
};
const mapDispatchToProps = dispatch => {
  return {
    loading: () => dispatch(actions.loading()),
    onSort: data => dispatch(actions.sort(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sort);