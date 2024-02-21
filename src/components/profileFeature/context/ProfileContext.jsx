import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import truncateMiddle from "truncate-middle";

export const ProfileContext = createContext();

const status = {
  ME : "ME",
  FOLLOWER : "FOLLOWER",
  UNKHOWN : "UNKHOWN"
}

export default function ProfileContextProvider({ children }) {
  const [userObj, setUserObj] = useState(null);
  const { userId } = useParams();
  const accessToken = localStorage.getItem("accessToken");
  const [loading, setLoading] = useState(true);
  const [relationShip, setRelationship] = useState(status.UNKHOWN);
  const [me, setMe] = useState(null);

 

  const authMe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/user", {
        headers: {
          Authorization: "Bearer" + " " + accessToken,
        },
      });

      setMe(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const authTargetUser = async () => {
    try {
      const response = await axios.get(`/user/${userId}`, {
        headers: {
          Authorization: "Bearer" + " " + accessToken,
        },
      });
      response.data.Wallets[0].walletAddress = truncateMiddle(
        response.data.Wallets[0].walletAddress,
        7,
        3,
        "..."
      );
      setUserObj(response.data);

      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    authMe();
    authTargetUser();
  }, []);

  useEffect(() => {
    if (userObj && me) {
      checkRelationship(userObj, me);
    }
  }, [me, userObj]);

  const checkRelationship = (target, me) => {
    if(target.id === me.id){ setRelationship(status.ME); setLoading(false); return}

    target.Relationship.find((value) =>
      value.followerId === me.id ? setRelationship(status.FOLLOWER)  : null
    )
    setLoading(false);
  }



  return (
    <ProfileContext.Provider value={{ userObj, loading, relationShip ,status}}>
      {children}
    </ProfileContext.Provider>
  );
}
