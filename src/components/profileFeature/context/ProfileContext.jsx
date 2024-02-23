import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import truncateMiddle from "truncate-middle";
import { toast } from "react-toastify";

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
  const [depositeOpen, setDepositeOpen] = useState(false);
  const [input, setInput] = useState();

  const navigate = useNavigate();

  if (userId === "null") {
    return <Navigate to="/login" />;
  }

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

      if (user.data.Wallets.length > 0) {
        user.data.Wallets[0].walletAddress = truncateMiddle(
          user.data.Wallets[0].walletAddress,
          7,
          3,
          "..."
        );
      }

      setUserObj(user.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const connectWalletApi = async () => {
    try {
      setLoading(true);
      const walletAddress = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (!walletAddress[0]) {
        toast.error("Connect false");
      }
      console.log(walletAddress);

      const response = await axios.post(
        "/user/wallet",
        {
          walletAddress: walletAddress[0],
        },
        {
          headers: {
            Authorization: "Bearer" + " " + accessToken,
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      location.reload();
    }
  };

  const addBalanceApi = async (input) => {
    try {
      setLoading(true)
      const response = await axios.patch(
        `/user/add`,
        {
          balance: input.balance,
        },
        {
          headers: {
            Authorization: "Bearer" + " " + accessToken,
          },
        }
      );

      console.log(response.data);
    } catch (err) {
      console.log(err);
      
    }finally{
      setLoading(false)
      location.reload()
    }
  };

  const bidingWallethandler = () => {
    connectWalletApi();
  };

  const addBalanceHandler = () => {
    addBalanceApi(input);
    setDepositeOpen(!depositeOpen)
  };

  const changeHandler = (e) => {
    console.log(input);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    authMe();
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        input,
        changeHandler,
        userObj,
        loading,
        relationShip,
        status,
        me,
        bidingWallethandler,
        setDepositeOpen,
        depositeOpen,
        addBalanceHandler,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
