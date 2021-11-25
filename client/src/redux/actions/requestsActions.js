import axios from "axios";
import { toast, Slide } from "react-toastify";

export const addRequest = (requestData) => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth._id.toString();
      const res = await axios.post("/api/request/", {
        ...requestData,
        issuedBy: uid,
      });

      dispatch({
        type: "ADD_REQUEST",
        request: res.data,
      });

      toast.success("New outing request added successfully.", {
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

export const fetchRequests = () => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth._id.toString();
      const utype = getState().auth.userType;
      let res;
      if (utype === "STUDENT") {
        res = await axios.get(`/api/request?uid=${uid}`);
      } else {
        res = await axios.get(`/api/request`);
      }

      dispatch({
        type: "FETCH_REQUESTS",
        request: res.data,
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
