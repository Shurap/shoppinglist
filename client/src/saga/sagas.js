import { all, fork } from 'redux-saga/effects'
import { SignUpSaga } from '../saga/signUpSaga'

export function* mainSaga() {
  yield all([
    fork(SignUpSaga),
  ])
}