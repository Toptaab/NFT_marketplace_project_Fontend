import React from "react";
import CollectionCard from "./CollectionCard";

function CollectionList({collectionArray}) {
  return (
    <div className="w-full">
      <div className="flex gap-[1rem] justify-start px-[1rem] items-center">
        <p className="w-[5rem]">#</p>
        <p className="w-[15rem]">Collection</p>
        <p className="w-[5rem]">Floor Price</p>
        <p className="w-[5rem]">Volume</p>
        <p className="w-[5rem]">Items</p>
        <p className="w-[5rem]">Owners</p>
        <p className="w-[5rem]">BlockChain</p>
      </div>
      <div className="border-[1px] border-gray rounded-md w-full">
      {collectionArray?.map((value,index) => <CollectionCard key={value.id} id={value.id} name={value.name} Highestprice="" image={value.image} totalHistory="" totalNft={value.Nfts.length} owner="" chain=""  number={index+1}/>)}
      </div>
    </div>
  );
}

export default CollectionList;
