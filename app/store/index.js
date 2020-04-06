import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';

import reducer from '../redux';
import saga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'user',
    'task'
  ],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(
    sagaMiddleware,
    createLogger()
  )
);

export const persistor = persistStore(store);

sagaMiddleware.run(saga);
