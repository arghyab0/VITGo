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
        request: res.data.request,
      });

      toast.success(res.data.message, {
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
