import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import truncateMiddle from "truncate-middle";

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [userObj, setUserObj] = useState({});
  const { userId } = useParams();
  const accessToken = localStorage.getItem("accessToken");
  const [loading, setLoading] = useState(true);

  const authme = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/user/${userId}`, {
        headers: {
          Authorization: "Bearer" + " " + accessToken,
        },
      });
      response.data.Wallets[0].walletAddress = truncateMiddle(response.data.Wallets[0].walletAddress,7,3,"...")
      setUserObj(response.data);

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    authme();
  }, []);



  return (
    <ProfileContext.Provider value={{ userObj, loading }}>
      {children}
    </ProfileContext.Provider>
  );
}
