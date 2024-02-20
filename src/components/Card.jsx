import React from "react";
import Button from "../ui/Button";
import AvatarImage from "../ui/AvatarImage";
import { useNavigate } from "react-router-dom";

function Card({ nftId,nftImage, nftName,collectionImage,CollectionName,price }) {
const navigate = useNavigate()

  return (
    <div className="w-[17rem] border-[1px] border-gray flex flex-col items-center p-[1rem] h-[26rem] rounded-[1.5rem] gap-[1rem]">
      <div className="w-[15rem] h-[14rem] ">
        <img
          role="button"
          onClick={()=> navigate(`/asset/${nftId}`)}
          className="w-full h-full object-cover rounded-[1rem]"
          src={nftImage}
          alt="NFT"
        />
      </div>
      <div className="w-full flex flex-col justify-between gap-[1rem]">
        <div className="text-[18px] font-bold">{nftName}</div>
        <div className="flex items-center">
          <div className="flex flex-1  items-center justify-start font-semibold gap-[0.5rem]">
            <AvatarImage collectionImage={collectionImage} />
            <div>{CollectionName}</div>
          </div>
          <div className="flex flex-col flex-1 items-end font-semibold">
            <div>price</div>
            <div className="text-primary">{price || "Not on sales"}</div>
          </div>
        </div>
      </div>
      <div className="w-[15rem] flex justify-center">
        {price? <Button name="Buy" onClick={(e) => navigate(`/asset/${nftId}`)} /> : <Button name="Not Onsale" />}
        
      </div>
    </div>
  );
}

export default Card;
