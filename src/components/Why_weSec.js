import React, { useEffect } from 'react';
import firstImg from '../assets/Vector.png'
import './Why_weSec.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMap,faGlobe,faCubes} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Why_weSec() {
    useEffect(() => {
        AOS.init();
 })
    return (
        <div className='why_we ' data-aos="fade-up" data-aos-duration="1000">
            <>
                <div className='roww'>
                    <div className='col1'>
                        <div className="top_sec1">
                            <img src={firstImg} alt="bu yerda rasm bor edi"></img><h4>Missiya</h4>
                        </div>
                        <div className="about_this">
                            <p>An emphasis in this division is gate construction work, including radial, slide, crest, miter, and drum gates. In the past ten years .</p>
                        </div>
                    </div>
                    <div className='col1'>
                        <div className="top_sec">
                            <FontAwesomeIcon icon={faGlobe} ></FontAwesomeIcon> <h4>Qadriyatlar</h4>
                        </div>
                        <div className="about_this">
                            <p>This project exposure ensures that our dam repair contractor’s team is one of the most knowledgeable and experienced in the United States.</p>
                        </div>
                    </div>
                    <div className='col1'>
                        <div className="top_sec">
                            <FontAwesomeIcon icon={faMap}></FontAwesomeIcon> <h4>Maqsadlar</h4>
                        </div>
                        <div className="about_this">
                            <p>Several types of man made dams exist today and are classified according to the type of construction material being used, the slope or cross-section of the dam</p>
                        </div>
                    </div>
                    <div className='col1'>
                        <div className="top_sec">
                            <FontAwesomeIcon icon={faCubes}></FontAwesomeIcon> <h4>Shior</h4>
                        </div>
                        <div className="about_this">
                            <p>Roughly 650,000 dams around the world require regular maintenance, repair, and rehabilitation, making existing dams one of the largest markets for construction.</p>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Why_weSec
