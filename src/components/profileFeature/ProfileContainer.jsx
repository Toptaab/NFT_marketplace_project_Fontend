import React from 'react'
import CardList from '../CardList'
import ProfileHeader from '../ProfileHeader'
import useProfileContext from './hook/userProfileContext';
import Spinner from '../../ui/Spinner';
import UserCardList from './UserCardList';



function ProfileContainer() {
  const { userObj, loading,relationShip ,status } = useProfileContext();


  if(loading){
    return <Spinner />
  }

  return (
    <div className='w-full flex flex-col gap-[2rem] p-[3rem]'>
        <div>
            <ProfileHeader userObj={userObj} relationShip={relationShip} status={status} />
        </div>
        <div>
            {/* <CardList name="My Assets" arrayCollection={userObj?.Collections}/> */}
            <UserCardList userObj={userObj}/>
        </div>
    </div>
  )
}

export default ProfileContainer