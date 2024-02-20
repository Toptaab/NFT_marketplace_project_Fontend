import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";

export default function useHomeContext () {
    return useContext(HomeContext)
}