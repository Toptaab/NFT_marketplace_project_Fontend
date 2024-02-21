import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CollectionContext = createContext();

export default function CollectionContextProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState({});
  const [traits, settraits] = useState([{}]);
  const [image, setImage] = useState();
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  

  const createCollectionApi = async (input, traits) => {
    try {
      const Traits = traits.slice(0, traits.length - 1);
      const formData = new FormData();
      if (openModal) {
        console.log(input);
        const response = await axios.post(
          "/collection",
          {
            name: input.name,
            price: input.price,
            chainId: input.chainId,
            categoryId: input.categoryId,
            Traits,
          },
          {
            headers: {
              Authorization: "Bearer" + " " + accessToken,
            },
          }
        );
        if (image) {
          formData.append("image", image);
        }
        const uploadImageResponse = await axios.patch(
          `/collection/${response.data.id}/image`,
          formData,
          {
            headers: {
              Authorization: "Bearer" + " " + accessToken,
            },
          }
        );
        console.log(uploadImageResponse.data)
      }



    } catch (err) {
      console.log(err);
    }
  };

  const traitsHandleChange = (index, value) => {
    const newTraitsArray = [...traits];
    newTraitsArray[index].name = value;
    settraits(newTraitsArray);

    if (index === traits.length - 1 && value.trim() !== "") {
      settraits([...newTraitsArray, {}]);
    }

    if (index === traits.length -2 && value.trim() === "" ){
      settraits(traits.slice(0, traits.length - 1));
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const handelModal = () => {
    setOpenModal(!openModal);
    settraits([{}]);
    setImage(null)
    setInput({})
  };

  const handleUploadImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSummit = (e) => {
    e.preventDefault();
    createCollectionApi(input, traits);
  };

  return (
    <CollectionContext.Provider
      value={{
        handelModal,
        openModal,
        traits,
        traitsHandleChange,
        handelModal,
        handleChangeInput,
        image,
        handleUploadImage,
        handleSummit,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
}
