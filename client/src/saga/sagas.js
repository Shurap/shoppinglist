import { all, fork } from 'redux-saga/effects'
import { signInSaga } from '../saga/signInSaga'

export function* mainSaga() {
  yield all([
    fork(signInSaga),
  ])
}