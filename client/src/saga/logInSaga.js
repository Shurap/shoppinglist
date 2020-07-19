import { takeEvery, put } from 'redux-saga/effects'
import { DO_LOG_IN_FOR_SAGA } from '../redux/constants'
import { addUserToStore } from '../redux/actions/actionUser'
import { addListsToStore } from '../redux/actions/actionList'
import { postToServerWithoutToken } from '../utils/apiServer'

function* doLogInForSaga({ data }) {
  try {

    const post = yield postToServerWithoutToken('/auth/login', data)

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