import { all, fork } from 'redux-saga/effects'
import { signUpSaga } from '../saga/signUpSaga'
import { logInSaga } from '../saga/logInSaga'

export function* mainSaga() {
  yield all([
    fork(signUpSaga),
    fork(logInSaga)
  ])
}