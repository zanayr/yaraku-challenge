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
const del = data => {
  return {
    type: DELETE,
    payload: data
  }
}

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
//  Loading
export const loading = () => {
  return {
    type: LOADING,
    payload: {}
  };
};
//  Sort
export const sort = data => {
  return {
    type: SORT,
    payload: data
  };
};

//  Get Async
export const delete_async = data => {
  return dispatch => {
    dispatch(loading());
    axios.delete(`/api/books/${data.id}`)
      .then(response => {
        dispatch(del(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(failure(error));
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
//  Post Async
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
  }
}
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