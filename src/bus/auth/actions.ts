import {
  setType,
  AuthActionTypes,
  SIGN_IN_ASYNC,
  SIGN_UP_ASYNC,
  User,
  AUTH_SET,
  AUTH_START_FETCHING,
  AUTH_STOP_FETCHING,
  AUTH_SET_FETCHING_ERROR,
  SIGN_MODAL_TOGGLE,
  AuthFormData,
  ErrorHttpAction,
  LOGOUT,
  ME,
} from "./types";

// SIGN IN ACTIONS
export function signInAsync(payload: AuthFormData): AuthActionTypes {
  return {
    type: SIGN_IN_ASYNC,
    payload,
  };
}

export function signModalToggle(payload: boolean): AuthActionTypes {
  return {
    type: SIGN_MODAL_TOGGLE,
    payload,
  };
}

export function set(payload: User): setType {
  return {
    type: AUTH_SET,
    payload,
  };
}

export function startFetching(): AuthActionTypes {
  return {
    type: AUTH_START_FETCHING,
  };
}

export function stopFetching(): AuthActionTypes {
  return {
    type: AUTH_STOP_FETCHING,
  };
}

export function setFetchingError(payload: ErrorHttpAction): AuthActionTypes {
  return {
    type: AUTH_SET_FETCHING_ERROR,
    payload,
  };
}

// SIGN UP ACTIONS
export function signUpAsync(payload: AuthFormData): AuthActionTypes {
  return {
    type: SIGN_UP_ASYNC,
    payload,
  };
}

export function logout(): AuthActionTypes {
  return {
    type: LOGOUT,
  };
}

export const me = (tokens): AuthActionTypes => ({
  type: ME,
  tokens,
});
