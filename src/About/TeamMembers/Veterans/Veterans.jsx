import React from 'react'

import { TeamMembersBox } from '../../_utils/Helpers'

import one from './picture/director.jpg'
import two from './picture/2.jpg'
import three from './picture/3.jpg'
import four from './picture/4.jpg'
import five from './picture/1.jpg'

import moduleName from '../TeamMembers.module.css'

export const Veterans = () => {
    return (
        <div className={moduleName.block_body}>
             <h1 style={{marginTop:'1.5rem'}} className={moduleName.block_title}>Faxriylarimiz</h1>
            <TeamMembersBox picture={one} name_surname={'Name and Surname'} role={'Director'} aos={'1000'} />
            <TeamMembersBox picture={two} name_surname={'Name and Surname'} role={'Possition at company'} aos={'1300'}/>
            <TeamMembersBox picture={three} name_surname={'Name and Surname'} role={'Possition at company'} aos={'1600'}/>
            <TeamMembersBox picture={four} name_surname={'Name and Surname'} role={'Possition at company'} aos={'1900'}/>
            <TeamMembersBox picture={five} name_surname={'Name and Surname'} role={'Possition at company'} aos={'2200'}/>
        </div>
    )
}
