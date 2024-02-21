import { createContext } from "react";


export const CollectionContext = createContext()

export default function CollectionContextProvider({children}) {




    return <CollectionContext.Provider value={{}}>{children}</CollectionContext.Provider>
}