import {
  ADD_NEW_ITEM_FOR_SAGA
} from '../constants';

export function addNewItemForSaga(data) {
  return {
    type: ADD_NEW_ITEM_FOR_SAGA,
    data,
  }
}