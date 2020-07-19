import { takeEvery, put } from 'redux-saga/effects'
import { DELETE_ITEM_FOR_SAGA } from '../redux/constants'
import { postToServer } from '../utils/apiServer'
import { addListsToStore } from '../redux/actions/actionList'

function* doDeleteItemForSaga({ data }) {
  try {
    const post = yield postToServer('/lists/item/delete', data)

    console.log(post.message)
    if (post.lists) yield put(addListsToStore(post.lists))

  } catch (error) {
    console.log('saga delete item error')
  }
}

export function* deleteItemSaga() {
  yield takeEvery(DELETE_ITEM_FOR_SAGA, doDeleteItemForSaga);
}