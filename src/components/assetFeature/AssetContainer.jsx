import React from "react";
import Button from "../../ui/Button";
import CollectionImage from "../../ui/CollectionImage";
import AvatarImage from "../../ui/AvatarImage";
import TraitCard from "./ui/TraitCard";
import { AttributeIcon, InformationIcon } from "../../icons";

function AssetContainer() {
  return (
    <div className="flex flex-col gap-[2rem] p-[2rem]">
      <div className="flex justify-center gap-[2rem]">
        <div className=" flex-1 flex justify-center items-center">
          <img
            className="object-cover rounded-[1rem w-[20rem] h-[20rem] rounded-md"
            src="https://cdnb.artstation.com/p/assets/images/images/050/231/675/medium/dylan-jobe-astronaut-07.jpg?1654365846"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-[2rem] ">
          <div className="flex flex-col gap-[1rem] w-[70%]">
            <div className="flex gap-[1rem]">
              <CollectionImage />
              <p className="text-[18px] font-semibold">Ape Alpha Collection</p>
            </div>
            <div className="text-[32px] font-semibold">Ape Aplapha #34323</div>
            <div className="flex items-center gap-[1rem]">
              <div>
                <AvatarImage creatorImage="https://images.nightcafe.studio/jobs/Hb1s6w3L4ZQ5As9FJCGa/Hb1s6w3L4ZQ5As9FJCGa--1--s4jxa.jpg?tr=w-1080,c-at_max" />
              </div>
              <div className="flex flex-col ">
                <p className="text-[12px] text-gray">Current Owner</p>
                <p className="text-[14px]">Toptaab</p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-[70%] flex flex-col justify-center items-center border-[1px] gap-[1rem] p-[1rem] rounded-xl">
            <div className="text-center">
              <p className="text-[12px] text-gray">price</p>
              <p className="text-[14px] font-semibold"> 4.55 ETH</p>
            </div>

            <div className="flex gap-[1rem] w-[90%]">
              <Button name="Edit price" />
              <Button name="Cancel" />
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div>
        <div className="border-[1px] rounded-xl p-[1rem]">
          <div className="border-b-[1px]  flex gap-[5px] pb-[1rem]">
            <InformationIcon />
            <p className="text-[14px] text-gray font-semibold">Overview</p>
          </div>
          <div className="flex gap-[2rem] py-[1rem]">
            <div className="flex-1 flex flex-col gap-[1rem]">
              <div className="flex flex-col gap-[1rem]">
                <div className="flex gap-[5px]">
                  <span className="text-[14px] text-gray font-semibold">By </span>
                  <span className="text-[14px] font-semibold">Creator</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus..
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[1rem] ">
              <div className="flex gap-[5px] ">
                <AttributeIcon />
                <h1 className="text-[14px] font-semibold">Traits</h1>
              </div>
              <div className="flex flex-wrap justify-start gap-[1rem]">
                <TraitCard />
                <TraitCard />
                <TraitCard />
                <TraitCard />
                <TraitCard />
                <TraitCard />
                <TraitCard />
                <TraitCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetContainer;
