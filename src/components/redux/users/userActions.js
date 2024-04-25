import {
  FETCH_USER_ACCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
} from "./userTypes";
import axios from "axios";

export const fetchUserList = () => {
  return {
    type: FETCH_USER_ACCESS,
  };
};

export const userSuccess = (userlist) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: userlist,
  };
};

export const userFailure = (err) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: err,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserList);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        const users = resp.data;
        dispatch(userSuccess(users));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(userFailure(errMsg));
      });
  };
};
