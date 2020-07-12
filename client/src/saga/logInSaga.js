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

    yield localStorage.setItem('userInfo', JSON.stringify({
      userId: post.userId, token: post.token
    }))

    yield put(addUserToStore({ userId: post.userId, nick: post.nick }));

    //TODO component showed all messages
    console.log(post.message)

  } catch (error) {
    console.log('saga login error')
  }
}

export function* logInSaga() {
  yield takeEvery(DO_LOG_IN_SAGA, doLogInSaga);
}