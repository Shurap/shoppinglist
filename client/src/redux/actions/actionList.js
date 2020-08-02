import {
  ADD_NEW_LIST_FOR_SAGA,
  ADD_LISTS_TO_STORE,
  DELETE_LIST_FOR_SAGA
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

export function deleteListForSaga(data) {
  return {
    type: DELETE_LIST_FOR_SAGA,
    data,
  }
}