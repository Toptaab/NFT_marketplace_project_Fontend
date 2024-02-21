import React from "react";
import CollectionHeader from "./CollectionHeader";
import CollcectionCardlist from "./CollcectionCardlist";
import useCollectionContext from "./hook/useCollectionContext";
import Spinner from "../../ui/Spinner";

function CollectionContainer() {
  const { collectionObj, loading } = useCollectionContext();

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="w-full flex flex-col gap-[2rem] p-[3rem]">
      <CollectionHeader collectionObj={collectionObj} />
      <CollcectionCardlist collectionObj={collectionObj}/>
    </div>
  );
}

export default CollectionContainer;
