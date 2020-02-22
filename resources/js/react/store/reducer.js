/*
 *  Reducer.js
 *  This document is the Redux reducer used in the application for state management and component decoupling
 */

import * as actions from './actions';
import * as utility from '../utility/utility';

//  Initial State
const initial = {
  data: [], // all data from the SQL database
  error: null,
  isLoading: false,
  result: [], // data that is displayed in the application
  sort: {
    direction: 1, // 0 = DESC, 1 = ASC
    value: 'title' // which column to sort on
  }
}

const reducer = (state = initial, action) => {
  let data, result;
  switch (action.type) {
    case actions.CLEAR:
      return {
        ...state,
        isLoading: false,
        result: utility.map[state.sort.direction](state.data, state.sort.value)
      };
    case actions.DELETE:
      data = state.data.filter(d => {
        return d.id != action.payload.id
      });
      return {
        ...state,
        data: data,
        isLoading: false,
        result: utility.map[state.sort.direction](data, state.sort.value)
      };
    case actions.EXPORT:
      //  Should create a DOM object that begins downloading the blob passed
      //  from the backend export controller
      const url = window.URL.createObjectURL(new Blob([action.payload.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${action.payload.content}.${action.payload.format}`);
      document.body.appendChild(link);
      link.click();
      break;
    case actions.FAIL:
      return {
        ...state, 
        error: action.payload
      };
    case actions.GET:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        result: utility.map[1](action.payload, 'title') // initially sort data by title, ascending
      };
    case actions.LOADING:
      return {
        ...state,
        isLoading: true
      };
    case actions.POST:
      data = state.data.concat(action.payload);
      return {
        ...state,
        data: data,
        isLoading: false,
        result: utility.map[state.sort.direction](data, state.sort.value)
      };
    case actions.PUT:
      data = state.data.filter(d => {
        return d.id != action.payload.id
      }).concat(action.payload);
      return {
        ...state,
        data: data,
        isLoading: false,
        result: utility.map[state.sort.direction](data, state.sort.value)
      };
    case actions.SEARCH:
      // Should return an array of books that match on a substring of text
      result = state.data.filter(datum => {
        let author = datum.author.toLowerCase();
        let title = datum.title.toLowerCase();
        let value = action.payload.toLowerCase();
        return author.includes(value) || title.includes(value);
      });
      return {
        ...state,
        isLoading: false,
        result: utility.map[state.sort.direction](result, state.sort.value)
      };
    case actions.SORT:
      return {
        ...state,
        isLoading: false,
        result: utility.map[action.payload.direction](state.result, action.payload.value),
        sort: {
          direction: action.payload.direction,
          value: action.payload.value
        }
      }
    default:
      return state;
  }
};

export default reducer;