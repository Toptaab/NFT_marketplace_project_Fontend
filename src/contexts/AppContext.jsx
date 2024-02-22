import { createContext } from "react";

const AppContext = createContext()

export default function AppContextProvider({children}){

    

    return <AppContext.Provider>{children}</AppContext.Provider>
}