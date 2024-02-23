import React, { useRef } from "react";
import {
  EmailIcon,
  PasswordLockIcon,
  UserIcon,
  UserRegisterIcon,
} from "../../icons";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import useFormContext from "../../hooks/useFormContext";
import TextArea from "../../ui/TextArea";
import Spinner from "../../ui/Spinner";

function SettingContainer() {
  const {image, changeHandler, input,updateHandler,handleUploadImage,loading,error } = useFormContext();
  const fileEl = useRef(null)


  if(loading){
    return <Spinner />
  }


  return (
    <div className="w-full flex flex-col p-[3rem]">
      <div className="flex flex-col gap-[2rem]">
        <div>
          <div className="text-[18px] font-semibold">Setting</div>
          <div>Welcome Setting Page</div>
        </div>
        <div className="flex justify-around items-start">
          <div className="flex-1 flex flex-col gap-[1rem]">
            <h5 className="text-[18px] font-semibold">User Profile</h5>
            <div className="flex flex-col gap-[1rem] px-[1rem]">
              <div className="flex flex-col gap-[0.5rem]">
                <label className="text-[14px] font-semibold">User Name</label>
                <Input
                  onChange={changeHandler}
                  name="userName"
                  placeholder="Username"
                >
                  <UserRegisterIcon />
                </Input>
              </div>
              <div className="flex gap-[1rem]">
                <button onClick={()=> fileEl.current.click()} onChange={handleUploadImage}>
                  <input type="file" className="hidden"  ref={fileEl}/>
                  {image? <img
                className="w-[2.5rem] h-[2.5rem] rounded-full"
                src={URL.createObjectURL(image)}
                alt=""
              /> : <UserIcon />}
                </button>
                <div>
                  <h6 className="text-[14px] font-semibold">John Smith</h6>
                  <p className="text-[12px]">Welcome Setting Page</p>
                </div>
              </div>
              <div className="w-[6rem]">
                {/* <Button name="Save" /> */}
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-[1rem]">
            <h5 className="text-[18px] font-semibold">Update Profile</h5>
            <div className="flex flex-col gap-[1rem] px-[1rem]">
              <div className="flex flex-col gap-[0.5rem]">
                <label className="text-[14px] font-semibold">Email</label>
                <Input onChange={changeHandler} name="email">
                  <EmailIcon />
                </Input>
              </div>
              <div className="flex flex-col gap-[0.5rem]">
                <label className="text-[14px] font-semibold">Password</label>
                <Input type="password" onChange={changeHandler} name="password" error={error.password}>
                  <PasswordLockIcon />
                </Input>
              </div>
              <div className="w-[6rem]">
                {/* <Button name="Save" /> */}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-[18px] font-semibold">Personal Information</h5>
          <div className="flex flex-col gap-[1rem] px-[1rem]">
            <div className="flex flex-col gap-[0.5rem]">
              <label className="text-[14px] font-semibold">Bio</label>
              <TextArea name="bio" value={input} onChange={changeHandler} />
            </div>
            <div className="flex flex-col gap-[0.5rem]">
              <label className="text-[14px] font-semibold">Twitter URL</label>
              <Input
                onChange={changeHandler}
                name="twitterUrl"
                placeholder="www.twitter.com"
              ></Input>
            </div>
            <div className="w-[6rem]">
              <Button name="Save" onClick={updateHandler} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingContainer;
