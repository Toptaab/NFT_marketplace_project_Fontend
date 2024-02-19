import React from "react";
import Button from "../ui/Button";
import ProfileAvatarBig from "../ui/ProfileAvatarBig";
import useProfileContext from "./profileFeature/hook/userProfileContext";
import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";



function ProfileHeader() {
  const { userObj, loading } = useProfileContext();
  const navigate = useNavigate()
  console.log(userObj)

  if(loading){
    return <Spinner />
  }


  return (
    <div className="flex">
      <div className="w-full flex flex-col gap-[2rem]">
        <div className="flex items-center justify-start gap-[1rem]">
          <ProfileAvatarBig image="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max" />
          <h1 className="text-[34px] font-bold">{userObj?.userName}</h1>
        </div>

        {/*  */}
        <div className="flex justify-start gap-[5rem]">
          <div>
            <div className="text-[28px] font-bold">240k+</div>
            <div className="text-[24px] text-gray">Volume</div>
          </div>
          <div>
            <div className=" text-[28px] font-bold">100k+</div>
            <div className="text-[24px] text-gray">NFTs</div>
          </div>
          <div>
            <div className=" text-[28px] font-bold">240k+</div>
            <div className="text-[24px] text-gray">Follwers</div>
          </div>
          <div>
            <div className=" text-[28px] font-bold">240k+</div>
            <div className="text-[24px] text-gray">Balance</div>
          </div>
        </div>
        {/*  */}

        <div>
          <h5 className="font-bold text-gray">Bio</h5>
          <p>{userObj.bio? userObj.bio :"The internet's friendliest designer kid."}</p>
        </div>
        <div>
          <h5 className="font-bold text-gray">Twitter</h5>
          <p>{userObj.twitterUrl?userObj.twitterUrl : <button className="w-[6rem] h-[2rem] rounded-2xl border-primary border-[2px] font-semibold " onClick={()=> navigate('/setting')}>Binding</button> }</p>
        </div>
      </div>
      <div className="flex justify-end w-full gap-[1rem]">
        <div className="w-[30%]">
          <Button secondary={true} name="Create Collection"></Button>
        </div>
        <div className="w-[20%] ">
          <button className="bg-primary text-wrap p-[0.5rem] rounded-xl text-white font-semibold w-full" >{userObj.Wallets[0].walletAddress}</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
