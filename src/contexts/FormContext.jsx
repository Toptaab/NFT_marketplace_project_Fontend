import { createContext, useState } from "react";
import axios from "../config/axios";
import { useNavigate, useParams } from "react-router-dom";
export const FormContext = createContext();
import { toast } from "react-toastify";
import validateLogin from "../validator/validate-login";
import validateRegister from "../validator/validate-register";
import validateSetting from "../validator/validate-updateSetting";

export default function FormContextProvider({ children }) {
  const [input, setInput] = useState(null);
  const [error, setError] = useState({});
  const [image, setImage] = useState(null);
  const userId = localStorage.getItem('userId')
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loginApi = async (input) => {
    try {
      const validationError = validateLogin(input);
      if (validationError) {
        toast("Please Try Again", {
          position: "top-center",
        });
        return setError(validationError);
      }
      const response = await axios.post("/auth/login", {
        email: input.email,
        password: input.password,
      });

      toast("Welcome Home", {
        position: "top-center",
      });
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("userId", response.data.id);
      navigate("/home");
    } catch (err) {
      toast.error(err.response?.data.message);
      console.log(err);
    }
  };

  const registerApi = async (input) => {
    try {
      const validatationError = validateRegister(input);
      if (validatationError) {
        toast("You Almost There!!", {
          position: "top-center",
        });
        return setError(validatationError);
      }

      const response = await axios.post("/auth/register", {
        userName: input.userName,
        email: input.email,
        password: input.password,
        confirmPassword: input.confirmPassword,
      });
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("userId", response.data.id);

      toast("Welcome to your new journey", {
        position: "top-center",
      });
      navigate("/homepage");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  const updateUserApi = async (input) => {
    input?.email?.trim() === "" ? delete input.email : null;
    input?.userName?.trim() === "" ? delete input.userName : null;
    try {
      const validateError = validateSetting({password : input.password})
      if(validateError){
        toast.error("Please enter Password")
        return setError(validateError)
      }
      
      setLoading(true)
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        navigate("/login");
      }

      const response = await axios.patch(
        "/user",
        {
          email: input.email,
          password: input.password,
          userName: input.userName,
          bio: input.bio,
          twitterUrl: input.twitterUrl,
        },
        {
          headers: {
            Authorization: "Bearer" + " " + accessToken,
          },
        }
      );

      if (image) {
        const formData = new FormData();
        console.log("heres");
        formData.append("image", image)
        formData.append("password", input.password);

        const uploadImageResponse = await axios.patch("/user/image", formData, {
          headers: {
            Authorization: "Bearer" + " " + accessToken,
          },
        });
        console.log(uploadImageResponse.data);
      }


      
      navigate(`/profile/${userId}`);
      location.reload()
      setInput(null);
    } catch (err) {
      console.log();
      toast(err.response.data.message)
    }finally{
      setLoading(false)
      
    }
  };

  const registerHandler = (e) => {
    e.preventDefault();
    registerApi(input);
  };

  const changeHandler = (e) => {
    console.log(input);
    setError({});
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    loginApi(input);
  };

  const updateHandler = (e) => {
    if(!input){return setError({password: "Please enter password"})}
    e.preventDefault();
    updateUserApi(input);
  };
  const handleUploadImage = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <FormContext.Provider
      value={{
        changeHandler,
        registerHandler,
        input,
        loginHandler,
        updateHandler,
        error,
        handleUploadImage,
        loading,
        image,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
