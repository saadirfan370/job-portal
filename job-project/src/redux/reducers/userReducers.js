// import React from "react";

import { USER_LOGOUT_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_RESET, USER_LOGOUT_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_RESET, USER_SIGNIN_SUCCESS } from "../constant/userConstant";



export const useReducerSignIn = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true ,userInfo:null,isAuthenticated:false};
    case USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        userInfo:action.payload,
        isAuthenticated:true
      };
    case USER_SIGNIN_FAIL:
      return {
        loading: false,
        userInfo:null,
        isAuthenticated:false,
        error: action.payload,
      };
    case USER_SIGNIN_RESET:
      return {};

    default:
      return state;
  }
};


// log out  reducers



export const useReducerLogout = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGOUT_REQUEST:
      return { loading: true };
    case USER_LOGOUT_SUCCESS:
      return {
        loading: false,
        userInfo:action.payload,
      };
    case USER_LOGOUT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT_RESET:
      return {};

    default:
      return state;
  }
};
