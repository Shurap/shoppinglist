import { all, fork } from 'redux-saga/effects'
import { signUpSaga } from '../saga/signUpSaga'
import { logInSaga } from '../saga/logInSaga'
import { newListSaga } from './newListSaga'
import { newItemSaga } from './newItemSaga'

export function* mainSaga() {
  yield all([
    fork(signUpSaga),
    fork(logInSaga),
    fork(newListSaga),
    fork(newItemSaga)
  ])
}