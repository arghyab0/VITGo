import axios from "axios";
import { toast, Slide } from "react-toastify";

export const register = (userData) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/api/auth/register", userData);
      dispatch({
        type: "ADD_USER",
      });

      console.log(res.data);

      toast.success(res.data, {
        position: toast.POSITION.TOP_CENTER,
        transition: Slide,
        autoClose: 2500,
      });
    } catch (err) {
      console.log(err.response.data);

      toast.error(err.response?.data, {
        position: toast.POSITION.TOP_CENTER,
        transition: Slide,
        autoClose: 2500,
      });
    }
  };
};
