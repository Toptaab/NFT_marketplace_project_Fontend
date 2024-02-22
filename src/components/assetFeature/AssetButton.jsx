import React, { useState } from "react";
import useAssetContext from "./hook/useAssetContext";
import Button from "../../ui/Button";

function AssetButton() {
  const { asset, me } = useAssetContext();

  if (asset.creatorId === me.id) {
    if (asset.isOnSale) {
      return (
        <div className="w-[70%] flex flex-col justify-center items-center border-[1px] gap-[1rem] p-[1rem] rounded-xl">
          <div className="text-center">
            <p className="text-[12px] text-gray">price</p>
            <p className="text-[14px] font-semibold">
              {" "}
              {asset?.SaleList[0]?.price
                ? asset.SaleList[0].price + " " + asset.chain.currencySymbol
                : "Not On sale"}
            </p>
          </div>
          <div className="flex gap-[1rem] w-[90%]">
            <Button name="Edit price" />
            <Button name="Cancel" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="w-[70%] flex flex-col justify-center items-center border-[1px] gap-[1rem] p-[1rem] rounded-xl">
          <div className="text-center">
            <p className="text-[12px] text-gray">price</p>
            <p className="text-[14px] font-semibold">
              {" "}
              {asset?.SaleList[0]?.price
                ? asset.SaleList[0].price + " " + asset.chain.currencySymbol
                : "Not On sale"}
            </p>
          </div>
          <div className="flex gap-[1rem] w-[90%]">
            <Button name="Put On Sale" />
          </div>
        </div>
      );
    }
  } else {
    if (asset.isOnSale) {
      return (
        <div className="w-[70%] flex flex-col justify-center items-center border-[1px] gap-[1rem] p-[1rem] rounded-xl">
          <div className="text-center">
            <p className="text-[12px] text-gray">price</p>
            <p className="text-[14px] font-semibold">
              {" "}
              {asset?.SaleList[0]?.price
                ? asset.SaleList[0].price + " " + asset.chain.currencySymbol
                : "Not On sale"}
            </p>
          </div>

          <div className="flex gap-[1rem] w-[90%]">
            <Button name="BUY" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="w-[70%] flex flex-col justify-center items-center border-[1px] gap-[1rem] p-[1rem] rounded-xl">
          <div className="text-center">
            <p className="text-[12px] text-gray">price</p>
            <p className="text-[14px] font-semibold">
              {" "}
              {asset?.SaleList[0]?.price
                ? asset.SaleList[0].price + " " + asset.chain.currencySymbol
                : "Not On sale"}
            </p>
          </div>

          <div className="flex gap-[1rem] w-[90%]">
            <Button name="Not On sale" />
          </div>
        </div>
      );
    }
  }
}

export default AssetButton;
