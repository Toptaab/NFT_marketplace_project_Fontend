import React, { useState } from "react";
import BtnTypeSelection from "../../ui/Hero/BtnTypeSelection";
import Card from "../Card";
import CollectionList from "../CollectionList";

function UserCardList({userObj}) {
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
          {userObj?.Wallets?.map((walletValue) =>
            walletValue.Nfts.map((nftValue) => (
              <Card
                key={nftValue.id}
                nftId={nftValue.id}
                nftImage={nftValue.image}
                nftName={nftValue.name}
                collectionImage={nftValue.collection.image}
                CollectionName={nftValue.collection.name}
                collectionId={nftValue.collection.id}
                price={nftValue.SaleList[0]?.price}
              />
            ))
          )}
        </div>
      ) : (
        <CollectionList collectionArray={userObj.Collections} />
      )}

      {/*  */}

      {/*  */}
    </div>
  );
}

export default UserCardList;
