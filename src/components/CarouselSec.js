// import React from 'react';
// import {Carousel , Button} from 'react-bootstrap'


// import { NavLink } from 'react-router-dom';
// const CarouselSec = () => {
//     return (
//         <div className='carousel_sec'>
//             <Carousel indicators={false} autoPlay={false} fade>
//                 <Carousel.Item>
//                     <img
//                     className="d-block w-100"
//                     src={heroImage2}
//                     alt="Second slide"
//                     />

//                     <Carousel.Caption className='titleCarousel'>
//                         <div className='block'>
//                                <h2 >Industry - Leading Capabilities</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet,  amet, consectetur adipiscing elit</p>
//                     <div className='wrapper'>
//                         <NavLink to="/contact"> <Button >Biz bilan bog'lanish</Button></NavLink>
                            
//                     </div>
               
//                         </div>
                 
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                     className="d-block w-100"
//                     src={heroImage1}
//                     alt="Second slide"
//                     />

//                     <Carousel.Caption className='titleCarousel'>
//                         <div className='block'>
//                                <h2 >Industry - Leading Capabilities</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet,  amet, consectetur adipiscing elit</p>
//                     <div className='wrapper'>
//                         <NavLink to="/contact"> <Button >Biz bilan bog'lanish</Button></NavLink>
                            
//                     </div>
               
//                         </div>
                 
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                     className="d-block w-100"
//                     src={heroImage2}
//                     alt="Second slide"
//                     />

//                     <Carousel.Caption className='titleCarousel'>
//                         <div className='block'>
//                                <h2 >Industry - Leading Capabilities</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet,  amet, consectetur adipiscing elit</p>
//                     <div className='wrapper'>
//                         <NavLink to="/contact"> <Button >Biz bilan bog'lanish</Button></NavLink>
                            
//                     </div>
               
//                         </div>
                 
//                     </Carousel.Caption>
//                 </Carousel.Item>
                
//                 </Carousel> 
//             </div>
//     )
// }

// export default CarouselSec
import React, { useEffect } from 'react';
import heroImage1 from '../assets/1.png'
import './CarouelSec.scss'
import heroImage2 from '../assets/2.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const CarouselSec34 = () => {
  useEffect(() => {
    AOS.init();
})
  const map2=[
    {url:"/activitiesPage/activities", name:"Faoliyatlar", img:heroImage1},
    {url:"/korporativ", name:"Korporativ qo'mita", img:heroImage2},
    {url:"/news", name:"Yangiliklar", img:heroImage1},
    {url:"/texnika", name:"Texnik imkoniyatlar", img:heroImage2},
    {url:"/iqtisodiy", name:"Iqtisodiy ko'rsatkichlar", img:heroImage1},
    {url:"/about", name:"Biz haqimizda", img:heroImage2},
    {url:"/contact", name:"Bog'lanish", img:heroImage1}
  ]
  const map3=map2.map(a=> <div key={a.url}>
    <div className='carouselposition' >
      <div className='carouselpositionBlock'>
        <div style={{width:"100%"}}>
          <h1    >{a.name}</h1>
        </div>
         
       <NavLink to={a.url} className="carouselpositionlINK">Ko`proq ko`rish</NavLink>
      </div>
     
     
    </div>
       <img src={a.img}/>
     
    </div>)
    return (
    <div className='carouselwrapper'>   
          
            <span>
        <Carousel className='carouselwrapper3'
                autoPlay={true}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                transitionTime={800}
                infiniteLoop={true}
                stopOnHover={false}
                autoPlay={3000}
                axis='vertical'
            >
            {map3}
            </Carousel>
            </span>
            
    </div>
    )
};
export default CarouselSec34;