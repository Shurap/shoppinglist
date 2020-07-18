import { takeEvery, put } from 'redux-saga/effects'
import { ADD_NEW_LIST_FOR_SAGA } from '../redux/constants'
import { postToServer } from '../utils/apiServer'
import { addListsToStore } from '../redux/actions/actionList'

function* addNewListForSaga({ data }) {
  try {
    const response = yield postToServer('/lists/new', data)

    console.log(response.message)
    yield (response.lists) ? put(addListsToStore(response.lists)) : put(addListsToStore([]))

  } catch (error) {
    console.log('saga add new list error')
  }
}

export function* newListSaga() {
  yield takeEvery(ADD_NEW_LIST_FOR_SAGA, addNewListForSaga);
}