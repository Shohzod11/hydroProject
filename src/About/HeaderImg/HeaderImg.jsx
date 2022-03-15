import React, { useEffect } from 'react'
import AOS from 'aos'

import { Breadcrumb } from './Breadcrumb'

import moduleName from './HeaderImg.module.css'
import 'aos/dist/aos.css'


export const HeaderImg=()=> {

    useEffect(() => {
        AOS.init()
    })

    return (
        <>
           <div className={moduleName.body}>
                <Breadcrumb pageName={'/ Biz haqimizda'} pageNameForTitle={'Biz haqimizda'}/> 
            </div>
        </>
    )
}

