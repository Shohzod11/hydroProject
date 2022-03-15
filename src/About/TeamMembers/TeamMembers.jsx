import React, { useEffect } from 'react'

import { Worker } from './Worker/Worker'
import { Veterans } from './Veterans/Veterans'
import { Leadership } from './Leadership/Leadership'

import moduleName from './TeamMembers.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'


export const TeamMembers = () => {

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className={moduleName.body}>
            <h1 data-aos="fade-down" data-aos-duration="200" className={moduleName.title}>Boshqaruv tuzilmasi</h1>
            <Leadership />
            <Worker />
            <Veterans />
        </div>
    )
}
