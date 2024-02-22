import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const HomeContext = createContext();

export default function HomeContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [summarize, setSummarize] = useState([]);
  const [collection, setCollection] = useState(null)
  const [asset, setAsset] = useState(null);

  const getAllCollectionAsset = async () => {
    try {
      setLoading(true);
      const apiCollection = await axios.get("/collection")
      setCollection(apiCollection.data)
      const apiAsset = await axios.get("/asset");
      setAsset(apiAsset.data);
      // const collection = await axios.get("/collection");
      // setArrayCollection(collection.data);

      const countAsset = await axios.get("/asset/count");
      const countHistory = await axios.get("/history/count");
      const countUser = await axios.get("/user/count");





      setSummarize(
        { nfts: countAsset.data._count.id, totalSale: countHistory.data._count.id,creator: countUser.data._count.id  },
        );

        
    } catch (err) {
      console.log(err);
    }finally{
      setLoading(false);
    }
  };




  useEffect(() => {
    getAllCollectionAsset();
  }, []);

  return (
    <HomeContext.Provider value={{asset,collection, loading, summarize }}>
      {children}
    </HomeContext.Provider>
  );
}
