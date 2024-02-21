import React from "react";
import CreateAssetContainer from "../components/assetFeature/CreateAssetContainer";
import CreateCollectionContextProvider from "../components/createCollectionFeature/contexts/CreateCollectionContext";
import AssetContextProvider from "../components/assetFeature/context/AssetContext";

function CreatePage() {
  return (
    <div className="w-dvw">
      <CreateCollectionContextProvider>
        <AssetContextProvider>
          <CreateAssetContainer />
        </AssetContextProvider>
      </CreateCollectionContextProvider>
    </div>
  );
}

export default CreatePage;
