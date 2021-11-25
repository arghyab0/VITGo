import axios from "axios";
import { toast, Slide } from "react-toastify";

export const register = (addUserData) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/api/auth/register", addUserData);
      dispatch({
        type: "ADD_USER",
      });

      toast.success(res.data, {
        position: toast.POSITION.TOP_CENTER,
        transition: Slide,
        autoClose: 2500,
      });
    } catch (err) {
      toast.error(err.response?.data, {
        position: toast.POSITION.TOP_CENTER,
        transition: Slide,
        autoClose: 2500,
      });
    }
  };
};

export const login = (userCredentials) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/api/auth/login", userCredentials);

      localStorage.setItem("jwttoken", res.data);

      dispatch({
        type: "LOGIN_USER",
        jwttoken: res.data,
      });

      toast.success("Logged in successfully.", {
        position: toast.POSITION.TOP_CENTER,
        transition: Slide,
        autoClose: 1500,
      });
    } catch (err) {
      toast.error(err.response?.data, {
        position: toast.POSITION.TOP_CENTER,
        transition: Slide,
        autoClose: 1500,
      });
    }
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const jwttoken = getState().auth.jwttoken;
    if (jwttoken) {
      dispatch({ type: "USER_LOADED", jwttoken });
    } else return null;
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({
      type: "LOGOUT_USER",
    });

    toast.success("Logged out successfully.", {
      position: toast.POSITION.TOP_CENTER,
      transition: Slide,
      autoClose: 1500,
    });
  };
};
