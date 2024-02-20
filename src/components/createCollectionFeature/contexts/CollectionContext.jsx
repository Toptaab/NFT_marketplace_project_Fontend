import { createContext, useState } from "react";


export const CollectionContext = createContext()

export default function CollectionContextProvider ({children}) {
  const [openModal , setOpenModal] = useState(false)


  const handelModal = () => {
    console.log(openModal)
    setOpenModal(!openModal)
  }


  return <CollectionContext.Provider value={{handelModal,openModal}}>{children}</CollectionContext.Provider>
}