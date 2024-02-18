import { createContext, useState } from "react";
import axios from "../config/axios";
import { useNavigate } from "react-router-dom";
export const FormContext = createContext();

export default function FormContextProvider({ children }) {
  const [input, setInput] = useState(null);
  const navigate = useNavigate();

  const loginApi = async ({email,password}) => {
    try {
      const response = await axios.post("/auth/login", {
        email,password
      });
      localStorage.setItem("accessToken", response.data.accessToken);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  const registerApi = async ({userName,email,password,confirmPassword}) => {
    try {
      const response = await axios.post("/auth/register", {
        userName,email,password,confirmPassword
      });
      localStorage.setItem("accessToken", response.data.accessToken);
      navigate("/homepage");
    } catch (err) {
      console.log(err);
    }
  };

  const updateUserApi = async (input ) => {
    input.email?.trim() === "" ? delete input.email : null
    input.userName?.trim() === "" ? delete input.userName : null
    try {
      const accessToken = localStorage.getItem("accessToken")
      if(!accessToken){navigate("/login")}
      const response = await axios.patch('/user',{
        email: input.email,
        password: input.password,
        userName: input.userName ,
        bio : input.bio,
        twitterUrl: input.twitterUrl
      },{
        headers:{
          Authorization: "Bearer" + " " +  accessToken
        }
      })
      setInput(null)
      navigate('/profile')


    } catch (err) {
      console.log(err);

    }
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    registerApi(input);
  };

  const changeHandler = (e) => {
    console.log(input);
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
      value={{ changeHandler, registerHandler, input, loginHandler,updateHandler }}
    >
      {children}
    </FormContext.Provider>
  );
}
