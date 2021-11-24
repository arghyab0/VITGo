//components
// import jwtDecode from "jwt-decode";

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
    // case "SIGN_IN":
    // case "USER_LOADED":
    //   toast("Welcome...", {
    //     position: toast.POSITION.BOTTOM_RIGHT,
    //   });
    //   const user = jwtDecode(action.token);
    //   return {
    //     ...initialState,
    //     token: action.token,
    //     name: user.name,
    //     email: user.email,
    //     _id: user._id,
    //   };

    // case "SIGN_OUT":
    //   localStorage.removeItem("token");
    //   toast("Goodbye...", {
    //     position: toast.POSITION.BOTTOM_RIGHT,
    //   });
    //   return {
    //     token: null,
    //     name: null,
    //     email: null,
    //     _id: null,
    //   };

    case "ADD_USER":
      return state;
    default:
      return state;
  }
};

export default authReducer;
