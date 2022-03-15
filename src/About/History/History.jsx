import React, { useEffect } from 'react'
import AOS from 'aos'

import one from './picture/1.png'
import two from './picture/2.png'
import three from './picture/3.png'
import four from './picture/4.png'
import five from './picture/5.png'
import six from './picture/6.png'
import seven from './picture/7.png'
import eight from './picture/8.png'
import nine from './picture/9.png'
import ten from './picture/10.png'
import eleven from './picture/11.png'
import twelve from './picture/12.png'

import moduleName from './History.module.css'
import 'aos/dist/aos.css'
import { Modal, Button } from 'antd';


export const History = () => {

    useEffect(() => {
        AOS.init()
    })

    return (
        <div className={moduleName.blockBody}>
            <h1 className={moduleName.title}>Tashkilot tarixi</h1>
            <div className={moduleName.body}>
                <MainBlockModal img={one} />
                <MainBlockModal img={two} />
                <MainBlockModal img={three} />
                <MainBlockModal img={four} />
                <MainBlockModal img={five} />
                <MainBlockModal img={six} />
                <MainBlockModal img={seven} />
                <MainBlockModal img={eight} />
                <MainBlockModal img={nine} />
                <MainBlockModal img={ten} />
                <MainBlockModal img={eleven} />
                <MainBlockModal img={twelve} />
            </div>
        </div>
    )
}
export const MainBlockModal = ({ img }) => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    return (
        <>
            <img onClick={showModal} className={moduleName.picture} src={img} alt="" data-aos="fade-down" data-aos-duration="1000" />
            <Modal
                visible={visible}
                onCancel={handleCancel}
            >
                <img className={moduleName.picture} src={img} alt="" data-aos="fade-down" data-aos-duration="1000" />
                <h1 style={{textAlign:'center', marginTop:"2rem"}}>Hashar ishlari</h1>
                <p style={{textAlign:"right", marginRight:"2rem"}}>23.01.2022</p>
            </Modal>
        </>
    )
};


