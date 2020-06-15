import {
  ADD_USER_TO_STORE,
} from '../constants';

const initialState = {
  email: '',
  password: ''
};

function user(state = initialState, action) {
  switch (action.type) {

    case ADD_USER_TO_STORE:
      return {...state, email: action.data.email, password: action.data.password};

    default:
      return state;
  }
}

export default user;