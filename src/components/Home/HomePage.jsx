import React from 'react'

import HeroSection from './HeroSection'
import iphone from '../../assets/iphone-14-pro.webp'
import mac from '../../assets/mac-system-cut.jfif'
import FeaturedProducts from './FeaturedProducts'

const HomePage = () => {
  return (
    <div>
     <HeroSection title="Buy iphone 14 Pro" subtitle="Experience the power of the latest iphone 14 with our most pro camera ever." link="/products/6732ca613225b58fa4523eb9"  image={iphone}/>
     <FeaturedProducts/>
     <HeroSection title="Build the ultimate setup" subtitle="You can add Studio Display and colour-matched magic accessories to your bag after you configure your Mac Mini." link="/products/6732ca613225b58fa4523ec1"  image={mac}/>
    </div>
  )
}

export default HomePage