import { React, useEffect } from 'react'

import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

import moduleName from './Helpers.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Breadcrumb } from './../HeaderImg/Breadcrumb';

export function NumberSecBox({ end, name }) {
    return <div className={moduleName.count + " " + 'col1'}>
        <h4 className={moduleName.number}>
            <CountUp start={1} end={end} duration={0.7}>
                {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall >
                        <span ref={countUpRef} />
                    </VisibilitySensor>
                )}
            </CountUp>
        </h4>
        <h5 className={moduleName.name}>{name}</h5>
    </div>
}

export const TeamMembersBox = ({ picture, name_surname, role, aos }) => {
    useEffect(() => {
        AOS.init()
    })

    return <>
        <div data-aos="fade-down" data-aos-duration={aos} className={moduleName.box}>
            <img className={moduleName.picture} src={picture} alt="" />
            <h1 className={moduleName.name_surname}>{name_surname}</h1>
            <h1 className={moduleName.role}>{role}</h1>
        </div>
    </>
}

export const OtherPageOfAbout = ({pageName}) => {
    return <div className={moduleName.body_about}>
        <Breadcrumb pageName={pageName} pageNameForTitle={'Biz haqimizda'}/>
        </div>;
  };
  