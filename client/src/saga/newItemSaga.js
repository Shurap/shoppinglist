import { takeEvery, put } from 'redux-saga/effects'
import { ADD_NEW_ITEM_FOR_SAGA } from '../redux/constants'
import { postToServer } from '../utils/apiServer'

function* addNewItemForSaga({ data }) {
  try {

    const response = yield postToServer('/lists/item', data)
    console.log('response', response)

  } catch (error) {
    console.log('saga add new item error')
  }
}

export function* newItemSaga() {
  yield takeEvery(ADD_NEW_ITEM_FOR_SAGA, addNewItemForSaga);
}