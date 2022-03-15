import React from 'react'
import Background from '../components/Korporativ/Background'; 
import MahalliyHam from '../components/Korporativ/MahalliyHam';
import XalqaroHamkorlar from '../components/Korporativ/XalqaroHamkorlar';
import Yutuqlar from '../components/Korporativ/Yutuqlar';
import Lavhalar from '../components/Korporativ/Lavhalar';
import MobileNav1 from '../components/MobileNav1'

function KorporativQomita() {
    return (
        <div>
            <MobileNav1 />
            <Background />
            <XalqaroHamkorlar />
            <MahalliyHam />
            <Yutuqlar />
            <Lavhalar />
        </div>
    )
}

export default KorporativQomita;
