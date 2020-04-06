import userConstant from '../globals/actionConstant';

const initialState = {
  userData: {},
  title: 'Tasks'
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userConstant.LOGIN_USER:
      return {
        ...state,
        userData: {}
      };
    case userConstant.SWITCH_TITLE:
      return {
        ...state,
        title: action.data
      };
    default:
      return state;
  }
}
