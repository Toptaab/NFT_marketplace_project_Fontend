import { createContext, useEffect, useState } from "react";
import { CATEGORY } from "../../../constant";
import axios from "axios";

export const ExploreContext = createContext();

const ASSETTYPE = {
  NFT: "nft",
  COLLECTION: "collection",
  CREATOR: "creator",
};

export default function ExploreContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [asset, setAsset] = useState(null);
  const [Collection, setCollection] = useState(null);
  const [Creator, setCreator] = useState(null);
  const [assetType, setAssetType] = useState(ASSETTYPE.NFT);
  const [categorySelection, setCategorySelection] = useState(null);


  const getAllAsset = async () => {
    try {
      setLoading(true);
      const apiCollection = await axios.get("/collection");
      setCollection(apiCollection.data);

      const apiAsset = await axios.get("/asset");
      setAsset(apiAsset.data);

      const user = await axios.get("/user/allUser");
      setCreator(user.data);
      
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const assetTypeHandler = (e) =>{
    setAssetType(e.target.name)
  }

  useEffect(() => {
    getAllAsset();
  }, []);

  return (
    <ExploreContext.Provider value={{loading, assetType, Collection, asset, Creator,assetTypeHandler }}>
      {children}
    </ExploreContext.Provider>
  );
}
