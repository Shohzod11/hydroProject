import React from 'react'
import BackgroundImg from '../components/Iqtisodiy/BackgroundImg'
import Cards from '../components/Iqtisodiy/Cards'
import Chart from '../components/Iqtisodiy/Chart'
import OchiqMalumotlar from '../components/Iqtisodiy/OchiqMalumotlar'
import Shartnomalar from '../components/Iqtisodiy/Shartnomalar'
import MobileNav1 from '../components/MobileNav1'


function Iqtisodiy() {
    return (
        <>
         <MobileNav1 />
          <BackgroundImg />  
          <Chart />
          <OchiqMalumotlar />
          <Shartnomalar />
          <Cards />
        </>
    )
}

export default Iqtisodiy
