import React, {useEffect} from 'react';
import './Lavhalar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import rasm1 from '../../images/rasm1.png';
import rasm2 from '../../images/rasm2.png';
import rasm3 from '../../images/rasm3.png';
import rasm4 from '../../images/rasm4.png';
import rasm5 from '../../images/rasm5.png';
import rasm6 from '../../images/rasm6.png';
import rasm7 from '../../images/rasm7.png';
import rasm8 from '../../images/rasm8.png';
import rasm9 from '../../images/rasm9.png';
import rasm10 from '../../images/rasm10.png';
import rasm11 from '../../images/rasm11.png';
import rasm12 from '../../images/rasm12.png';
import { SRLWrapper } from 'simple-react-lightbox';

function Lavhalar() {
    useEffect(() => {
        AOS.init({
            once: true
        });
    })
    return (
        <div className='lavhalar' id='lavhalar'>
            <h1>Yutuqlar lavhalarda</h1>
            <div className='lavhalar1'>
                <SRLWrapper className='srlwrapper'>
                    <img src={rasm1} alt='Qurilish jarayoni' data-aos="fade-down" data-aos-duration="1000" />
                    <img src={rasm2} alt='Ochilish marosimi' data-aos="fade-down" data-aos-duration="1200"/>
                    <img src={rasm3} alt='Ish faoliyati' data-aos="fade-down" data-aos-duration="1400"/>
                    <img src={rasm4} alt='Ish faoliyati' data-aos="fade-down" data-aos-duration="1600"/>
                    <img src={rasm5} alt="Zavot ko'rinishi" data-aos="fade-down" data-aos-duration="1800"/>
                    <img src={rasm6} alt="Zavot ko'rinishi"  data-aos="fade-down" data-aos-duration="2000"/>
                    <img src={rasm7} alt='Qurilish jarayoni' data-aos="fade-down" data-aos-duration="2200"/>
                    <img src={rasm8} alt='Qurilish jarayoni' data-aos="fade-down" data-aos-duration="2400"/>
                    <img src={rasm9} alt='Ish faoliyati' data-aos="fade-down" data-aos-duration="2600"/>
                    <img src={rasm10} alt='Ish faoliyati' data-aos="fade-down" data-aos-duration="2800"/>
                    <img src={rasm11} alt='Ish faoliyati' data-aos="fade-down" data-aos-duration="3000"/>
                    <img src={rasm12} alt='Qish' data-aos="fade-down" data-aos-duration="3000"/>
                </SRLWrapper>
            </div>
        </div>
    )
}

export default Lavhalar;
