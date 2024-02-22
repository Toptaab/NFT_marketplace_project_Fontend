import React from "react";
import { RoketIcon } from "../../icons";
import ButtinBig from "../ButtinBig";
import { useNavigate } from "react-router-dom";
import useHomeContext from "../../components/homeFeature/hook/useHomeContext";


function HeroLeft() {
  const {summarize} = useHomeContext()

  const navigate = useNavigate()
  return (
    <div className=" flex flex-col gap-5 flex-1 justify-center p-">
      <div className="text-[67px] w-[31rem] text-gray font-semibold leading-none">
        Discover digital art & Collect NFTs
      </div>
      <div className="text-[22px] text-gray max-w-[70%]">
        NFT marketplace UI created with Anima for Figma. Collect, buy and sell
        art from more than 20k NFT artists.
      </div>
      <div>

    <ButtinBig onClick={()=>navigate('/register')}>
    <RoketIcon /> 
    <div>Get Started</div>
    </ButtinBig>


      </div>
      <div className="flex justify-start gap-[5rem]">
        <div>
          <div className="text-primary text-[28px] font-bold">{summarize.totalSale}</div>
          <div className="text-[24px] text-gray">Total Sale</div>
        </div>
        <div>
          <div className="text-primary text-[28px] font-bold">{summarize.nfts}</div>
          <div className="text-[24px] text-gray">NFTs</div>
        </div>
        <div>
          <div className="text-primary text-[28px] font-bold">{summarize.creator}</div>
          <div className="text-[24px] text-gray">Creator</div>
        </div>
      </div>
    </div>
  );
}

export default HeroLeft;
