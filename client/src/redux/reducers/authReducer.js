//components
import jwtDecode from "jwt-decode";

const initialState = {
  _id: null,
  userID: null,
  displayName: null,
  email: null,
  userType: null,
  userStatus: null,
  jwttoken: localStorage.getItem("jwttoken"),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
    case "USER_LOADED":
      const user = jwtDecode(action.jwttoken);
      console.log(user);
      return {
        ...initialState,
        jwttoken: action.jwttoken,
        _id: user._id,
        userID: user.userID,
        displayName: user.displayName,
        email: user.email,
        userType: user.userType,
        userStatus: user.userStatus,
      };

    case "ADD_USER":
      return state;
    default:
      return state;
  }
};

export default authReducer;
