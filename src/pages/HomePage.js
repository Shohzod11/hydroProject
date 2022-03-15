import React from 'react'
import WhyWeSec from '../components/Why_weSec'
import WhyWeSec2 from '../components/Why_weSec2'
import ExamplesSec from '../components/ExamplesSec'
import NewsSec from '../components/NewsSec'
import NumberSec from '../components/NumberSec'
import Contrubutors from '../components/Contrubutors'
import ContactSec from '../components/ContactSec'
import CarouselSec23 from '../components/CarouselSec'
import MobileNav1 from '../components/MobileNav1'

function homePage() {
    return (
        <div style={{overflow:"hidden"}}>
            <MobileNav1 />
            <CarouselSec23/>
            <WhyWeSec />
            <WhyWeSec2 />
            <ExamplesSec />
            <NewsSec />
            <NumberSec />
            <Contrubutors />
            <ContactSec />
        </div>
    )
}

export default homePage
