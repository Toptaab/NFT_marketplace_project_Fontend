import React from 'react'
import ProfileContainer from '../components/profileFeature/ProfileContainer'
import ProfileContextProvider from '../components/profileFeature/context/ProfileContext'

function ProfilePage() {
  return (
    <div className='w-dvw'>
      <ProfileContextProvider>
        <ProfileContainer/>
      </ProfileContextProvider>
    </div>
  )
}

export default ProfilePage