import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const AssetContext = createContext();

export default function AssetContextProvider({ children }) {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const [loading, setLoading] = useState(true);
  const [asset, setAsset] = useState({});
  const { assetId } = useParams();
  const [input, setInput] = useState({});
  const [me, setMe] = useState(null);

  const getNft = async () => {
    try {
      setLoading(true);
      const asset = await axios.get(`/asset/${assetId}`);
      setAsset(asset.data);

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

  const putOnSaleApi = async ({ price }) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `/asset/${assetId}`,
        {
          price,
        },
        {
          headers: {
            Authorization: "Bearer" + " " + accessToken,
          },
        }
      );


      toast("Salse Success!!")
      console.log(response);
    } catch (err) {
      console.log(err);
    } finally {
      location.reload();
    }
  };

  const updatePriceApi = async ({ price }) => {
    try {
      setLoading(true);

      const response = await axios.patch(
        `/asset/${assetId}/update`,
        {
          price,
        },
        {
          headers: {
            Authorization: "Bearer" + " " + accessToken,
          },
        }
      );


      toast("Update Success!!")
      console.log(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      location.reload();
    }
  };

  const cancelSaleNftApi = async () => {
    try {
      setLoading(true);
      const response = await axios.delete(`/asset/${assetId}/cancel`, {
        headers: {
          Authorization: "Bearer" + " " + accessToken,
        },
      });


      toast("Update Success")
      console.log(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      location.reload();
    }
  };

  const buyNftApi = async () => {
    try {
      setLoading(true);
      toast("Buying....")

      console.log(accessToken);
      const response = await axios.get(`/asset/${assetId}/buy`, {
        headers: {
          Authorization: "Bearer" + " " + accessToken,
        },
      });


      
      console.log(response.data);
    } catch (err) {
      toast("Buy false!!")
      console.log(err);
    }finally{
      location.reload()
    }
  };

  const handleChangeInput = (e) => {
    console.log(input);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const putOnSaleHandle = () => {
    putOnSaleApi(input);
  };

  const updatePriceHandler = () => {
    updatePriceApi(input);
  };

  const cancelSaleNftHandler = () => {
    cancelSaleNftApi();
  };

  const buyNftHandler = () => {
    if(!accessToken){return toast("Please login")}
    buyNftApi();
  };

  useEffect(() => {
    getNft();
  }, []);

  return (
    <AssetContext.Provider
      value={{
        input,
        asset,
        loading,
        handleChangeInput,
        me,
        putOnSaleHandle,
        updatePriceHandler,
        cancelSaleNftHandler,
        buyNftHandler,
      }}
    >
      {children}
    </AssetContext.Provider>
  );
}
