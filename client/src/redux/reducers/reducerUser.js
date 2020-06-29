import {
  ADD_USER_TO_STORE,
} from '../constants';

const initialState = {
  email: '',
  name: ''
};

function user(state = initialState, action) {
  switch (action.type) {

    //TODO add field name to page register (maybe)

    case ADD_USER_TO_STORE:
      return {...state, email: action.data.email, name: action.data.name};

    default:
      return state;
  }
}

export default user;