import React from "react";
import CollectionContainer from "../components/collectionFeature/CollectionContainer";
import CollectionContextProvider from "../components/collectionFeature/context/CollectionContext";

function CollectionPage() {
  return (
    <div className="w-dvw">
      <CollectionContextProvider>
        <CollectionContainer />
      </CollectionContextProvider>
    </div>
  );
}

export default CollectionPage;
