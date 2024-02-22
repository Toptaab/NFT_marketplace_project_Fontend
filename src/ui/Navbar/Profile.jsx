import React from "react";
import { LogOut, SettingIcon, UserIcon } from "../../icons";
import { useNavigate } from "react-router-dom";


function Profile() {
const userId = localStorage.getItem('userId')
const accessToken = localStorage.getItem("accessToken");


  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center gap-[1rem] w-[8rem]">
      <div>
        <a href="/setting">
          {accessToken? <SettingIcon /> : null}
        </a>
      </div>
      
      <div>
        <a onClick={()=> {localStorage.clear()
        navigate('/login')
        }}>
          {accessToken? <LogOut />: null}
        </a>
      </div>
      <div>
        <a href={`/profile/${userId}`}>
          <UserIcon />
        </a>
      </div>
    </div>
  );
}

export default Profile;
