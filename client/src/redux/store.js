import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducers from '../redux/reducers/reducers';
import createSagaMiddleware from 'redux-saga';
import { mainSaga } from '../saga/sagas';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ || (() => (noop) => noop);
const sagaMiddleware = createSagaMiddleware();
const enhancers = [
  applyMiddleware(sagaMiddleware),
  devtools()
];

const store = createStore(
  reducers,
  compose(...enhancers)
);

sagaMiddleware.run(mainSaga);

export default store;