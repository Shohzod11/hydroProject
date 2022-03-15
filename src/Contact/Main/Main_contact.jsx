import React from 'react'

import { Location } from './Location/Location'
import { MainBlock } from './MainBlock/MainBlock_contact'

import moduleName from './Main_contact.module.css'
import Map2 from './../../components/Map';
export const MainBlock_contact = () => {
    return (
        <div className={moduleName.body}>
            <div className={moduleName.block_body}>
                <Location />
                <MainBlock />
            </div>
        </div>
    )
}
