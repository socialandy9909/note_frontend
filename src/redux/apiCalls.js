import {registerFailure, registerStart, registerSuccess, loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err));
  }
};

export const register= async (dispatch, user) => {
  dispatch(registerStart());
  console.log('register api call function call');
  try {
    console.log('from try block');
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    console.log('this is error');
    console.log(err);
    dispatch(registerFailure());
  }
};