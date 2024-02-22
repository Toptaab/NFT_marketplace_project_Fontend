import React, { useState } from "react";
import useAssetContext from "./hook/useAssetContext";
import Button from "../../ui/Button";
import SetSalePriceModal from "./SetSalePriceModal";

function AssetButton() {
  const { asset, me, input, handleChangeInput,putOnSaleHandle,updatePriceHandler,cancelSaleNftHandler } = useAssetContext();
  const [priceInputModal, setPriceInputModal] = useState(false);

console.log(asset)
console.log(me)

  const modalHandler = () => {
    setPriceInputModal(!priceInputModal);
  };

  if (asset?.wallet?.userId === me?.id) {
    if (asset.isOnsale) {
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


          {priceInputModal ? (
            <div className="flex flex-col items- gap-[0.5rem] ">
              <SetSalePriceModal onChange={handleChangeInput} />
              <div className="flex gap-[0.5rem] w-full ">
                <Button name="Confirm" onClick={updatePriceHandler} />
                <Button name="Cancal" secondary="true" onClick={modalHandler} />
              </div>
            </div>
          ) : (
            <div className="flex gap-[1rem] w-[90%]">
            <Button name="Edit price"onClick={modalHandler} />
            <Button name="Put out sale" secondary="true" onClick={cancelSaleNftHandler} />
          </div>
          )}

          
        </div>
      );
    } else {
      return (
        <div className="w-[70%] flex flex-col justify-center items-center border-[1px] gap-[1rem] p-[1rem] rounded-xl">
          <div className="text-center">
            <p className="text-[12px] text-gray">price</p>
            <p className="text-[14px] font-semibold">
              {asset?.SaleList[0]?.price
                ? asset.SaleList[0].price + " " + asset.chain.currencySymbol
                : "Not On sale"}
            </p>
          </div>

          {priceInputModal ? (
            <div className="flex flex-col items- gap-[0.5rem] ">
              <SetSalePriceModal onChange={handleChangeInput} />
              <div className="flex gap-[0.5rem] w-full ">
                <Button name="Confirm" onClick={putOnSaleHandle} />
                <Button name="Cancal" secondary="true" onClick={modalHandler} />
              </div>
            </div>
          ) : (
            <div className="flex gap-[1rem] w-[90%] ">
              <Button name="Put On Sale" onClick={modalHandler} />
            </div>
          )}
        </div>
      );
    }
  } else {
    if (asset.isOnsale) {
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
