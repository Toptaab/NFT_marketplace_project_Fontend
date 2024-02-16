import React from "react";
import Navbar from "../components/Navbar";
import Input from "../ui/Input";
import { EmailIcon, PasswordLockIcon, UserIcon, UserRegisterIcon } from "../icons";
import Button from "../ui/Button";

function SettingPage() {
  return (
    <div className="w-dvh">
      <div className="w-full flex flex-col p-[3rem]">


        <div className="flex flex-col gap-[2rem]">

          <div>
            <div className="text-[18px] font-semibold" >Setting</div>
            <div>Welcome Setting Page</div>
          </div>

          <div className="flex justify-around items-start">
            <div className="flex-1 flex flex-col gap-[1rem]">
              <h5 className="text-[18px] font-semibold">User Profile</h5>
              <div className="flex flex-col gap-[1rem] px-[1rem]">
                <div className="flex flex-col gap-[0.5rem]" >
                  <label className="text-[14px] font-semibold">User Name</label>
                  <Input name="Username">
                    <UserRegisterIcon/>
                  </Input>
                </div>
                <div className="flex gap-[1rem]">
                    <div>
                        <UserIcon />
                    </div>
                    <div>
                        <h6 className="text-[14px] font-semibold">John Smith</h6>
                        <p className="text-[12px]">Welcome Setting Page</p>
                    </div>
                </div>
                <div className="w-[6rem]">
                    <Button name="Save" />
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-[1rem]">
              <h5 className="text-[18px] font-semibold">Update Profile</h5>
              <div className="flex flex-col gap-[1rem] px-[1rem]">
                <div className="flex flex-col gap-[0.5rem]" >
                  <label className="text-[14px] font-semibold">User Name</label>
                  <Input name="Username">
                    <EmailIcon/>
                  </Input>
                </div>
                <div className="flex flex-col gap-[0.5rem]" >
                  <label className="text-[14px] font-semibold">Password</label>
                  <Input name="Username">
                    <PasswordLockIcon/>
                  </Input>
                </div>
                <div className="w-[6rem]">
                    <Button name="Save" />
                </div>
              </div>
            </div>
          </div>

          <div>
          <h5 className="text-[18px] font-semibold">Personal Information</h5>
          <div className="flex flex-col gap-[1rem] px-[1rem]">
                <div className="flex flex-col gap-[0.5rem]" >
                  <label className="text-[14px] font-semibold">Bio</label>
                <textarea className='border-2 border-gray rounded-2xl p-2 w-full flex items-center gap-2 resize-none' cols="30" rows="10"></textarea>
                </div>
                <div className="flex flex-col gap-[0.5rem]" >
                  <label className="text-[14px] font-semibold">Twitter URL</label>
                  <Input name="www.twitter.com">
                  </Input>
                </div>
                <div className="w-[6rem]">
                    <Button name="Save" />
                </div>
              </div>
          </div>


        </div>


      </div>
    </div>
  );
}

export default SettingPage;
