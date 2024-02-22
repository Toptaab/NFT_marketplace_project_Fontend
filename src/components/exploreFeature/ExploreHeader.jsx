import React from "react";
import { CATEGORY } from "../../constant";
import useExploreContext from "./hook/useExploreContext";

function ExploreHeader() {
  const { assetTypeHandler, assetType } = useExploreContext();

  console.log(assetType);

  return (
    <div className="flex-1 flex flex-col gap-[2rem]">
      <div className="flex gap-[2rem] text-[46px]">
        <button
          role="button"
          name="nft"
          onClick={assetTypeHandler}
          className={`${assetType === "nft" ? "font-semibold" : "text-gray"} hover:font-semibold`}
        >
          NFTs
        </button>
        <button
          role="button"
          name="collection"
          onClick={assetTypeHandler}
          className={`${
            assetType === "collection" ? "font-semibold" : "text-gray"
          } hover:font-semibold`}
        >
          Collection
        </button>
        <button
          role="button"
          name="creator"
          onClick={assetTypeHandler}
          className={`${
            assetType === "creator" ? "font-semibold" : "text-gray"
          } hover:font-semibold`}
        >
          Creator
        </button>
      </div>

      {/*  */}
      <div className="flex gap-[2rem] text-[36px]">
        <div role="button" className="text-gray">
          {CATEGORY.ART}
        </div>
        <div role="button" className="text-gray">
          {CATEGORY.GAMING}
        </div>
        <div role="button" className="text-gray">
          {CATEGORY.MUSIC}
        </div>
        <div role="button" className="text-gray">
          {CATEGORY.MEMBERSHIP}
        </div>
        <div role="button" className="text-gray">
          {CATEGORY.PHOTOGRAPHY}
        </div>
      </div>

      {/*  */}
      {assetType === "creator" ? null : (
        <div className="flex gap-[2rem] items-baseline">
          <div className="text-[42px] font-semibold">Sort By</div>
          <div role="button" className="font-semibold">
            Price
          </div>
          <div role="button" className="text-primary text-[10px]">
            clear filter
          </div>
        </div>
      )}
    </div>
  );
}

export default ExploreHeader;
