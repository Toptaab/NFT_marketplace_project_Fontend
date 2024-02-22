import React from "react";
import Card from "../Card";
import CollectionList from "../CollectionList";
import useExploreContext from "./hook/useExploreContext";
import Creatorlist from "./Creatorlist";

function ExploreCardlist() {
  const { Collection, asset, Creator, assetType } = useExploreContext();

  return (
    <div className="w-full flex flex-col gap-[1rem]">
      <div className="flex justify-between">
        <div className="font-semibold text-[18px]">
          {assetType === "collection" ? (
            <div>Collections</div>
          ) : assetType === "creator" ? (
            <div>Creators</div>
          ) : (
            <div>NFTs</div>
          )}
        </div>
      </div>
      <div className="flex flex-wrap align-top justify-center gap-[4rem] h-[50rem] overflow-auto">
        {assetType === "collection" ? (
          <CollectionList collectionArray={Collection} />
        ) : assetType === "creator" ? (
          <Creatorlist creatorArray={Creator} />
        ) : (
          asset?.map((value) => (
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
          ))
        )}
      </div>


    </div>
  );
}

export default ExploreCardlist;
