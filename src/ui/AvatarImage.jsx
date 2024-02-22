import React from 'react'

function AvatarImage({collectionImage,onClick}) {
  return (
    <div>
    <img src={collectionImage} alt="" className="w-[1.5rem] h-[1.5rem]  rounded-full object-cover" role='button' onClick={onClick} />
  </div>

  )
}

export default AvatarImage