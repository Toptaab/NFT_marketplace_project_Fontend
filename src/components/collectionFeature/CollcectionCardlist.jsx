import React from 'react'
import BtnTypeSelection from '../../ui/Hero/BtnTypeSelection';
import Card from '../Card';

function CollcectionCardlist() {
  
    return (
        <div className="w-full flex flex-col gap-[2rem]">
          <div className="flex justify-between">
            <div className="font-semibold text-[18px]">Assets</div>
            <div className="gap-2 flex">
              <BtnTypeSelection name="NFT" isPrimary={true} />
            </div>
          </div>
          <div className="flex flex-wrap align-top justify-center gap-[4rem] h-[50rem] overflow-auto">
            {/* {arrayCollection?.map((colValue) =>
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
            )} */}
            <Card />
    
          </div>
        </div>
      );
    
    



}

export default CollcectionCardlist