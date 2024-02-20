import React from "react";
import Button from "../../ui/Button";
import CollectionImage from "../../ui/CollectionImage";
import AvatarImage from "../../ui/AvatarImage";
import TraitCard from "./ui/TraitCard";
import { AttributeIcon, InformationIcon } from "../../icons";
import useAssetContext from './hook/useAssetContext'
import Spinner from "../../ui/Spinner";

function AssetContainer() {
const {asset,loading} = useAssetContext()

if(loading){return <Spinner/> } 

  return (
    <div className="flex flex-col gap-[2rem] p-[2rem]">
      <div className="flex justify-center gap-[2rem]">
        <div className=" flex-1 flex justify-center items-center">
          <img
            className="object-cover rounded-[1rem w-[20rem] h-[20rem] rounded-md"
            src={asset.image}
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-[2rem] ">
          <div className="flex flex-col gap-[1rem] w-[70%]">
            <div className="flex gap-[1rem]">
              <CollectionImage collectionImage={asset.collection.image}/>
              <p className="text-[18px] font-semibold">{asset.collection.name}</p>
            </div>
            <div className="text-[32px] font-semibold">{asset.name}</div>
            <div className="flex items-center gap-[1rem]">
              <div>
                <AvatarImage collectionImage={asset.wallet.user.image} />
              </div>
              <div className="flex flex-col ">
                <p className="text-[12px] text-gray">Current Owner</p>
                <p className="text-[14px]">{asset.wallet.user.userName}</p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-[70%] flex flex-col justify-center items-center border-[1px] gap-[1rem] p-[1rem] rounded-xl">
            <div className="text-center">
              <p className="text-[12px] text-gray">price</p>
              <p className="text-[14px] font-semibold"> {asset?.SaleList[0]?.price? asset.SaleList[0].price +" "+ asset.chain.currencySymbol : "Not On sale"}</p>
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
                  <span className="text-[14px] font-semibold">{asset.creator.userName}</span>
                </div>
                <p>
                  {asset.collection.description}
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-[1rem] ">
              <div className="flex gap-[5px] ">
                <AttributeIcon />
                <h1 className="text-[14px] font-semibold">Traits</h1>
              </div>
              <div className="flex flex-wrap justify-start gap-[1rem]">
                {asset.TraitAttributes.map((value) => (<TraitCard key={value.id} trait={value.trait.name}  traitAttribute={value.name} />))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetContainer;
