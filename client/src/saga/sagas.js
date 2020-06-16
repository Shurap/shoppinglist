import { all, fork } from 'redux-saga/effects'
import { signInSaga } from './signInSaga'
import { logInSaga } from './logInSaga'

export function* mainSaga() {
  yield all([
    fork(signInSaga),
    fork(logInSaga),
  ])
}