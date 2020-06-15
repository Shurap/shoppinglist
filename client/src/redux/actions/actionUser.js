import {
  ADD_USER_TO_STORE
} from '../constants';

export function addUserToStore(data) {
  return {
    type: ADD_USER_TO_STORE,
    data,
  }
}