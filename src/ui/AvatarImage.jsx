import React from 'react'

function AvatarImage({creatorImage}) {
  return (
    <div>
    <img src={creatorImage} alt="" className="w-[1.5rem] h-[1.5rem]  rounded-full object-cover" />
  </div>

  )
}

export default AvatarImage