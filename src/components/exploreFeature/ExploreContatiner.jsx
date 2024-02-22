import React from "react";
import useExploreContext from "./hook/useExploreContext";
import Spinner from '../../ui/Spinner'
import ExploreCardlist from "./ExploreCardlist";
import ExploreHeader from "./ExploreHeader";

function ExploreContatiner() {
  const { loading } = useExploreContext();

  if(loading){return <Spinner/> } 


  return (
    <div className="w-full flex flex-col p-[3rem] gap-[3rem]">
        <ExploreHeader/>

      <div>
        <ExploreCardlist />
      </div>
    </div>
  );
}

export default ExploreContatiner;
