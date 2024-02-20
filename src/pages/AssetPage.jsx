import React from 'react'
import AssetContainer from '../components/assetFeature/AssetContainer'
import AssetContextProvider from '../components/assetFeature/context/AssetContext'

function AssetPage() {
  return (
    <div className='w-dvw'>
      <AssetContextProvider>
        <AssetContainer />
      </AssetContextProvider>
    </div>
  )
}

export default AssetPage