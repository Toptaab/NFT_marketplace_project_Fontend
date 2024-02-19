import React from 'react'

function ProfileAvatarBig({image}) {
  return (
    <img className="w-[3rem] h-[3rem]  rounded-full object-cover" src={image} alt="" />
  )
}

export default ProfileAvatarBig