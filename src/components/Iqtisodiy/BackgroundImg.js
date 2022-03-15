import React, { useEffect } from 'react';
import AOS from 'aos'
import './BackgroundImg.css'


function BackgroundImg() {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className='iqtisodiy_background'>
            <div className='wrapper'>
            <h1 data-aos="fade-up" data-aos-duration="1000">Iqtisodiy ko'rsatgichlar</h1> 
            <p data-aos="fade-up" data-aos-duration="700"><a href="/">Bosh menu </a><span>/ Iqtisodiy ko'rsatgichlar</span></p>  
            </div>         
            
        </div>
    )
}

export default BackgroundImg;
