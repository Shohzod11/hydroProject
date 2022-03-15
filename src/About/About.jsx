import React from 'react'
import { HeaderImg } from './HeaderImg/HeaderImg'
import { History } from './History/History'
import { MainBlock } from './MainBlock/MainBlock'
import { Meeting } from './Meeting/Meeting'
import { TeamMembers } from './TeamMembers/TeamMembers'
import { Training } from './Training/Training'
import { WhyWe } from './WhyWe/WhyWe';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { Veterans } from './TeamMembers/Veterans/Veterans'
import { Worker } from './TeamMembers/Worker/Worker';
import { Leadership } from './TeamMembers/Leadership/Leadership'
import MobileNav1 from '../components/MobileNav1'
// import 'antd/dist/antd.css';
import { OtherPageOfAbout } from './_utils/Helpers';

export const About = () => {
    return (
        <div style={{overflow:"hidden"}}>
            <MobileNav1 />
            <HeaderImg />
            <MainBlock />
            <Meeting />
            <History />
            <WhyWe />
            <Training />
            <TeamMembers />
        </div>
    )
}

export const AboutPage = () => {
    return (
            <>
            <Routes>
                <Route path='/about' element={<About />} />
                    <Route path='/about/history' element={<><OtherPageOfAbout pageName={'/ Tarix'}/><History /></>} />
                    <Route path='/about/meeting' element={<><OtherPageOfAbout pageName={'/ Missiya'}/><Training /></>} />
                    <Route path='/about/whyWe' element={<><OtherPageOfAbout pageName={'/ Nega Biz'}/><WhyWe /></>} />
                    <Route path='/about/report' element={<><OtherPageOfAbout pageName={'/ Nega Biz'}/><WhyWe /></>} />
                    <Route path='/about/teamMembers' element={<><OtherPageOfAbout pageName={'/ Boshqaruv tuzilmasi'}/><TeamMembers /></>} />
                    <Route path='/about/director' element={<><OtherPageOfAbout pageName={'/ Rahbariyar'}/><Leadership /></>} />
                    <Route path='/about/veteran' element={<><OtherPageOfAbout pageName={'/ Faxriylar'}/><Veterans /></>} />
                    <Route path='/about/worker' element={<><OtherPageOfAbout pageName={'/ Hodimlar'}/><Worker /></>} />
            </Routes>
        </>
    )
}


