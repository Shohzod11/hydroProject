import React, { useEffect } from 'react'
import { Image } from 'antd'
import AOS from 'aos'

import open from './picture/openQuotationMark.png'
import close from './picture/closeQuotationMark.png'
import block from './picture/Block.png'
import main from './picture/Main.png'

import moduleName from './Meeting.module.css'
import 'aos/dist/aos.css'

export const Meeting = () => {

    useEffect(() => {
        AOS.init();
    })

    return (
        <div className={moduleName.body}>
            <img data-aos="fade-down" data-aos-duration="700" className={moduleName.mainImg} src={main} alt="" />
            <div className={moduleName.box_group}>
                <div data-aos="fade-down" data-aos-duration="700" className={moduleName.textBox}>
                    {/* <img className={moduleName.openImg} src={open} alt="" /> */}
                    <br />
                    <h1 className={moduleName.title}>
                        "Our focus on safety and quality is unmatched in our industries"
                    </h1><br />
                    {/* <img className={moduleName.closeImg} src={close} alt="" /> */}
                </div>
                <div data-aos="fade-down" data-aos-duration="700" className={moduleName.imgBox}>
                    {/* <Image src={block} alt=""/> */}
                    <img src={block} alt="" />
                </div>
            </div>
        </div>
    )
}
