import React from "react";
import { LogOut, SettingIcon, UserIcon } from "../../icons";

import useAppContext from '../../hooks/useAppContext'


function Profile() {
const userId = localStorage.getItem('userId')
const accessToken = localStorage.getItem("accessToken");
const {me, logoutHandler} = useAppContext()

  return (
    <div className="flex justify-center items-center gap-[1rem] w-[8rem]">
      <div>
        <a href="/setting">
          {accessToken? <SettingIcon /> : null}
        </a>
      </div>
      
      <div className="flex items-center">
        <button onClick={logoutHandler}>
          {accessToken? <LogOut />: null}
        </button>
      </div>
      <div className="flex-1">
        <a href={`/profile/${userId}`}>
          {me?.image? <img className="w-[2rem] rounded-full" src={me?.image} alt="" /> :<UserIcon />}
          
        </a>
      </div>
    </div>
  );
}

export default Profile;
