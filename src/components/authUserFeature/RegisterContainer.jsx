import React from "react";
import LoginPoster from "../LoginPoster";
import { EmailIcon, PasswordLockIcon, UserRegisterIcon } from "../../icons";
import Input from "../../ui/Input";
import useFormContext from "../../hooks/useFormContext";
import Form from "../../ui/Form";

function RegisterContainer() {

const {changeHandler,registerHandler,error} = useFormContext()



  return (
    <div className="flex flex-col h-auto items-center justify-start w-full">
      <div className="flex justify-center p-[2rem] w-full">
        <LoginPoster />
        <Form
          onSummit={registerHandler}
          header="Create Account"
          subHeader="Welcome! enter your details and start creating, collecting and selling NFTs."
          bunttonName="Create account"
        >
          <Input 
          onChange={changeHandler}
          name="userName"
          placeholder="Username"
          error={error.userName}
          >
            
            <UserRegisterIcon />
          </Input>
          <Input 
          onChange={changeHandler}
          name="email"
          placeholder="Email Address"
          error={error.email}
          >
            <EmailIcon />
          </Input>
          <Input 
          onChange={changeHandler}
          type="password"
          name="password"
          error={error.password}
          >
            <PasswordLockIcon />
          </Input>
          <Input
          onChange={changeHandler}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          error={error.confirmPassword}
          >
            <PasswordLockIcon />
          </Input>
          <div>
            <span className="text-[18px]">Already have an account? </span>
            <a href="/login" className="text-[13px] text-blue-500">
              Login
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default RegisterContainer;
