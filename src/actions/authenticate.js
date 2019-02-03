import { AsyncStorage } from "react-native";
import { DATA_SESSION } from "../config/global";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  RESTORE_SESSION,
  RESTORE_REQUEST,
  RESTORE_FAILED
} from "../config/redux-action-types/authenticate";

export function login(email, password) { // Fake authentication function
  return async dispatch => {
    dispatch(loginRequest()); // dispatch a login request to update the state
    try {
      if (email.trim() === "test123@nomail.com" && password === "123456") { //If the email and password matches
        const session = { token: "abc1234", email: email, username: "test123" } // Create a fake token for authentication
        await AsyncStorage.setItem(DATA_SESSION, JSON.stringify(session)) // Stringinfy the session data and store it
        setTimeout(() => { // Add a delay for faking a asynchronous request
          dispatch(loginSuccess(session)) // Dispatch a successful sign in after 1.5 seconds
        }, 1500)
      } else { // Otherwise display an error to the user
        setTimeout(() => { // Dispatch an error state
          dispatch(loginFailed("Incorrect email or password"))
        }, 1500)
      }
    } catch (err) { // When something goes wrong
      console.log(err)
      dispatch(loginFailed("Something went wrong"));
    }
  };
} // login

export function restoreSession() { // Restore session of the user who is authenticated
  return async dispatch => {
    dispatch(restoreRequest()); // Dispatch an restore request session
    try {
      const session = await AsyncStorage.getItem(DATA_SESSION) // Get the data session in the current device
      if (session != null) { // If session exist and authenticated
        dispatch(loginSuccess(JSON.parse(session))) // Dispatch a login success redirecting to the home screen
      } else { // If not dispatch a restore failed action to be redirected to the login screen
        dispatch(restoreFailed())
      }
    } catch (err) { // When something goes wrong
      dispatch(restoreFailed())
    }
  };
} // restoreSession

export function logout() { // Fake logout request
  return async dispatch => {
    dispatch(logoutRequest()) // Dispatch a logout request
    try {
      setTimeout(async () => { // Add a 1.5 second delay to fake an asynchronous ajax request
        await AsyncStorage.removeItem(DATA_SESSION); // Remove the session data and unauthenticate the user
        dispatch(logoutSuccess()) // Dispatch a logout success action
      }, 1500)
    } catch (err) { // When something goes wrong
      dispatch(logoutFailed("Something went wrong"))
    }
  }
} // logout

function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
} //loginRequest

function loginSuccess(session) {
  return {
    type: LOGIN_SUCCESS,
    data: {
      session
    }
  };
} // loginSuccess

function loginFailed(error) {
  if (!error) {
    error = "Network Error";
  }
  return {
    type: LOGIN_FAILED,
    data: {
      error: error
    }
  };
} // loginFailed

function logoutRequest() {
  return {
    type: LOGOUT_REQUEST
  };
} //logoutRequest

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
} // logoutSuccess

function logoutFailed(error) {
  if (!error) {
    error = "Network Error";
  }
  return {
    type: LOGOUT_FAILED,
    data: {
      error: error
    }
  };
} // logoutFailed

function restoreRequest() {
  return {
    type: RESTORE_REQUEST
  };
} //restoreRequest

function restoreFailed() {
  return {
    type: RESTORE_FAILED
  };
} //restoreFailed
