import {
  SIGN_UP_FOR_SAGA
} from '../constants';

export function SignUpForSaga(data) {
  return {
    type: SIGN_UP_FOR_SAGA,
    data,
  }
}