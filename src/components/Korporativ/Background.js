import React, { useEffect } from 'react';
import './BgStyle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Background() {

    useEffect(() => {
        AOS.init();
    })

    return (
        <>
           <div className='background'>
                <h1 data-aos="fade-up" data-aos-duration="1000">Korparativ qo'mita</h1>
                <p data-aos="fade-up" data-aos-duration="700">Bosh sahifa <span>/ Korparativ qo'mita</span></p>
            </div>
        </>
    )
}

export default Background;
