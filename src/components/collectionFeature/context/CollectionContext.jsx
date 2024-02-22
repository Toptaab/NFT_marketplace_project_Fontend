import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CollectionContext = createContext();

export default function CollectionContextProvider({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  const [collectionObj, setCollectionObj] = useState(null);
  const [loading, setLoading] = useState(true);
  const { collectionId } = useParams();

  const collectionApi = async () => {
    try {
        setLoading(true)
      const response = await axios.get(`/collection/${collectionId}`);

      setCollectionObj(response.data);

      setLoading(false)
    } catch (err) {
      console.log(err);
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    collectionApi();
  }, []);

  return (
    <CollectionContext.Provider value={{ collectionObj,loading }}>
      {children}
    </CollectionContext.Provider>
  );
}
