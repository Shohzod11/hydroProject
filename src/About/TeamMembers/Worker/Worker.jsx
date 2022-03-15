import React from 'react'

import one from './picture/director.jpg'
import two from './picture/2.jpg'
import three from './picture/3.jpg'
import four from './picture/4.jpg'
import five from './picture/1.jpg'
import six from './picture/3.jpg'
import seven from './picture/2.jpg'
import eight from './picture/4.jpg'
import nine from './picture/1.jpg'
import ten from './picture/2.jpg'
import eleven from './picture/4.jpg'
import twelve from './picture/3.jpg'
import thirteen from './picture/1.jpg'
import fourteen from './picture/2.jpg'
import fifteen from './picture/3.jpg'

import { TeamMembersBox } from '../../_utils/Helpers'

import moduleName from '../TeamMembers.module.css'

export const Worker = () => {
    return (
        <div className={moduleName.block_body}>
            <h1 className={moduleName.block_title}>Hodimlar</h1>
            <TeamMembersBox picture={one} name_surname={'Name and Surname'}
                role={'Possition at company'} role={'Possition at company'} aos={'1000'} />
            <TeamMembersBox picture={two} name_surname={'Name and Surname'}
                role={'Possition at company'} role={'Possition at company'} aos={'1300'} />
            <TeamMembersBox picture={three} name_surname={'Name and Surname'}
                role={'Possition at company'} role={'Possition at company'} aos={'1600'} />
            <TeamMembersBox picture={four} name_surname={'Name and Surname'}
                role={'Possition at company'} role={'Possition at company'} aos={'1900'} />
            <TeamMembersBox picture={five} name_surname={'Name and Surname'}
                role={'Possition at company'} role={'Possition at company'} aos={'2200'} />
            <TeamMembersBox picture={six} name_surname={'Name and Surname'}
                role={'Possition at company'} role={'Possition at company'} aos={'1000'} />
            <TeamMembersBox picture={seven} name_surname={'Name and Surname'}
                role={'Possition at company'} role={'Possition at company'} aos={'1300'} />
            <TeamMembersBox picture={eight} name_surname={'Name and Surname'}
                role={'Possition at company'} role={'Possition at company'} aos={'1600'} />
            <TeamMembersBox picture={nine} name_surname={'Name and Surname'}
                role={'Possition at company'} role={'Possition at company'} aos={'1900'} />
            <TeamMembersBox picture={ten} name_surname={'Name and Surname'}
                role={'Possition at company'} role={'Possition at company'} aos={'2200'} />
            <TeamMembersBox picture={eleven} name_surname={'Name and Surname'}
                role={'Possition at company'} aos={'1000'} />
            <TeamMembersBox picture={twelve} name_surname={'Name and Surname'}
                role={'Possition at company'} aos={'1300'} />
            <TeamMembersBox picture={thirteen} name_surname={'Name and Surname'}
                role={'Possition at company'} aos={'1600'} />
            <TeamMembersBox picture={fourteen} name_surname={'Name and Surname'}
                role={'Possition at company'} aos={'1900'} />
            <TeamMembersBox picture={fifteen} name_surname={'Name and Surname'}
                role={'Possition at company'} aos={'2200'} />
        </div>
    )
}
