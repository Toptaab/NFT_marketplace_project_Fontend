import React from "react";
import Button from "../ui/Button";
import { RoketIcon } from "../icons";
import HeroCard from "../ui/Hero/HeroCard";

function Hero() {
  return (
    <div className="flex p-[3rem] gap-[2rem] justify-start items-start">
      <div className=" flex flex-col gap-5">
        <div className="text-[67px] w-[31rem] text-gray font-semibold leading-none">
          Discover digital art & Collect NFTs
        </div>
        <div className="text-[22px] text-gray">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </div>
        <div>
          <button className="bg-primary text-white px-[4rem] py-[1rem] rounded-[1rem] font-semibold gap-2 flex justify-center items-center ">
            <RoketIcon /> Get Started
          </button>
        </div>
        <div className="flex justify-start gap-[5rem]">
          <div>
            <div className="text-primary text-[28px] font-bold">240k+</div>
            <div className="text-[24px] text-gray">Total Sale</div>
          </div>
          <div>
            <div className="text-primary text-[28px] font-bold">100k+</div>
            <div className="text-[24px] text-gray">NFTs</div>
          </div>
          <div>
            <div className="text-primary text-[28px] font-bold">240k+</div>
            <div className="text-[24px] text-gray">Creator</div>
          </div>
        </div>
      </div>
      <HeroCard
        nftName="Space Walker"
        creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max"
        creator="Creator"
        image="https://image.cdn2.seaart.ai/2023-06-14/34223581769797/aebcd81f8a11378ac6f030a8dd85ffc60f69e71f_high.webp"
      />
      {/* <img src="https://img.freepik.com/premium-photo/astronaut-space-suit-looking-giant-bubble_597582-723.jpg?w=900" alt="" /> */}
    </div>
  );
}

export default Hero;
