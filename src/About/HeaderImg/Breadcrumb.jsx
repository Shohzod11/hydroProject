import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Aos from 'aos'

import moduleName from './HeaderImg.module.css'
import 'aos/dist/aos.css'

export const Breadcrumb = ({ pageNameForTitle, pageName }) => {
    useEffect(() => {
        Aos.init();
    })

    return (
        <>
            <h1 data-aos="fade-up" data-aos-duration="1000" className={moduleName.title}>{pageNameForTitle}</h1>
            <div data-aos="fade-up" data-aos-duration="700" className={moduleName.breadcrumb}>
                <NavLink to={'/'}>Bosh menu </NavLink>
                <h3> {pageName}</h3>
            </div>
        </>
    )
}
