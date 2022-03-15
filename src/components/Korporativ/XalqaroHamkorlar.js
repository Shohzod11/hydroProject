import React, {useEffect} from 'react'
import './XalqaroHam.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import hyundai from '../../images/hyundai.jpg';
import uzauto from '../../images/uzauto.jpg';
import sany from '../../images/sany.jpg';
import man from '../../images/man.jpg';

import Img1 from '../../images/image 2.png';
import Img2 from '../../images/image 3.png';
import Img3 from '../../images/image 4.png';
import Img4 from '../../images/image 5.png';
import Img5 from '../../images/image 6.png';

function XalqaroHamkorlar() {

    useEffect(() => {
        AOS.init();
    })

    return (
        <div id='xalqaro'>
            <h1 data-aos="fade-down" data-aos-duration="500" className='xalqaro_h1'>Xalqaro hamkorlar</h1>
            <div className='XalqaroHamkorlar'>
                <div className='box' data-aos="fade-down" data-aos-duration="1000">
                    <div className='img'>
                        <img src={Img1} alt='hyundai' />
                    </div>
                    <div className='text'>
                        <h4>HYUNDAI</h4>
                        <h5>12/11/2021</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className='box' data-aos="fade-down" data-aos-duration="1000">
                    <div className='img'>
                        <img src={Img4} />
                    </div>
                    <div className='text'>
                        <h4>UZAUTO</h4>
                        <h5>12/11/2021</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
                <div className='box' data-aos="fade-down" data-aos-duration="1000">
                    <div className='img'>
                        <img src={Img2} />
                    </div>
                    <div className='text'>
                        <h4>SANY</h4>
                        <h5>12/11/2021</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
                <div className='box' data-aos="fade-down" data-aos-duration="1000">
                    <div className='img'>
                        <img src={Img5} />
                    </div>
                    <div className='text'>
                        <h4>MAN</h4>
                        <h5>12/11/2021</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default XalqaroHamkorlar;
