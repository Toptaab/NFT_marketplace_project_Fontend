import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const HomeContext = createContext();

export default function HomeContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [arrayCollection, setArrayCollection] = useState();

  const getAllCollectionAsset = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/collection");
      console.log(response.data);
      setArrayCollection(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCollectionAsset();
  }, []);

  return (
    <HomeContext.Provider value={{ arrayCollection ,loading}}>
      {children}
    </HomeContext.Provider>
  );
}
