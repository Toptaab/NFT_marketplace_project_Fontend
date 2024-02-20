import { useContext } from "react";
import { AssetContext } from "../context/AssetContext";


export default function useAssetContext () {
    return useContext(AssetContext)
}