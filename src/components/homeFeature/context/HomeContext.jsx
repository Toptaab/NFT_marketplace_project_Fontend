import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const HomeContext = createContext();

export default function HomeContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [arrayCollection, setArrayCollection] = useState(null);
  const [summarize, setSummarize] = useState([]);

  const getAllCollectionAsset = async () => {
    try {
      setLoading(true);
      const collection = await axios.get("/collection");
      setArrayCollection(collection.data);

      const asset = await axios.get("/asset/count");
      const history = await axios.get("/history/count");
      const user = await axios.get("/user/count");

      setSummarize(
        { nfts: asset.data._count.id, totalSale: history.data._count.id,creator: user.data._count.id  },
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
    <HomeContext.Provider value={{ arrayCollection, loading, summarize }}>
      {children}
    </HomeContext.Provider>
  );
}
