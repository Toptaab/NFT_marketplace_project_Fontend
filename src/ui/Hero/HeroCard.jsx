import React from "react";
import AvatarImage from "../AvatarImage";

const avartar = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTMycHgiIGhlaWdodD0iMTMycHgiIHZpZXdCb3g9IjAgMCA4MCA4MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIiBpZD0iMTA5MDI1NDQyMzExMyI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9InJnYigwLCAyNTUsIDExNSkiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiKDExNSwgMCwgMjU1KSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9InVybCgjMTA5MDI1NDQyMzExMykiIHg9IjAiIHk9IjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+PC9yZWN0PgogIDwvZz4KPC9zdmc+"


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

          <AvatarImage collectionImage={creatorImage  || avartar} />
          <div className="text-[16px] text-white">{creator}</div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
