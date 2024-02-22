import React from "react";
import CreateAssetContainer from "../components/createAssetFeature/CreateAssetContainer";
import CreateCollectionContextProvider from "../components/createCollectionFeature/contexts/CreateCollectionContext";
import AssetContextProvider from "../components/assetFeature/context/AssetContext";
import CreateAssetContextProvider from "../components/createAssetFeature/context/CreateAssetContext";

function CreatePage() {
  return (
    <div className="w-dvw">
      <CreateCollectionContextProvider>
          <CreateAssetContextProvider>
            <CreateAssetContainer />
          </CreateAssetContextProvider>
      </CreateCollectionContextProvider>
    </div>
  );
}

export default CreatePage;
