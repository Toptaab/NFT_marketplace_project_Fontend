import React from "react";
import Navbar from "../components/Navbar";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { PasswordLockIcon, UserRegisterIcon } from "../icons";
import LoginPoster from "../components/LoginPoster";

function LoginPage() {
  return (
    <div className="w-dvw">
      <Navbar />
      <div className="flex flex-col h-auto items-center justify-start w-full" >

        <div className="flex justify-center p-[2rem] w-full">
          <LoginPoster />
          <Form
            header="Sign In"
            subHeader="Welcome! back. Are you ready to start creating, collecting and selling NFTs."
            bunttonName="Sign In"
          >
            <Input name="Username">
              <UserRegisterIcon />
            </Input>
            <Input name="Password">
              <PasswordLockIcon />
            </Input>
            <div>
              <span className="text-[18px]">Don’t have an account?</span>
              <a href="" className="text-[13px] text-blue-500">
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

export default LoginPage;
