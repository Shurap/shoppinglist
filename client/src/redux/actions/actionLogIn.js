import {
  DO_LOG_IN_SAGA
} from '../constants';

export function doLogInSaga(data) {
  return {
    type: DO_LOG_IN_SAGA,
    data,
  }
}