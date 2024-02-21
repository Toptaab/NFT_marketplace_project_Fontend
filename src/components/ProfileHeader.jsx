import React from "react";
import ProfileAvatarBig from "../ui/ProfileAvatarBig";
import { useNavigate } from "react-router-dom";
import CreateCollectionModal from "../components/createCollectionFeature/CreateCollectionModal";
import useCreateCollectionContext from "./createCollectionFeature/hook/useCreateCollectionContext";
import StatusButton from "./profileFeature/StatusButton";

function ProfileHeader({ userObj,status,relationShip }) {
  const navigate = useNavigate();
  const { openModal,handelModal } = useCreateCollectionContext();
  



  return (
    <div className="flex">
      {openModal ? <CreateCollectionModal /> : null}
      <div className="w-full flex flex-col gap-[2rem]">
        <div className="flex items-center justify-start gap-[1rem]">
          <ProfileAvatarBig
            image={userObj.image}
            onClick={() => navigate("/setting")}
          />
          <h1 className="text-[34px] font-bold">{userObj.userName}</h1>
        </div>

        {/*  */}
        <div className="flex justify-start gap-[5rem]">
          <div>
            <div className="text-[28px] font-bold text-primary">
              {userObj.sellers.length + userObj.buyers.length}
            </div>
            <div className="text-[24px] text-gray">Volume</div>
          </div>
          <div>
            <div className=" text-[28px] font-bold text-primary">
              {userObj.Nfts.length}
            </div>
            <div className="text-[24px] text-gray">NFTs</div>
          </div>
          <div>
            <div className=" text-[28px] font-bold text-primary">
              {userObj.Relationship.length}
            </div>
            <div className="text-[24px] text-gray">Follwers</div>
          </div>
          <div>
            <div className="flex  items-baseline">
              <div className=" text-[28px] font-bold text-primary">
                {userObj.Wallets[0].Cryptos[0].balance}{" "}
              </div>
              <div className=" text-[20px] font-bold text-primary">
                {userObj.Wallets[0].Cryptos[0].chain.currencySymbol}
              </div>
            </div>
            <div className="text-[24px] text-gray">Balance</div>
          </div>
        </div>
        {/*  */}

        <div>
          <h5 className="font-bold text-gray">Bio</h5>
          <p>
            {userObj.bio
              ? userObj.bio
              : "The internet's friendliest designer kid."}
          </p>
        </div>
        <div>
          <h5 className="font-bold text-gray">Twitter</h5>
          <p>
            {userObj.twitterUrl ? (
              userObj.twitterUrl
            ) : relationShip === status.ME ? (
              <button
                className="w-[6rem] h-[2rem] rounded-2xl border-primary border-[2px] font-semibold "
                onClick={() => navigate("/setting")}
              >
                Binding
              </button>
            ) : null}
          </p>
        </div>
      </div>
      <StatusButton handelModal={handelModal} />
    </div>
  );
}

export default ProfileHeader;
