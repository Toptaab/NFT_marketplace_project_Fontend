import React from "react";
import Hero from "./Hero";
import CardList from "../CardList";
import useHomeContext from "../homeFeature/hook/useHomeContext"
import Spinner from "../../ui/Spinner"

function HomeContainer() {
const {arrayCollection,loading,collection,asset} = useHomeContext()

if(loading){return <Spinner/> } 

  return (
    <div className="flex flex-col h-auto w-full p-[3rem] gap-[3rem]">
      <Hero />
      <CardList name="Trending NFTs" arrayCollection={collection} arrayAsset={asset}/>
    </div>
  );
}

export default HomeContainer;
