import React from "react";
import { LogOut, SettingIcon, UserIcon } from "../../icons";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center gap-[1rem] w-[8rem]">
      <div>
        <a href="/setting">
          <SettingIcon />
        </a>
      </div>
      
      <div>
        <a onClick={()=> {localStorage.clear()
        navigate('/login')
        }}>
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
