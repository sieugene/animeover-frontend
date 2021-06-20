import { signModalToggle } from "bus/auth/actions";
import { useAuth } from "bus/auth/hooks/useAuth";
import { BaseButton } from "Elements/Base/Button/BaseButton";
import BaseModal from "Elements/Base/Modal/BaseModal";
import { SignInForm } from "Elements/signInForm";
import { SignUpForm } from "Elements/signUpForm";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { zIndexLayout } from "utils/constants/zIndexLayout";

export enum AuthFormStates {
  login = "login",
  register = "register",
}
export const AuthForm = () => {
  const dispatch = useDispatch();

  const { isFetching, showModal } = useAuth();

  const show = () => {
    dispatch(signModalToggle(true));
  };

  const cancel = () => {
    dispatch(signModalToggle(false));
  };

  return (
    <>
      <BaseButton onClick={show} disabled={isFetching}>
        LOG IN
      </BaseButton>
      <BaseModal
        visible={showModal}
        show={show}
        cancel={cancel}
        style={{ zIndex: zIndexLayout.MIDDLE_LEVEL }}
      >
        <Forms />
      </BaseModal>
    </>
  );
};

const Forms = () => {
  const [authState, setAuthState] = useState(AuthFormStates.login);
  const updateAuthState = (state: AuthFormStates) => {
    setAuthState(state);
  };
  return (
    <>
      {authState === AuthFormStates.login && (
        <SignInForm updateAuthState={updateAuthState} />
      )}
      {authState === AuthFormStates.register && (
        <SignUpForm updateAuthState={updateAuthState} />
      )}
    </>
  );
};
