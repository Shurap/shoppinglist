import { takeEvery, put } from 'redux-saga/effects'
import { DO_SIGN_IN_SAGA } from '../redux/constants'
import { addUserToStore } from '../redux/actions/actionUser'

function* doSignInSaga({ data }) {
  try {
    const response = yield fetch('/auth/register',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })
    const post = yield response.json()
    console.log(post.message)
  } catch (error) {
    console.log('saga error')
  }
}





export function* signInSaga() {
  yield takeEvery(DO_SIGN_IN_SAGA, doSignInSaga);
}