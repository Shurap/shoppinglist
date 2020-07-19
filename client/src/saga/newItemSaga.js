import { takeEvery, put } from 'redux-saga/effects'
import { ADD_NEW_ITEM_FOR_SAGA } from '../redux/constants'
import { postToServer } from '../utils/apiServer'
import { addListsToStore } from '../redux/actions/actionList'

function* addNewItemForSaga({ data }) {
  try {

    const post = yield postToServer('/lists/item', data)

    console.log(post.message)
    if (post.lists) yield put(addListsToStore(post.lists))

  } catch (error) {
    console.log('saga add new item error')
  }
}

export function* newItemSaga() {
  yield takeEvery(ADD_NEW_ITEM_FOR_SAGA, addNewItemForSaga);
}