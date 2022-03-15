import React, { useEffect } from 'react'
import AOS from 'aos'

import mian from './picture/main.png'

import moduleName from './Training.module.css'
import 'aos/dist/aos.css'

export const Training = () => {

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className={moduleName.body}>
            <h1 data-aos="fade-down" data-aos-duration="200">Missiya</h1>
            <p data-aos="fade-down" data-aos-duration="500">Brennan’s world-class safety program is specifically designed to address the risks found in the inland marine, heavy construction, and environmental remediation industries. This program lays the groundwork for our safety culture by looking forward, not backward, to define corporate guidelines and empower the individual. Extensive training, regular meetings and heavy investment in new safety equipment are just a few of the areas on which we focus. </p>
            <div className={moduleName.pictures}>
                    <img src={mian} alt="" data-aos="fade-down" data-aos-duration="1000"/>
            </div>
        </div>
    )
}
