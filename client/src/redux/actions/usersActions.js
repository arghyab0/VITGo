import axios from "axios";
import { toast, Slide } from "react-toastify";

// export const addRequest = (requestData) => {
//   return async (dispatch, getState) => {
//     try {
//       const uid = getState().auth._id.toString();
//       const res = await axios.post("/api/request/", {
//         ...requestData,
//         issuedBy: uid,
//       });

//       dispatch({
//         type: "ADD_REQUEST",
//         request: res.data,
//       });

//       toast.success("New outing request added successfully.", {
//         position: toast.POSITION.TOP_CENTER,
//         transition: Slide,
//         autoClose: 2500,
//       });
//     } catch (err) {
//       toast.error(err.response?.data, {
//         position: toast.POSITION.TOP_CENTER,
//         transition: Slide,
//         autoClose: 2500,
//       });
//     }
//   };
// };

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/user/");

      dispatch({
        type: "FETCH_USERS",
        user: res.data,
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

export const blacklistUsers = (uid) => {
  return async (dispatch, getState) => {
    try {
      const utype = getState().auth.userType;
      const res = await axios.put(`/api/user/blacklist/${uid}`, {
        userType: utype,
      });

      dispatch({
        type: "BLACKLIST_USER",
        user: res.data,
      });

      toast.success(`Student blacklisted successfully.`, {
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

export const unblacklistUsers = (uid) => {
  return async (dispatch, getState) => {
    try {
      const utype = getState().auth.userType;
      const res = await axios.put(`/api/user/unblacklist/${uid}`, {
        userType: utype,
      });

      dispatch({
        type: "UNBLACKLIST_USER",
        user: res.data,
      });

      toast.success(`Student unblacklisted successfully.`, {
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
