import { takeEvery, put } from 'redux-saga/effects'
import { DO_LOG_IN_SAGA } from '../redux/constants'
import { addUserToStore } from '../redux/actions/actionUser'

function* doLogInSaga({ data }) {
  try {
    const response = yield fetch('/auth/login',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })
    const post = yield response.json()
    console.log(post.message || post.email)
  } catch (error) {
    console.log('saga error')
  }
}





export function* logInSaga() {
  yield takeEvery(DO_LOG_IN_SAGA, doLogInSaga);
}