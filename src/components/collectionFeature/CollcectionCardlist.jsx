import React from 'react'
import BtnTypeSelection from '../../ui/Hero/BtnTypeSelection';
import Card from '../Card';

function CollcectionCardlist({collectionObj}) {
  
    return (
        <div className="w-full flex flex-col gap-[2rem]">
          <div className="flex justify-between">
            <div className="font-semibold text-[18px]">Assets</div>
            <div className="gap-2 flex">
              <BtnTypeSelection name="NFT" isPrimary={true} />
            </div>
          </div>
          <div className="flex flex-wrap align-top justify-center gap-[4rem] h-[50rem] overflow-auto">
            {collectionObj?.Nfts.map((Value) =>
                <Card
                  key={Value.id}
                  nftId={Value.id}
                  nftImage={Value.image}
                  nftName={Value.name}
                  collectionImage={Value.wallet.user.image}
                  CollectionName={Value.wallet.user.userName}
                  price={Value.SaleList[0]?.price}
                  userId={Value.wallet.user.id}
                />
              )
            }
    
          </div>
        </div>
      );
    
    



}

export default CollcectionCardlist