import axios from 'axios';

/*  ACTIONS  */
export const CLEAR = 'CLEAR';
export const DELETE = 'DELETE';
export const FAIL = 'FAIL';
export const GET = 'GET';
export const LOADING = 'LOADING';
export const POST = 'POST';
export const PUT = 'PUT';
export const SEARCH = 'SEARCH';
export const SORT = 'SORT';

/*  ACTION BUILDERS  */
//  Clear search results
const clear = () => {
  return {
    type: CLEAR,
    payload: {}
  };
};

//  Delete

//  Failure
const failure = error => {
  return {
    type: FAIL,
    payload: error
  };
};

//  Get all data
const get = data => {
  return {
    type: GET,
    payload: data
  };
};

//  Set is loading
const loading = () => {
  return {
    type: LOADING,
    payload: {}
  };
};

//  SEARCH

/*  EXPORTED ACTION BUILDERS  */
//  Loading
//  Sort
export const sort = data => {
  return {
    type: SORT,
    payload: data
  };
};

//  Get Async
export const get_async = () => {
  return dispatch => {
    dispatch(loading());
    axios.get('/api/books')
      .then(response => {
        dispatch(get(response.data));
      })
      .catch(error => {
        console.log('error:', error);
        dispatch(failure(error));
      });
  };
};
