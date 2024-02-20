import React from 'react'

function AvatarImage({collectionImage}) {
  return (
    <div>
    <img src={collectionImage} alt="" className="w-[1.5rem] h-[1.5rem]  rounded-full object-cover" />
  </div>

  )
}

export default AvatarImage