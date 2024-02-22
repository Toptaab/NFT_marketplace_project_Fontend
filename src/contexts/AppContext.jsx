import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const accessToken = localStorage.getItem("accessToken");
  const [loading, setLoading] = useState(true);
  const [me, setMe] = useState();
  const navigate = useNavigate()

  const getMe = async () => {
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
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const logoutHandler = () => {
    setMe(null)
    localStorage.clear()
    navigate('/login')
  }

  useEffect(() => {
    if(accessToken){getMe()};
  }, [accessToken]);

  return <AppContext.Provider value={{ me,loading,logoutHandler }}>{children}</AppContext.Provider>;
}
