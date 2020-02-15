import axios from 'axios';
import { Parser } from 'json2csv';

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
const del = data => {
  return {
    type: DELETE,
    payload: data
  };
};
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
//  Post
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

/*  EXPORTED ACTION BUILDERS  */
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

//  ASYNC ACTIONS
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
    axios({
      url: 'api/books/export',
      method: 'GET',
      responseType: 'blob'
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', data.title + '.xlsx'); //or any other extension
      document.body.appendChild(link);
      link.click();
    })
    // axios.get('/api/books/export', data)
    //   .then(response => {
    //     console.log(response);
        
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
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