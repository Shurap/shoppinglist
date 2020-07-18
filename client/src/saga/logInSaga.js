import { takeEvery, put } from 'redux-saga/effects'
import { DO_LOG_IN_FOR_SAGA } from '../redux/constants'
import { addUserToStore } from '../redux/actions/actionUser'
import { addListsToStore } from '../redux/actions/actionList'

function* doLogInForSaga({ data }) {
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
      yield (post.lists) ? put(addListsToStore(post.lists)) : put(addListsToStore([]))


    } catch (error) {
      console.log('saga login error')
    }
  }

export function* logInSaga() {
  yield takeEvery(DO_LOG_IN_FOR_SAGA, doLogInForSaga);
}