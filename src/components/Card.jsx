import React from "react";
import Button from "../ui/Button";
import AvatarImage from "../ui/AvatarImage";
import { useNavigate } from "react-router-dom";
const avatar = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTMycHgiIGhlaWdodD0iMTMycHgiIHZpZXdCb3g9IjAgMCA4MCA4MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIiBpZD0iMTA5MDI1NDQyMzExMyI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9InJnYigwLCAyNTUsIDExNSkiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0icmdiKDExNSwgMCwgMjU1KSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9InVybCgjMTA5MDI1NDQyMzExMykiIHg9IjAiIHk9IjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCI+PC9yZWN0PgogIDwvZz4KPC9zdmc+"
const defaultNFTImage = "https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"

function Card({ nftId,nftImage, nftName,collectionImage,CollectionName,price,onClick }) {
const navigate = useNavigate()

  return (
    <div className="w-[17rem] border-[1px] border-gray flex flex-col items-center p-[1rem] h-[26rem] rounded-[1.5rem] gap-[1rem]">
      <div className="w-[15rem] h-[14rem] relative ">
        <img
          role="button"
          onClick={onClick? onClick : ()=> navigate(`/asset/${nftId}`)}
          className={`w-full h-full object-cover rounded-[1rem] ${!nftImage? "opacity-50" : null  } `}
          src={nftImage || defaultNFTImage}
          alt="NFT"
        />
        {/* {nftImage? null :  } */}
      </div>
      <div className="w-full flex flex-col justify-between gap-[1rem]">
        <div className="text-[18px] font-bold" role="button" onClick={()=> navigate(`/asset/${nftId}`)}>{nftName}</div>
        <div className="flex items-center">
          <div className="flex flex-1  items-center justify-start font-semibold gap-[0.5rem]">
            <AvatarImage onClick={()=> navigate(`/collection/${collectionId}`)} collectionImage={collectionImage || avatar} />
            <div role="button" onClick={()=> navigate(`/collection/${collectionId}`)}>{CollectionName || "Creator"}</div>
          </div>
          <div className="flex flex-col flex-1 items-end font-semibold">
            <div>price</div>
            <div className="text-primary">{price || "Not on sales"}</div>
          </div>
        </div>
      </div>
      <div className="w-[15rem] flex justify-center">
        {price? <Button name="Buy" onClick={(e) => navigate(`/asset/${nftId}`)} /> : <Button secondary={true} name="Offer" onClick={(e) => navigate(`/asset/${nftId}`)}  />}
        
      </div>
    </div>
  );
}

export default Card;
