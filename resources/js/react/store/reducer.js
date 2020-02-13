import * as actions from './actions';
import * as utility from '../utility/utility';

const initial = {
  data: [],
  error: null,
  isLoading: false,
  result: [], // search results
  sort: {
    direction: 1, // 0 = DESC, 1 = ASC
    value: 'title'
  }
}

const reducer = (state = initial, action) => {
  switch (action.type) {
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
        result: utility.map[1](action.payload, 'title') // initially sort data by title
      };
    case actions.LOADING:
      return {
        ...state,
        isLoading: true
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