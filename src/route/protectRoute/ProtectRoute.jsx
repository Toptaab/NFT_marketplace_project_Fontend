import { Navigate } from "react-router-dom"

function ProtectRoute({children}) {
const accessToken = localStorage.getItem("accessToken")

    return accessToken? children : <Navigate to="/homepage" /> 
  
}

export default ProtectRoute