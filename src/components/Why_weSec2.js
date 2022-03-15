import React, { useEffect } from 'react';
import './Why_weSec2.scss'
import Builderss from '../assets/builders.png'
import './Why_weSec2.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Why_weSec2() {
    useEffect(() => {
        AOS.init();
 })
    return (
        <div className='why_weSec2' data-aos="fade-up" data-aos-duration="1000" >
            <div className='row'>
                <div className='left_box'>
                    <img className='nimadr' src={ Builderss } alt="rasm bor edi" />
                </div>
                <div className='right_box'>
                    <h1>Nima uchun biz?</h1>
                    <p className='glitch' data-glitch="Explore">
                    Hydro's commitment to safety, while consistently providing high-quality results to our clients, has allowed us to satisfy customers for more than 39 years.  
                    Our track record speaks for itself with  years of successful hands-on experience in developing, scheduling, managing, and executing projects for the U.S. government and private owners.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Why_weSec2
