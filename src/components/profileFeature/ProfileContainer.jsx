import React from 'react'
import CardList from '../CardList'
import ProfileHeader from '../ProfileHeader'

function ProfileContainer() {
  return (
    <div className='w-full flex flex-col gap-[2rem] p-[3rem]'>
        <div>
            <ProfileHeader/>
        </div>
        <div>
            <CardList />
        </div>
    </div>
  )
}

export default ProfileContainer