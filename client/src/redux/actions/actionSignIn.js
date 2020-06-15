import {
  DO_SIGN_IN_SAGA
} from '../constants';

export function doSignInSaga(data) {
  return {
    type: DO_SIGN_IN_SAGA,
    data,
  }
}