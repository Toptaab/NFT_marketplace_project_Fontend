import React from "react";
import CreateAssetContainer from "../components/assetFeature/CreateAssetContainer";
import CollectionContextProvider from "../components/createCollectionFeature/contexts/CollectionContext";
import AssetContextProvider from "../components/assetFeature/context/AssetContext";

function CreatePage() {
  return (
    <div className="w-dvw">
      <CollectionContextProvider>
        <AssetContextProvider>
          <CreateAssetContainer />
        </AssetContextProvider>
      </CollectionContextProvider>
    </div>
  );
}

export default CreatePage;
