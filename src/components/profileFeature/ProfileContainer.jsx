import React from 'react'
import CardList from '../CardList'
import ProfileHeader from '../ProfileHeader'
import useProfileContext from './hook/userProfileContext';
import Spinner from '../../ui/Spinner';



function ProfileContainer() {
  const { userObj, loading } = useProfileContext();


  if(loading){
    return <Spinner />
  }

  return (
    <div className='w-full flex flex-col gap-[2rem] p-[3rem]'>
        <div>

            <ProfileHeader userObj={userObj}/>
        </div>
        <div>
            <CardList arrayCollection={userObj.Collections}/>
        </div>
    </div>
  )
}

export default ProfileContainer