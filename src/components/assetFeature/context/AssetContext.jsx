import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const AssetContext = createContext();

export default function AssetContextProvider({ children }) {
  const navigate = useNavigate()
  const accessToken = localStorage.getItem("accessToken");
  const [loading, setLoading] = useState(true);
  const [asset, setAsset] = useState({});
  const { assetId } = useParams();
  const [existCollection, setExistCollection] = useState();
  const [input, setInput] = useState({});
  const [image, setImage] = useState(null);
  const [traitAttributes, setTraitAttributes] = useState([
    { name: "", traitId: "" },
  ]);



  const getNft = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/asset/${assetId}`);
      console.log(response.data);
      setAsset(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const getExistCollection = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/collection/createNft", {
        headers: {
          Authorization: "Bearer" + " " + accessToken,
        },
      });
      setExistCollection(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const createNft = async (input, traitAttributes) => {
    try {
      setLoading(true)
      const formData = new FormData();
      if (image) {
        formData.append("image", image);
      }

      const response = await axios.post(
        "/asset",
        {
          collectionId: +input.collectionId,
          name: input.name,
          tokenId: 1,
          TraitAttributes: traitAttributes,
        },
        {
          headers: {
            Authorization: "Bearer" + " " + accessToken,
          },
        }
      );

      const uploadImageRespose = await axios.patch(
        `/asset/${response.data.id}/image`,
        formData,
        {
          headers: {
            Authorization: "Bearer" + " " + accessToken,
          },
        }
      );
      
      console.log(uploadImageRespose.data)
      setLoading(false)
      navigate(`/asset/${response.data.id}`)

    } catch (err) {
      console.log(err);
    }
  };

  const handleUploadImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleTraitChange = (e, index, traitId) => {
    let newTraitAttributes;
    !traitAttributes[index]
      ? (newTraitAttributes = [...traitAttributes, { name: "", traitId: "" }])
      : (newTraitAttributes = [...traitAttributes]);

    console.log(newTraitAttributes);

    newTraitAttributes[index].name = e.target.value;
    newTraitAttributes[index].traitId = traitId;

    setTraitAttributes(newTraitAttributes);
  };

  const handleSummit = (e) => {
    e.preventDefault();

    createNft(input, traitAttributes);
  };

  useEffect(() => {
    if (assetId) {
      getNft();
    } else {
      getExistCollection();
    }
  }, []);

  return (
    <AssetContext.Provider
      value={{
        image,
        handleUploadImage,
        handleTraitChange,
        input,
        asset,
        loading,
        existCollection,
        handleSummit,
        handleChangeInput,
      }}
    >
      {children}
    </AssetContext.Provider>
  );
}
