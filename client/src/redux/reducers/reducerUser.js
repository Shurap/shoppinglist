import {
  ADD_USER_TO_STORE,
} from '../constants';

const initialState = {
  userId: '',
  nick: ''
};

function user(state = initialState, action) {
  switch (action.type) {

    case ADD_USER_TO_STORE:
      return {...state, userId: action.data.userId, nick: action.data.nick};

    default:
      return state;
  }
}

export default user;