import React, { useEffect } from 'react'

import { TeamMembersBox } from '../../_utils/Helpers'

import director from './picture/director.jpg'
import possition1 from './picture/1.jpg'
import possition2 from './picture/2.jpg'
import possition3 from './picture/3.jpg'
import possition4 from './picture/4.jpg'

import moduleName from '../TeamMembers.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
export const Leadership = () => {

    useEffect(() => {
        AOS.init()
    })

    return (
        <div className={moduleName.block_body}>
           <h1 data-aos="fade-down" data-aos-duration="200" className={moduleName.block_title}>Rahbariyat</h1>
            <TeamMembersBox picture={director} name_surname={'Name and Surname'}
                role={'Director'} aos={'1000'} />
            <TeamMembersBox picture={possition1} name_surname={'Name and Surname'}
                role={'Possition at company'} aos={'1300'} />
            <TeamMembersBox picture={possition2} name_surname={'Name and Surname'}
                role={'Possition at company'} aos={'1600'} />
            <TeamMembersBox picture={possition3} name_surname={'Name and Surname'}
                role={'Possition at company'} aos={'1900'} />
            <TeamMembersBox picture={possition4} name_surname={'Name and Surname'}
                role={'Possition at company'} aos={'2200'} />
        </div>
    );
};
