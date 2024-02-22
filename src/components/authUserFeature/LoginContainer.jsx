import React from "react";
import LoginPoster from "../LoginPoster";
import Form from "../../ui/Form";
import { PasswordLockIcon, UserRegisterIcon } from "../../icons";
import Input from "../../ui/Input";
import useFormContext from "../../hooks/useFormContext";

function LoginContainer() {
  const {changeHandler, input,loginHandler,error } = useFormContext()

 

 
  return (
    <div className="w-dvw">
      <div className="flex flex-col h-auto items-center justify-start w-full">
        <div className="flex justify-center p-[2rem] w-full">
          <LoginPoster />
          <Form
           onSummit={loginHandler}
            header="Sign In"
            subHeader="Welcome! back. Are you ready to start creating, collecting and selling NFTs."
            bunttonName="Sign In"
          
          >
            <Input name="email" onChange={changeHandler} value={input} error={error.email}>
              <UserRegisterIcon />
            </Input>
            <Input name="password" type="password" onChange={changeHandler} value={input}  error={error.password} >
              <PasswordLockIcon />
            </Input>
            <div>
              <span className="text-[18px]">Don’t have an account? </span>
              <a href="/register" className="text-[13px] text-blue-500">
                Register here
              </a>
            </div>
          </Form>
        </div>

        {/* <footer className="">footer</footer> */}
      </div>
    </div>
  );
}

export default LoginContainer;
