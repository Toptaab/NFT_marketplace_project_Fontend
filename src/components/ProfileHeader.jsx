import React, { useState } from "react";
import Button from "../ui/Button";
import ProfileAvatarBig from "../ui/ProfileAvatarBig";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PlusIcon } from "../icons";
import CreateCollectionModal from '../components/createCollectionFeature/CreateCollectionModal'
import useCollectionContext from './createCollectionFeature/hook/useCollectionContext'

function ProfileHeader({userObj}) {

  const navigate = useNavigate()
  const {handelModal,openModal} = useCollectionContext()

  console.log(openModal)

 


  return (
    <div className="flex">
      {openModal? <CreateCollectionModal /> : null}
      <div className="w-full flex flex-col gap-[2rem]">
        <div className="flex items-center justify-start gap-[1rem]">
          <ProfileAvatarBig image={userObj.image} onClick={()=> navigate('/setting')} />
          <h1 className="text-[34px] font-bold">{userObj.userName}</h1>
        </div>

        {/*  */}
        <div className="flex justify-start gap-[5rem]">
          <div>
            <div className="text-[28px] font-bold text-primary">{userObj.sellers.length + userObj.buyers.length}20K+</div>
            <div className="text-[24px] text-gray">Volume</div>
          </div>
          <div>
            <div className=" text-[28px] font-bold text-primary">{userObj.Nfts.length}0K+</div>
            <div className="text-[24px] text-gray">NFTs</div>
          </div>
          <div>
            <div className=" text-[28px] font-bold text-primary">{userObj.followers.length}0K+</div>
            <div className="text-[24px] text-gray">Follwers</div>
          </div>
          <div>
            <div className="flex gap-[0.5rem] items-baseline">
            <div className=" text-[28px] font-bold text-primary">{userObj.Wallets[0].Cryptos[0].balance} </div>
            <div className=" text-[20px] font-bold text-pri">{userObj.Wallets[0].Cryptos[0].chain.currencySymbol}</div>
            </div>
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
          <Button secondary={true} name="Create Collection" onClick={handelModal}>
            <PlusIcon />
          </Button>
        </div>
        <div className="max-w-[8rem] flex-1">
          <button className="bg-primary text-wrap p-[0.5rem] rounded-xl text-white font-semibold w-full" >{userObj.Wallets[0].walletAddress}</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
