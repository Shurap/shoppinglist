import { all, fork } from 'redux-saga/effects'
import { signUpSaga } from '../saga/signUpSaga'
import { logInSaga } from '../saga/logInSaga'
import { newListSaga } from './newListSaga'
import { newItemSaga } from './newItemSaga'
import { changeItemSaga } from './changeItemSaga'
import { deleteItemSaga } from './deleteItemSaga'

export function* mainSaga() {
  yield all([
    fork(signUpSaga),
    fork(logInSaga),
    fork(newListSaga),
    fork(newItemSaga),
    fork(changeItemSaga),
    fork(deleteItemSaga)
  ])
}