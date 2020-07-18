import {
  ADD_NEW_LIST_FOR_SAGA,
  ADD_LISTS_TO_STORE
} from '../constants';

export function addNewListForSaga(data) {
  return {
    type: ADD_NEW_LIST_FOR_SAGA,
    data,
  }
}

export function addListsToStore(data) {
  return {
    type: ADD_LISTS_TO_STORE,
    data,
  }
}