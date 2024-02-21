import { useContext } from "react"
import {CollectionContext} from '../context/CollectionContext'

export default function useCollectionContext () {
    return useContext(CollectionContext)
}