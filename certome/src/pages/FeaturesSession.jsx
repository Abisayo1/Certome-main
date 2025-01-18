import React from 'react'
import FeaturesSessionHeader from '../components/Sections/FeaturesSessionHeader'
import FeaturesSessionSection2 from '../components/Sections/FeaturesSessionSection2'
import FeaturesSessionSection3 from '../components/Sections/FeaturesSession3'

const FeaturesSession = () => {
  return (
    <div className='container'>
      <FeaturesSessionHeader />
      <FeaturesSessionSection2/>
      <FeaturesSessionSection3/>
    </div>
  )
}

export default FeaturesSession