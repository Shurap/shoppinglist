import { takeEvery, put } from 'redux-saga/effects'
import { SIGN_UP_FOR_SAGA } from '../redux/constants'
import { addUserToStore } from '../redux/actions/actionUser'

function* SignUpForSaga({ data }) {
  try {

    //TODO: Let's create post and get utils sometime later 
    //in a separate PR as described here 
    //https://trello.com/c/LDfBFkEN/11-create-post-and-get-helper-utils
    
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





export function* SignUpSaga() {
  yield takeEvery(SIGN_UP_FOR_SAGA, SignUpForSaga);
}