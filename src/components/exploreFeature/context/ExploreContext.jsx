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
  const [tempAsset, setTempAsset] = useState(null);
  const [tempCollection, setTempCollection] = useState(null);
  const [sortDirection, setSortDirection] = useState(false);
  const [arrowOpen, setArrowOpen] = useState(false);



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

  const filterCategory = (input) => {
    tempAsset ? null : setTempAsset(asset);

    if (assetType === "nft") {
      let newAsset;
      input === "Art"
        ? (newAsset = tempAsset.filter(
            (value) => value.collection.category.name === "Art"
          ))
        : input === "Gaming"
        ? (newAsset = tempAsset.filter(
            (value) => value.collection.category.name === "Gaming"
          ))
        : input === "Music"
        ? (newAsset = tempAsset.filter(
            (value) => value.collection.category.name === "Music"
          ))
        : input === "MemberShips"
        ? (newAsset = tempAsset.filter(
            (value) => value.collection.category.name === "MemberShips"
          ))
        : input === "Photogtaphy"
        ? (newAsset = tempAsset.filter(
            (value) => value.collection.category.name === "Photogtaphy"
          ))
        : null;

      setAsset(newAsset);
    }
    if (assetType === "collection") {
      let newCollection;
      input === "Art"
        ? (newCollection = tempCollection.filter(
            (value) => value.category.name === "Art"
          ))
        : input === "Gaming"
        ? (newCollection = tempCollection.filter(
            (value) => value.category.name === "Gaming"
          ))
        : input === "Music"
        ? (newCollection = tempCollection.filter(
            (value) => value.category.name === "Music"
          ))
        : input === "MemberShips"
        ? (newCollection = tempCollection.filter(
            (value) => value.category.name === "MemberShips"
          ))
        : input === "Photogtaphy"
        ? (newCollection = tempCollection.filter(
            (value) => value.category.name === "Photogtaphy"
          ))
        : null;

      setCollection(newCollection);
    }
  };

  const sortPriceHandler = () => {
    setArrowOpen(true);
    setSortDirection(!sortDirection);
    if (assetType === "nft") {
      sortDirection
        ? asset.sort((a, b) => {
            if (a.SaleList.length < 1) return 1;
            if (b.SaleList.length < 1) return -1;
            return a.SaleList[0].price - b.SaleList[0].price;
          })
        : asset.sort((a, b) => {
            if (a.SaleList.length < 1) return 1;
            if (b.SaleList.length < 1) return -1;
            return b.SaleList[0].price - a.SaleList[0].price;
          });
    }

    if (assetType === "collection") {
    }
    sortDirection
      ? Collection.sort((a, b) => {
          if (a.history.length < 1) return 1;
          if (b.history.length < 1) return -1;
          return a.history[0].price - b.history[0].price;
        })
      : Collection.sort((a, b) => {
          if (a.history.length < 1) return 1;
          if (b.history.length < 1) return -1;
          return b.history[0].price - a.history[0].price;
        });
  };

  const assetTypeHandler = (e) => {
    setAssetType(e.target.name);
  };

  const setCategoryHandler = (e) => {
    setCategorySelection(e.target.name);
    filterCategory(e.target.name);
  };

  const clearFillterHandler = () => {
    setCategorySelection(null);
    setAsset([...tempAsset]);
    setCollection([...tempCollection]);
    setArrowOpen(false);
  };

  useEffect(() => {
    getAllAsset();
  }, []);

  useEffect(() => {
    if (!tempAsset && asset) {
      setTempAsset([...asset]);
    } else {
      return;
    }
    if (!tempCollection && Collection) {
      setTempCollection([...Collection]);
    }
  }, [asset, Collection]);

  return (
    <ExploreContext.Provider
      value={{
        sortPriceHandler,
        clearFillterHandler,
        categorySelection,
        setCategoryHandler,
        loading,
        assetType,
        Collection,
        asset,
        Creator,
        assetTypeHandler,
        arrowOpen,
        sortDirection,
      }}
    >
      {children}
    </ExploreContext.Provider>
  );
}
