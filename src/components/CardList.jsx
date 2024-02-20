import React from "react";
import Card from "./Card";
import BtnTypeSelection from "../ui/Hero/BtnTypeSelection";

function CardList({ userObj }) {
  console.log("this cart", userObj);

  return (
    <div className="w-full flex flex-col gap-[2rem]">
      <div className="flex justify-between">
        <div className="font-semibold text-[18px]">trending NFTs</div>
        <div className="gap-2 flex">
          <BtnTypeSelection name="NFT" isPrimary={true} />
          <BtnTypeSelection name="Collection" isPrimary={false} />
        </div>
      </div>
      <div className="flex flex-wrap align-top justify-center gap-[4rem] h-[50rem] overflow-auto">
        {userObj.Collections.map((colValue) =>
          colValue.Nfts.map((nftValue) => (
            <Card
              key={nftValue.id}
              nftId={nftValue.id}
              nftImage={nftValue.image}
              nftName={nftValue.name}
              collectionImage={colValue.image}
              CollectionName={colValue.name}
              price={nftValue.SaleList[0]?.price}
            />
          ))
        )}

      </div>
    </div>
  );
}

export default CardList;
