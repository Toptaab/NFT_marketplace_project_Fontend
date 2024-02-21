import React from "react";
import ProfileAvatarBig from "../../ui/ProfileAvatarBig";
import StatusButton from "../profileFeature/StatusButton";
import { PlusIcon } from "../../icons";
import Button from "../../ui/Button";

function CollectionHeader() {
  return (
    <div className="flex">
        
      <div className="w-full flex flex-col gap-[2rem]">
        <div className="flex items-center justify-start gap-[1rem]">
          <ProfileAvatarBig image="" onClick={() => navigate("/setting")} />
          <h1 className="text-[34px] font-bold">Collention Name</h1>
        </div>

        {/*  */}
        <div className="flex justify-start gap-[5rem]">
          <div>
            <div className="text-[24px] font-bold text-primary">250K+</div>
            <div className="text-[20px] text-gray">Volume</div>
          </div>
          <div>
            <div className="text-[24px] font-bold text-primary">50K+</div>
            <div className="text-[20px] text-gray">Totals Item</div>
          </div>
          <div>
            <div className="text-[24px] font-bold text-primary">55.55</div>
            <div className="text-[20px] text-gray">Floor Price</div>
          </div>
          <div>
            <div className="flex gap-[0.5rem] items-baseline">
              <div className="text-[24px] font-bold text-primary">ETH</div>
            </div>
            <div className="text-[20px] text-gray">Blockchain</div>
          </div>
        </div>

        {/*  */}
        <div>
          <h5 className="font-bold text-gray">Description</h5>
          <p>test</p>
        </div>
        <div>
          <h5 className="font-bold text-gray">Creator By</h5>
          <p className="text-primary font-semibold">Toptaab</p>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-end w-full gap-[1rem]">
        <div className="w-[40%] min-w-[5rem]">
          <Button name="Mint" onClick={() => {}}></Button>
        </div>
      </div>


      
    </div>
  );
}

export default CollectionHeader;
