import React from "react";
import { LogOut, SettingIcon, UserIcon } from "../../icons";

function Profile() {
  return (
    <div className="flex justify-center items-center gap-[1rem] w-[8rem]">
      <div>
        <a href="">
          <SettingIcon />
        </a>
      </div>
      
      <div>
        <a href="">
          <LogOut />
        </a>
      </div>

      <div>
        <a href="#">
          <UserIcon />
        </a>
      </div>
    </div>
  );
}

export default Profile;
