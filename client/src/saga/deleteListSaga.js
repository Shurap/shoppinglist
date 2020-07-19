import { takeEvery, put } from 'redux-saga/effects'
import { DELETE_LIST_FOR_SAGA } from '../redux/constants'
import { postToServer } from '../utils/apiServer'
import { addListsToStore } from '../redux/actions/actionList'

function* doDeleteListForSaga({ data }) {
  try {
    const post = yield postToServer('/lists/delete', data)

    console.log(post.message)
    if (post.lists) yield put(addListsToStore(post.lists))

  } catch (error) {
    console.log('saga delete list error')
  }
}

export function* deleteListSaga() {
  yield takeEvery(DELETE_LIST_FOR_SAGA, doDeleteListForSaga);
}