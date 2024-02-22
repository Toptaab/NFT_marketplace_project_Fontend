import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import truncateMiddle from "truncate-middle";

export const ProfileContext = createContext();

const status = {
  ME: "ME",
  FOLLOWER: "FOLLOWER",
  UNKHOWN: "UNKHOWN",
};

export default function ProfileContextProvider({ children }) {
  const [userObj, setUserObj] = useState(null);
  const { userId } = useParams();
  const accessToken = localStorage.getItem("accessToken");
  const [loading, setLoading] = useState(true);
  const [relationShip, setRelationship] = useState(status.UNKHOWN);
  const [me, setMe] = useState(null);
  const navigate = useNavigate()

  if(userId === "null"){return <Navigate to="/login" />}


  const authMe = async () => {
    try {
      setLoading(true);

      if (accessToken) {
        const me = await axios.get("/user", {
          headers: {
            Authorization: "Bearer" + " " + accessToken,
          },
        });

        setMe(me.data);
      }
      const user = await axios.get(`/user/${userId}`, {
        headers: {
          Authorization: "Bearer" + " " + accessToken,
        },
      });
      user.data.Wallets[0].walletAddress = truncateMiddle(
        user.data.Wallets[0].walletAddress,
        7,
        3,
        "..."
      );
      setUserObj(user.data);

      
    } catch (err) {
      console.log(err);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    authMe();
  }, []);

  return (
    <ProfileContext.Provider
      value={{ userObj, loading, relationShip, status, me }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
