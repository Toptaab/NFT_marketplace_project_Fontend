import React from "react";
import AvatarImage from "../AvatarImage";

function HeroCard({ image, nftName, creatorImage, creator }) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="h-[25rem] w-[41rem] ">
        <img
          src={image}
          alt=""
          className="h-full w-full rounded-t-[1rem]  object-cover"
        />
      </div>
      <div className="flex flex-col bg-gray rounded-b-[1rem] h-[6rem] w-[41rem] justify-center items-center p-[1.5rem] gap-[0.5rem]">
        <div className="w-full text-[22px] text-white font-bold">{nftName}</div>
        <div className="flex gap-[0.5rem] justify-start w-full ">

          <AvatarImage creatorImage={creatorImage} />
          <div className="text-[16px] text-white">{creator}</div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
