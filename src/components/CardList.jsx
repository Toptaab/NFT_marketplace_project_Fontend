import React, { useState } from "react";
import Card from "./Card";
import BtnTypeSelection from "../ui/Hero/BtnTypeSelection";
import CollectionList from "./CollectionList";

function CardList({ arrayCollection,name }) {
const [switchTap, setSwitchTap] = useState(true)

const switchTapHandler = ({name}) => {
  setSwitchTap(!switchTap)
}

  return (
    <div className="w-full flex flex-col gap-[2rem]">
      <div className="flex justify-between">
        <div className="font-semibold text-[18px]">{name}</div>
        <div className="gap-2 flex">
          <BtnTypeSelection onClick={switchTapHandler} name="NFT" isPrimary={switchTap} />
          <BtnTypeSelection onClick={switchTapHandler} name="Collection" isPrimary={!switchTap} />
        </div>
      </div>
      {switchTap?
            <div className="flex flex-wrap align-top justify-center gap-[4rem] h-[50rem] overflow-auto">
            {arrayCollection?.map((colValue) =>
              colValue.Nfts.map((nftValue) => (
                <Card
                  key={nftValue.id}
                  nftId={nftValue.id}
                  nftImage={nftValue.image}
                  nftName={nftValue.name}
                  collectionImage={colValue.image}
                  CollectionName={colValue.name}
                  collectionId={colValue.id}
                  price={nftValue.SaleList[0]?.price}
                />
              ))
            )}
          </div>
        :
        <CollectionList collectionArray={arrayCollection} />

      }


      
      {/*  */}

      {/*  */}
    </div>
  );
}

export default CardList;
