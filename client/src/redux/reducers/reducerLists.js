import {
  ADD_LISTS_TO_STORE,
} from '../constants';

const initialState = {
  lists: []
};

function lists(state = initialState, action) {
  switch (action.type) {

    case ADD_LISTS_TO_STORE:
      return {...state, lists: action.data};

    default:
      return state;
  }
}

export default lists;