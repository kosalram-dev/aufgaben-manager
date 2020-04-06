import { takeEvery } from 'redux-saga/effects';
import constant from '../globals/actionConstant';
import loginUser from './userSaga';

export default function* saga() {
  yield takeEvery(constant.LOGIN_USER, loginUser);
}
