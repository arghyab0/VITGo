import axios from "axios";
import { toast, Slide } from "react-toastify";

//helper function to set jwt token headers
import { setHeaders } from "../helpers";

export const addRequest = (requestData) => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth._id.toString();
      const regNo = getState().auth.userID;

      const res = await axios.post(
        "/api/request/",
        {
          ...requestData,
          issuedBy: uid,
          issuedByRegNo: regNo,
        },
        setHeaders()
      );

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
        res = await axios.get(`/api/request?uid=${uid}`, setHeaders());
      } else {
        res = await axios.get(`/api/request`, setHeaders());
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

export const approveRejectRequests = (updatedStatus, reqID) => {
  return async (dispatch, getState) => {
    try {
      const utype = getState().auth.userType;
      const res = await axios.put(
        `/api/request/manager/${reqID}`,
        {
          userType: utype,
          requestStatus: updatedStatus,
        },
        setHeaders()
      );

      dispatch({
        type: "APPROVE_REJECT_REQUESTS",
        request: res.data,
      });

      toast.success(
        `Outing request ${updatedStatus.toLowerCase()} successfully.`,
        {
          position: toast.POSITION.TOP_CENTER,
          transition: Slide,
          autoClose: 2500,
        }
      );
    } catch (err) {
      toast.error(err.response?.data, {
        position: toast.POSITION.TOP_CENTER,
        transition: Slide,
        autoClose: 2500,
      });
    }
  };
};

export const checkinCheckoutRequests = (updatedStatus) => {
  return async (dispatch, getState) => {
    try {
      const utype = getState().auth.userType;
      const res = await axios.put(
        "/api/request/security/",
        {
          ...updatedStatus,
          userType: utype,
        },
        setHeaders()
      );

      dispatch({
        type: "CHECKIN_CHECKOUT_REQUESTS",
        request: res.data,
      });

      const msg =
        res.data.requestStatus === "ONGOING" ? "checked-out" : "checked-in";

      toast.success(`Student ${msg} successfully.`, {
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
