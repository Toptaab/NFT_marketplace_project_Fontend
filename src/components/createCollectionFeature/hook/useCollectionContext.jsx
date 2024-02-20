import { useContext } from "react";
import { CollectionContext } from "../contexts/CollectionContext";

export default function useCollectionContext (){
    return useContext(CollectionContext)
}