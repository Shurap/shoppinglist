import {
  ADD_NEW_ITEM_FOR_SAGA,
  CHANGE_ITEM_FOR_SAGA,
  DELETE_ITEM_FOR_SAGA
} from '../constants';

export function addNewItemForSaga(data) {
  return {
    type: ADD_NEW_ITEM_FOR_SAGA,
    data,
  }
}

export function changeItemForSaga(data) {
  return {
    type: CHANGE_ITEM_FOR_SAGA,
    data,
  }
}

export function deleteItemForSaga(data) {
  return {
    type: DELETE_ITEM_FOR_SAGA,
    data,
  }
}