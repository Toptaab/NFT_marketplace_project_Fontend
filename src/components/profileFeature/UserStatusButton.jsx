import React, { useState } from "react";
import useProfileContext from "./hook/userProfileContext";
import Button from "../../ui/Button";
import { PlusIcon } from "../../icons";
import Input from "../../ui/Input";

function UserStatusButton({ handelModal }) {
  const {changeHandler,  addBalanceHandler, userObj, me, bidingWallethandler,setDepositeOpen,depositeOpen } = useProfileContext();

  if (userObj?.id === me?.id) {
    return (
      <div className="flex justify-end w-full gap-[1rem]">
        <div className="w-[30%]">
          <Button
            secondary={true}
            name="Create Collection"
            onClick={handelModal}
          >
            <PlusIcon />
          </Button>
        </div>
        <div className="max-w-[8rem] flex-1">
          {userObj?.Wallets.length > 0 ? (
            depositeOpen ? (
              <div className="flex flex-col gap-[1rem]">
                <Input placeholder="Enter Balance" name="balance" onChange={changeHandler}></Input>
                <button onClick={addBalanceHandler} className="bg-primary text-wrap p-[0.5rem] rounded-xl text-white font-semibold w-full" >Confirm</button>
              </div>
            ) : (
              <button
                className="bg-primary text-wrap p-[0.5rem] rounded-xl text-white font-semibold w-full"
                onClick={() => setDepositeOpen(!depositeOpen)}
              >
                {userObj?.Wallets[0]?.walletAddress}
              </button>
            )
          ) : (
            <button
              className="bg-primary text-wrap p-[0.5rem] rounded-xl text-white font-semibold w-full"
              onClick={bidingWallethandler}
            >
              Binding
            </button>
          )}
        </div>
      </div>
    );
  } else {
    if (
      userObj?.Relationship?.find((value) =>
        value.followerId === me?.id ? true : false
      )
    ) {
      return (
        <div className="flex justify-end w-full gap-[1rem]">
          <div className="w-[30%]">
            <Button
              secondary={true}
              name="Unfollow"
              onClick={() => {}}
            ></Button>
          </div>
          <div className="max-w-[8rem] flex-1">
            <button className="bg-primary text-wrap p-[0.5rem] rounded-xl text-white font-semibold w-full">
              {userObj?.Wallets[0]?.walletAddress || "Binding"}
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex justify-end w-full gap-[1rem]">
          <div className="w-[30%]">
            <Button secondary={true} name="Follow" onClick={() => {}}></Button>
          </div>
          <div className="max-w-[8rem] flex-1">
            {userObj?.Wallets.length > 0 ? (
              <button
                className="bg-primary text-wrap p-[0.5rem] rounded-xl text-white font-semibold w-full"
                onClick=""
              >
                {userObj?.Wallets[0]?.walletAddress}
              </button>
            ) : (
              <button
                className="bg-primary text-wrap p-[0.5rem] rounded-xl text-white font-semibold w-full"
                onClick={() => {}}
              >
                Not Connect
              </button>
            )}
          </div>
        </div>
      );
    }
  }
}

export default UserStatusButton;
