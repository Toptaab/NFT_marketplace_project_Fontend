import { useContext } from "react";
import { CreateAssetContext } from "../context/CreateAssetContext";

export default function useCreateAssetContext (){
    return useContext(CreateAssetContext)
}