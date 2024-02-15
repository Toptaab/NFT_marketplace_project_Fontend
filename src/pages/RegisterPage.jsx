import React from "react";
import Navbar from "../components/Navbar";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { EmailIcon, PasswordLockIcon, UserIcon, UserInIcon, UserRegisterIcon } from "../icons";

function RegisterPage() {
  return (
    <div className="">
      <Navbar />
      <div className="grid grid-cols-2 grid-rows-2 min-h-dvh p-2.5">
        <div className="flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2023/06/22/18/06/vibrant-pastel-colors-8082036_960_720.jpg"
            alt=""
          />
        </div>
        <Form
          header="Create Account"
          subHeader="Welcome! enter your details and start creating, collecting and selling NFTs."
          bunttonName="Create account"
        >
          <Input name="Username">
            <UserRegisterIcon />
          </Input>
          <Input name="Email Address">
            <EmailIcon />
          </Input>
          <Input name="Password" >
            <PasswordLockIcon />
          </Input>
          <Input name="Confirm Password" >
          <PasswordLockIcon />
          </Input>
          <div>
            <span className="text-[18px]">Don’t have an account? </span>
            <a href="" className="text-[13px] text-blue-500">
              Register here
            </a>
          </div>
        </Form>
        {/* <footer className="col-span-2">footer</footer> */}
      </div>
    </div>
  );
}

export default RegisterPage;
