import { useContext } from 'react'
import {ProfileContext} from '../context/ProfileContext'

function useProfileContext() {
  return (
    useContext(ProfileContext)
  )
}

export default useProfileContext