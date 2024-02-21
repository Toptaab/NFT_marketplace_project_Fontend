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
      const response = await axios.get("/collection");
      console.log(response.data);
      setArrayCollection(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getSummarize = async () => {
    try {
      const response = await axios.get("/asset/count");
      response.history = await axios.get("/history/count");
      response.user = await axios.get("/user/count");

      console.log(response);

      setSummarize(
        { nfts: response.data._count.id, totalSale: response.history.data._count.id,creator:response.user.data._count.id  },
 
      );
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  // const setSummarizeHandle = (key,value) => {
  //   setSummarize({...summarize,[key]:value})

  // }

  useEffect(() => {
    getAllCollectionAsset();
    getSummarize();
  }, []);

  return (
    <HomeContext.Provider value={{ arrayCollection, loading, summarize }}>
      {children}
    </HomeContext.Provider>
  );
}
