import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "../actions/authActions";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default authReducer;
