import { createContext, useState } from "react";
import axios from "../config/axios";
import { useNavigate } from "react-router-dom";
export const FormContext = createContext();
import { toast } from "react-toastify";
import validateLogin from "../validator/validate-login";
import validateRegister from "../validator/validate-register";


export default function FormContextProvider({ children }) {
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
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
      const validatationError = validateRegister(input)
      if(validatationError){
        toast("You Almost There!!", {
          position: "top-center",
        });
        return setError(validatationError)
      }

      const response = await axios.post("/auth/register", {
        userName:input.userName,
        email:input.email,
        password:input.password,
        confirmPassword:input.confirmPassword,
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
    input.email?.trim() === "" ? delete input.email : null;
    input.userName?.trim() === "" ? delete input.userName : null;
    try {
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
      setInput(null);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    registerApi(input);
  };

  const changeHandler = (e) => {
    // console.log(input);
    setError({});
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    loginApi(input);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    updateUserApi(input);
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
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
