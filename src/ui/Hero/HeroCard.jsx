import React from "react";

function HeroCard({ image, nftName, creatorImage, creator }) {
  return (
    <div className="w-[41rem] ">
      <div className="h-[25rem] ">
        <img
          src={image}
          alt=""
          className="h-full w-full rounded-t-[1rem]  object-cover"
        />
      </div>
      <div className="flex flex-col bg-gray rounded-b-[1rem] h-[6rem] justify-center items-center p-[1.5rem] gap-[0.5rem]">
        <div className="w-full text-[22px] text-white font-bold">{nftName}</div>
        <div className="flex gap-[0.5rem] justify-start w-full ">
          <div>
            <img src={creatorImage} alt="" className="w-[1.5rem] h-[1.5rem]  rounded-full object-cover" />
          </div>
          <div className="text-[16px] text-white">{creator}</div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
