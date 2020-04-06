import { put } from 'redux-saga/effects';
import userConstant from '../globals/actionConstant';
// import userService from  '../service/userService';

export default function* loginUser(action) {
  try {
    const { data, cb } = action;
    if (data.email === '' && data.password === '') {
      cb('login');
    } else {
      cb('invalid');
    }
    const response = '';
    // const data = yield call(userService)
    yield put({ type: userConstant.LOGIN_USER_SUCCESS, response });
  } catch (e) {
    yield put({ type: userConstant.LOGIN_USER_ERROR, e });
  }
}
