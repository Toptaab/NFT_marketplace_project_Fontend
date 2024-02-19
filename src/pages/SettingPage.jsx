import React from "react";
import SettingContainer from "../components/profileFeature/SettingContainer";
import FormContextProvider from "../contexts/FormContext";

function SettingPage() {
  return (
    <div className="w-dvw">
      <FormContextProvider>
      <SettingContainer/>
      </FormContextProvider>
    </div>
  );
}

export default SettingPage;
