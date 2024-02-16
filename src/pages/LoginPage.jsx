import React from "react";
import LoginContainer from "../components/authUserFeature/LoginContainer";
import FormContextProvider from "../contexts/FormContext";

function LoginPage() {
  return (
    <FormContextProvider>
      <LoginContainer />
    </FormContextProvider>
  );
}

export default LoginPage;
