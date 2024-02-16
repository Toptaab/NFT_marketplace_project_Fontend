import React from "react";
import FormContextProvider from "../contexts/FormContext";
import RegisterContainer from "../components/authUserFeature/RegisterContainer";

function RegisterPage() {
  return (
    <div className="w-dvw">
      <FormContextProvider>
      <RegisterContainer />
      </FormContextProvider>
    </div>
  );
}

export default RegisterPage;
