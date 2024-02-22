import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export const CreateAssetContext = createContext();

export default function CreateAssetContextProvider({ children }) {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState({});

  const [image, setImage] = useState(null);
  const [existCollection, setExistCollection] = useState();
  const [traitAttributes, setTraitAttributes] = useState([
    { name: "", traitId: "" },
  ]);


  if(!accessToken){return <Navigate to="/login" />}

  const getExistCollection = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/collection/createNft", {
        headers: {
          Authorization: "Bearer" + " " + accessToken,
        },
      });
      setExistCollection(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const createNft = async (input, traitAttributes) => {
    try {
      setLoading(true);
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

      console.log(uploadImageRespose.data);
      navigate(`/asset/${response.data.id}`);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
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
    getExistCollection();
  }, []);

  return (
    <CreateAssetContext.Provider
      value={{
        handleUploadImage,
        loading,
        existCollection,
        handleSummit,
        input,
        handleChangeInput,
        handleTraitChange,
        image,
      }}
    >
      {children}
    </CreateAssetContext.Provider>
  );
}
