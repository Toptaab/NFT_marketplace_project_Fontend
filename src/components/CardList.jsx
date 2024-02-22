import React, { useState } from "react";
import Card from "./Card";
import BtnTypeSelection from "../ui/Hero/BtnTypeSelection";
import CollectionList from "./CollectionList";

function CardList({ arrayCollection, name, arrayAsset }) {
  const [switchTap, setSwitchTap] = useState(true);

  const switchTapHandler = () => {
    setSwitchTap(!switchTap);
  };

  return (
    <div className="w-full flex flex-col gap-[2rem]">
      <div className="flex justify-between">
        <div className="font-semibold text-[18px]">{name}</div>
        <div className="gap-2 flex">
          <BtnTypeSelection
            onClick={switchTapHandler}
            name="NFT"
            isPrimary={switchTap}
          />
          <BtnTypeSelection
            onClick={switchTapHandler}
            name="Collection"
            isPrimary={!switchTap}
          />
        </div>
      </div>
      {switchTap ? (
        <div className="flex flex-wrap align-top justify-center gap-[4rem] h-[50rem] overflow-auto">
          {arrayAsset?.map((value) => (
          <Card
            key={value.id}
            nftId={value.id}
            nftImage={value.image}
            nftName={value.name}
            collectionImage={value.wallet.user.image}
            CollectionName={value.wallet.user.userName}
            userId={value.wallet.user.id}
            price={value?.SaleList[0]?.price}
          />
        ))}
        </div>
      ) : (
        <CollectionList collectionArray={arrayCollection} />
      )}

    </div>
  );
}

export default CardList;
