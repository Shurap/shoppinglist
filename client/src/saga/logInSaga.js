import { takeEvery, put } from 'redux-saga/effects'
import { DO_LOG_IN_SAGA } from '../redux/constants'
import { addUserToStore } from '../redux/actions/actionUser'

function* doLogInSaga({ data }) {
  try {
    console.log('saga login')
    const response = yield fetch('/auth/login',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })
    const post = yield response.json()

    localStorage.setItem('userInfo', JSON.stringify({
      userId: post.userId, token: post.token
    }))
    console.log(post.message)
  } catch (error) {
    console.log('saga login error')
  }
}





export function* logInSaga() {
  yield takeEvery(DO_LOG_IN_SAGA, doLogInSaga);
}