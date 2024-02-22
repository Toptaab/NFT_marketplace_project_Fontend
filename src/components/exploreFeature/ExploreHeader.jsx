import React from "react";
import { CATEGORY } from "../../constant";
import useExploreContext from "./hook/useExploreContext";
import { ArrowIcon } from "../../icons";

function ExploreHeader() {
  const {
    sortPriceHandler,
    assetTypeHandler,
    clearFillterHandler,
    assetType,
    setCategoryHandler,
    categorySelection,
    arrowOpen,
    sortDirection,
  } = useExploreContext();

  return (
    <div className="flex-1 flex flex-col gap-[2rem]">
      <div className="flex gap-[2rem] text-[46px]">
        <button
          role="button"
          name="nft"
          onClick={assetTypeHandler}
          className={`${
            assetType === "nft" ? "font-semibold" : "text-gray"
          } hover:font-semibold`}
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
      <div
        className={`flex gap-[2rem] text-[36px] ${
          assetType === "creator" ? "hidden" : null
        }`}
      >
        <button
          name={CATEGORY.ART}
          onClick={setCategoryHandler}
          className={`${
            categorySelection === CATEGORY.ART
              ? "font-semibold"
              : "text-gray hover:font-semibold"
          }`}
        >
          {CATEGORY.ART}
        </button>
        <button
          name={CATEGORY.GAMING}
          onClick={setCategoryHandler}
          className={`${
            categorySelection === CATEGORY.GAMING
              ? "font-semibold"
              : "text-gray hover:font-semibold"
          }`}
        >
          {CATEGORY.GAMING}
        </button>
        <button
          name={CATEGORY.MUSIC}
          onClick={setCategoryHandler}
          className={`${
            categorySelection === CATEGORY.MUSIC
              ? "font-semibold"
              : "text-gray hover:font-semibold"
          }`}
        >
          {CATEGORY.MUSIC}
        </button>
        <button
          name={CATEGORY.MEMBERSHIP}
          onClick={setCategoryHandler}
          className={`${
            categorySelection === CATEGORY.MEMBERSHIP
              ? "font-semibold"
              : "text-gray hover:font-semibold"
          }`}
        >
          {CATEGORY.MEMBERSHIP}
        </button>
        <button
          name={CATEGORY.PHOTOGRAPHY}
          onClick={setCategoryHandler}
          className={`${
            categorySelection === CATEGORY.PHOTOGRAPHY
              ? "font-semibold"
              : "text-gray hover:font-semibold"
          }`}
        >
          {CATEGORY.PHOTOGRAPHY}
        </button>
      </div>

      {/*  */}
      {assetType === "creator" ? null : (
        <div className="flex gap-[2rem] items-baseline">
          <div className="text-[26px] font-semibold">Sort by</div>
          <div className="flex items-baseline gap-[3px]">
            <button
              className="text-[18px] hover:font-semibold"
              onClick={sortPriceHandler}
            >
              Price
            </button>
            {arrowOpen ? (
              <div className={`${sortDirection? "rotate-180" : "" }`}>
                <ArrowIcon  />
              </div>
            ) : null}
          </div>
          <button
            onClick={clearFillterHandler}
            className="text-primary text-[10px] hover:font-semibold"
          >
            clear filter
          </button>
        </div>
      )}
    </div>
  );
}

export default ExploreHeader;
