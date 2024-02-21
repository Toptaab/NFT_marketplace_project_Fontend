import React from 'react'
import CollectionHeader from './CollectionHeader'
import CollcectionCardlist from './CollcectionCardlist'

function CollectionContainer() {
  return (
    <div className='w-full flex flex-col gap-[2rem] p-[3rem]'>
    <CollectionHeader />
    <CollcectionCardlist />
    </div>
  )
}

export default CollectionContainer