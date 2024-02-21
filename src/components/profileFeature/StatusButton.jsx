import React from "react";
import useProfileContext from "./hook/userProfileContext";
import Button from "../../ui/Button";
import { PlusIcon } from "../../icons";

function StatusButton() {
  const { relationShip, handelModal,userObj,status } = useProfileContext();


  if(relationShip === status.ME){
  return (
    <div className="flex justify-end w-full gap-[1rem]">
      <div className="w-[30%]">
        <Button secondary={true} name="Create Collection" onClick={handelModal}>
          <PlusIcon />
        </Button>
      </div>
      <div className="max-w-[8rem] flex-1">
        <button className="bg-primary text-wrap p-[0.5rem] rounded-xl text-white font-semibold w-full">
          {userObj.Wallets[0].walletAddress}
        </button>
      </div>
    </div>
  )}



  if(relationShip === status.FOLLOWER){
  return (
    <div className="flex justify-end w-full gap-[1rem]">
      <div className="w-[30%]">
        <Button secondary={true} name="Unfollow" onClick={()=>{}}>
        </Button>
      </div>
      <div className="max-w-[8rem] flex-1">
        <button className="bg-primary text-wrap p-[0.5rem] rounded-xl text-white font-semibold w-full">
          {userObj.Wallets[0].walletAddress}
        </button>
      </div>
    </div>
  )}



  if(relationShip === status.UNKHOWN){
  return (
    <div className="flex justify-end w-full gap-[1rem]">
      <div className="w-[30%]">
        <Button secondary={true} name="Follow" onClick={()=>{}}>
        </Button>
      </div>
      <div className="max-w-[8rem] flex-1">
        <button className="bg-primary text-wrap p-[0.5rem] rounded-xl text-white font-semibold w-full">
          {userObj.Wallets[0].walletAddress}
        </button>
      </div>
    </div>
  )}








}

export default StatusButton;
