import { Navigate } from "react-router-dom"

function RedirectRoute({children}) {
const accessToken = localStorage.getItem("accessToken")

    return accessToken? <Navigate to="/homepage" /> :children
  
}

export default RedirectRoute