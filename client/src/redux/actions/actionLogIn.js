import {
  DO_LOG_IN_FOR_SAGA
} from '../constants';

export function doLogInForSaga(data) {
  return {
    type: DO_LOG_IN_FOR_SAGA,
    data,
  }
}