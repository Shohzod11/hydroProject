import React, { useEffect } from 'react'
import { Image } from 'antd'
import AOS from 'aos'

import { NumberSec } from './NumberSec'
import woman from './picture/woman.png'
import girl from './picture/girl.png'
import man from './picture/man.png'

import moduleName from './WhyWe.module.css'

export const WhyWe = () => {

    useEffect(() => {
        AOS.init({
            once: true
        });
    })

    return (
        <div className={moduleName.body}>
            <div className={moduleName.imgBox}>
                <div className={moduleName.pictures}>
                    <img src={man} data-aos="fade-down" data-aos-duration="1000" className={moduleName.man} />
                    <img src={girl} data-aos="fade-down" data-aos-duration="1200" className={moduleName.girl} />
                </div>
                <img src={woman} data-aos="fade-down" data-aos-duration="1100" className={moduleName.woman} />
            </div>
            <div className={moduleName.textBox}>
                <h1 className={moduleName.title} data-aos="fade-down" data-aos-duration="1000" >Nega biz?</h1>
                <p data-aos="fade-down" data-aos-duration="1300" >
                    Nearly everything we do takes place around the water, and as a result we have the right people, equipment, and programs necessary to mitigate associated risks.
                    Brennan’s world-class safety program is specifically designed to address the risks found in the inland marine, heavy construction, and environmental remediation industries. This program lays the groundwork for our safety culture by looking forward, not backward, to define corporate guidelines and empower the individual. Extensive training, regular meetings and heavy investment in new safety equipment are just a few of the areas on which we focus.
                    Our groundbreaking Safety Based Observation Program (SBO) collects hundreds of observations from all of our project sites and statistically analyzes potential risks so they can be corrected BEFORE an incident occurs. This program is a driving factor for our exceptional Experience Modification Rating (EMR), low Incident Rates, and other safety measurements that are industry leading in all of our respective markets.
                </p>
                <div className={moduleName.NumberSec} data-aos="fade-down" data-aos-duration="1500" >
                    <NumberSec />
                </div>
            </div>
        </div>
    )
}