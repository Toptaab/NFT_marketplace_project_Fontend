import React from "react";
import ProfileAvatarBig from "../../ui/ProfileAvatarBig";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

function CollectionHeader({collectionObj}) {
const navigate = useNavigate()

  return (
    <div className="flex">
        
      <div className="w-full flex flex-col gap-[2rem]">
        <div className="flex items-center justify-start gap-[1rem]">
          <ProfileAvatarBig image={collectionObj.image} onClick={() => {}} />
          <h1 className="text-[34px] font-bold">{collectionObj.name}</h1>
        </div>

        {/*  */}
        <div className="flex justify-start gap-[5rem]">
          <div>
            <div className="text-[24px] font-bold text-primary">{collectionObj.history.length}</div>
            <div className="text-[20px] text-gray">Volume</div>
          </div>
          <div>
            <div className="text-[24px] font-bold text-primary">{collectionObj.Nfts.length}</div>
            <div className="text-[20px] text-gray">Totals Item</div>
          </div>
          <div>
            <div className={` font-bold ${collectionObj?.history[0]?.price ? "text-primary text-[24px]"  : "text-gray text-[18px]"}`}>{collectionObj?.history[0]?.price || "No record"}</div>
            <div className="text-[20px] text-gray">Highest Price</div>
          </div>
          <div>
            <div className="flex gap-[0.5rem] items-baseline">
              <div className="text-[24px] font-bold text-primary">{collectionObj.chain.currencySymbol}</div>
            </div>
            <div className="text-[20px] text-gray">Blockchain</div>
          </div>
        </div>

        {/*  */}
        <div>
          <h5 className="font-bold text-gray">Description</h5>
          <p>{collectionObj.description}</p>
        </div>
        <div>
          <h5 className="font-bold text-gray">Creator By</h5>
          <p className="text-primary font-semibold" role="button" onClick={()=> navigate(`/profile/${collectionObj.creator.id}`)}>{collectionObj.creator.userName}</p>
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
