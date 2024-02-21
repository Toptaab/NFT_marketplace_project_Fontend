import { useContext } from "react";
import { CreateCollectionContext } from "../contexts/CreateCollectionContext";

export default function useCreateCollectionContext (){
    return useContext(CreateCollectionContext)
}