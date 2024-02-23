import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validateCreateCollection from "../../../validator/validate-createCollection";

export const CreateCollectionContext = createContext();

export default function CollectionContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState(null);
  const [traits, settraits] = useState([null]);
  const [image, setImage] = useState();
  const accessToken = localStorage.getItem("accessToken");
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const createCollectionApi = async (input, traits) => {
    try {
      setLoading(true);
      const validateError = validateCreateCollection(input);
      if (validateError) {
        toast(Object.values(validateError)[0]);
        return setError(validateError);
      }

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

          const uploadImageResponse = await axios.patch(
            `/collection/${response.data.id}/image`,
            formData,
            {
              headers: {
                Authorization: "Bearer" + " " + accessToken,
              },
            }
          );
          console.log(uploadImageResponse.data);
        }

        console.log(response.data);
        navigate(`/collection/${response.data.id}`);
      }
    } catch (err) {
      console.log(err);
      toast(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const traitsHandleChange = (index, value) => {
    const newTraitsArray = [...traits];
    newTraitsArray[index].name = value;
    settraits(newTraitsArray);

    if (index === traits.length - 1 && value.trim() !== "") {
      settraits([...newTraitsArray, {}]);
    }

    if (index === traits.length - 2 && value.trim() === "") {
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
    setImage(null);
    setInput({});
  };

  const handleUploadImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSummit = (e) => {
    if (!image) {
      return toast("Select Some Picture" );
    }
    console.log(Object.values(input).length > 0);
    if (!Object.values(input).length > 0) {
      return toast("please enter Something!!");
    }
    e.preventDefault();
    createCollectionApi(input, traits);
  };

  return (
    <CreateCollectionContext.Provider
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
        loading,
      }}
    >
      {children}
    </CreateCollectionContext.Provider>
  );
}
