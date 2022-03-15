import React from 'react'
import Map2 from '../components/Map'
import { HeaderImg_conatct } from './HeaderImg/HeaderImg_conatct'
import { MainBlock_contact } from './Main/Main_contact'
import ContactSec from './../components/ContactSec';
import MobileNav1 from '../components/MobileNav1'


export const ContactPage = () => {
    return (
        <div>
            <MobileNav1 />
            <HeaderImg_conatct />
            <MainBlock_contact />
            <ContactSec/>

        </div>
    )
}
