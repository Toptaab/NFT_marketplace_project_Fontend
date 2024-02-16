import { createContext, useState } from "react";
import axios from "../config/axios";
import { useNavigate } from "react-router-dom";
export const FormContext = createContext();

export default function FormContextProvider({ children }) {
  const [input, setInput] = useState();
  const navigate = useNavigate();

  const loginApi = async (input) => {
    try {
      const response = await axios.post("/auth/login", {
        email: input.email,
        password: input.password
      });
      localStorage.setItem("accessToken", response.data.accessToken);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  const registerApi = async (input) => {
    console.log(input)
    try {
      const response = await axios.post("/auth/register", {
        userName:input.Username,
        email: input['Email Address'],
        password:input.Password,
        confirmPassword:input['Confirm Password']
      });
      localStorage.setItem("accessToken", response.data.accessToken);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };


  const registerHandler = async (e) => {
    e.preventDefault();
    registerApi(input)
  }



  const changeHandler = (e) => {
    console.log(input)
    setInput({ ...input, [e.target.name]: e.target.value });

  };

  const loginHandler = (e) => {
    e.preventDefault();
    loginApi(input);
  };

  return (
    <FormContext.Provider value={{ changeHandler, registerHandler,input, loginHandler }}>
      {children}
    </FormContext.Provider>
  );
}
