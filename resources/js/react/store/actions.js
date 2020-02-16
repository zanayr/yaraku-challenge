/*
 *  Action.js
 *  This document contains the Redux action builders for the application for state management and component decoupling
 */
import axios from 'axios';

// Actions
export const CLEAR = 'CLEAR';
export const DELETE = 'DELETE';
export const EXPORT = 'EXPORT';
export const FAIL = 'FAIL';
export const GET = 'GET';
export const LOADING = 'LOADING';
export const POST = 'POST';
export const PUT = 'PUT';
export const SEARCH = 'SEARCH';
export const SORT = 'SORT';

//  Action Builders
const clear = () => {
  return {
    type: CLEAR,
    payload: {}
  };
};
const del = data => { // delete
  return {
    type: DELETE,
    payload: data
  };
};
const exp = data => { // export
  return {
    type: EXPORT,
    payload: data
  };
};
const failure = error => {
  return {
    type: FAIL,
    payload: error
  };
};
const get = data => {
  return {
    type: GET,
    payload: data
  };
};
const post = data => {
  return {
    type: POST,
    payload: data
  };
};
const put = data => {
  return {
    type: PUT,
    payload: data
  };
};
const search = data => {
  return {
    type: SEARCH,
    payload: data
  };
};
export const loading = () => {
  return {
    type: LOADING,
    payload: {}
  };
};
export const sort = data => {
  return {
    type: SORT,
    payload: data
  };
};
//  The following action builders are async functions, returning a promise
export const clear_async = () => {
  return dispatch => {
    dispatch(loading());
    new Promise((resolve, _) => {
      resolve();
    })
    .then(() => {
      dispatch(clear());
    });
  };
};
export const delete_async = data => {
  return dispatch => {
    dispatch(loading());
    axios.delete(`/api/books/${data.id}`)
      .then(response => {
        dispatch(del(response.data));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
};
export const export_async = data => {
  return dispatch => {
    dispatch(loading());
    axios.get(`/api/books/export/${data.content}`, {
      format: data.format == 'xls' ? 0 : 1,
      responseType: 'blob',
    })
      .then(response => {
        dispatch(exp({... data, data: response.data}));
    });
  };
};
export const get_async = () => {
  return dispatch => {
    dispatch(loading());
    axios.get('/api/books')
      .then(response => {
        dispatch(get(response.data));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
};
export const post_async = data => {
  return dispatch => {
    dispatch(loading());
    axios.post('/api/books', data)
      .then(response => {
        dispatch(post(response.data));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
};
export const put_async = (id, data) => {
  return dispatch => {
    dispatch(loading());
    axios.put(`/api/books/${id}`, data)
      .then(response => {
        dispatch(put(response.data));
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };
};
export const search_async = data => {
  return dispatch => {
    dispatch(loading()); // had to use thunk to dispatch loading first
    new Promise((resolve, _) => {
      resolve(data);
    })
    .then(() => {
      dispatch(search(data));
    });
  };
};