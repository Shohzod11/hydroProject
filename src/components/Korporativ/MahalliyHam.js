import React, {useEffect} from 'react';
import './MahalliyHam.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../images/image 2.png';
import img2 from '../../images/image 3.png';
import img3 from '../../images/image 4.png';
import img4 from '../../images/image 5.png';
import img5 from '../../images/image 6.png';

function MahalliyHam() {
    useEffect(() => {
        AOS.init();
    })

    return (
        <div className='mahalliy' id='mahalliy'>
            <h1>Mahalliy hamkorlar</h1>
            <p>Bular nafaqat hamkorlarimiz, yaqin do'stlarimiz</p>
            <div className='images'>
                <div className='rasmla_slide'><img src={img1} className='rasmla' /></div>
                <div className='rasmla_slide'><img src={img2} className='rasmla'/></div>
                <div className='rasmla_slide'><img src={img3} className='rasmla' /></div>
                <div className='rasmla_slide'><img src={img4} className='rasmla'/></div>
                <div className='rasmla_slide'><img src={img5} className='rasmla'/></div>

                <div className='rasmla_slide'><img src={img1} className='rasmla' /></div>
                <div className='rasmla_slide'><img src={img2} className='rasmla'/></div>
                <div className='rasmla_slide'><img src={img3} className='rasmla' /></div>
                <div className='rasmla_slide'><img src={img4} className='rasmla'/></div>
                <div className='rasmla_slide'><img src={img5} className='rasmla'/></div>

                <div className='rasmla_slide'><img src={img1} className='rasmla' /></div>
                <div className='rasmla_slide'><img src={img2} className='rasmla'/></div>
                <div className='rasmla_slide'><img src={img3} className='rasmla' /></div>
                <div className='rasmla_slide'><img src={img4} className='rasmla'/></div>
                <div className='rasmla_slide'><img src={img5} className='rasmla'/></div>
            </div>
        </div>
    )
}

export default MahalliyHam;
