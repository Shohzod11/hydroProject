import React, { useEffect } from 'react'
import AOS from 'aos'

import our_team from './picture/our_team.jpg'

import moduleName from './MainBlock.module.css'
import 'aos/dist/aos.css'

export const MainBlock = () => {

    useEffect(() => {
        AOS.init()
    })

    return (
        <div className={moduleName.body}>
            <div className={moduleName.titleTextBody}>
                <h1 data-aos="fade-down" data-aos-duration="1000" className={moduleName.titleText}>Biz haqimizda</h1>
            </div>
            <div data-aos="fade-down" data-aos-duration="1000" className={moduleName.title}>
                <img src={our_team} alt="" />
            </div>
            <div data-aos="fade-down" data-aos-duration="1000" className={moduleName.text}>
                Brennan is a Construction, Environmental Services, and Harbor Management company focused on providing quality services to both public and private owners of civil infrastructure. Our focus on safety and quality is unmatched in our industries, and our ability to innovate has enabled us to exceed expectations and routinely deliver greater value to our clients.
                At Brennan, we believe we truly have a special culture in which the safety and well-being of our people is our primary focus. Developed and refined over the course of nearly 100 years, it is what makes Brennan a great place to work.  For more information on J.F. Brennan Company and Brennan Marine, download our Corporate Brochure here!
                We are proud of the culture we have created. We function as a winning team in which each individual is provided the tools and support he or she needs to succeed. We have defined this culture as the “Brennan Way” and have detailed each core value so that it is understood and embraced in everything that we do.
            </div>
        </div>
    )
}

