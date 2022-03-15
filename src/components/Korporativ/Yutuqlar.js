import React, {useEffect} from 'react';
import './Yutuqlar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import rasm from '../../images/Rectangle 57.png';

function Yutuqlar() {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className='yutuqlar1' id='yutuqlar'>
            <div className='yutuqlar' data-aos="fade-down" data-aos-duration="1000">
                <h1 >Erishilgan yutuqlar</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className='yutuq_rasm' data-aos="fade-down" data-aos-duration="1500"><img src={rasm} /></div>
        </div>
    )
}

export default Yutuqlar;
