import { takeEvery } from 'redux-saga/effects'
import { SIGN_UP_FOR_SAGA } from '../redux/constants'
import { postToServerWithoutToken } from '../utils/apiServer'

function* signUpForSaga({ data }) {
  try {
    const post = yield postToServerWithoutToken('/auth/register', data)
    console.log(post.message)
  } catch (error) {
    console.log('saga sign error')
  }
}

export function* signUpSaga() {
  yield takeEvery(SIGN_UP_FOR_SAGA, signUpForSaga);
}