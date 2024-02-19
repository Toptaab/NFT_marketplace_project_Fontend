import React from "react";
import Button from "../ui/Button";
import AvatarImage from "../ui/AvatarImage";
import { useNavigate } from "react-router-dom";

function Card({ creatorImage, creator }) {
const navigate = useNavigate()

  return (
    <div className="w-[17rem] border-[1px] border-gray flex flex-col items-center p-[1rem] h-[26rem] rounded-[1.5rem] gap-[1rem]">
      <div className="w-[15rem] h-[14rem] ">
        <img
          role="button"
          onClick={()=> navigate('/asset/1')}
          className="w-full h-full object-cover rounded-[1rem]"
          src="https://cdnb.artstation.com/p/assets/images/images/050/231/675/medium/dylan-jobe-astronaut-07.jpg?1654365846"
          alt=""
        />
      </div>
      <div className="w-full flex flex-col justify-between gap-[1rem]">
        <div className="text-[18px] font-bold">Space Walker</div>
        <div className="flex">
          <div className="flex flex-1 flex-col items-start font-semibold">
            <AvatarImage creatorImage={creatorImage} />
            <div>{creator}</div>
          </div>
          <div className="flex flex-col flex-1 items-end font-semibold">
            <div>price</div>
            <div className="text-primary">55.55 ETH</div>
          </div>
        </div>
      </div>
      <div className="w-[15rem] flex justify-center">
        <Button name="Buy" onClick={(e) => navigate('/asset/1')} />
      </div>
    </div>
  );
}

export default Card;
