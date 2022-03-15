import React from 'react'

import pin from './picture/pin.png'
import phone from './picture/phone.png'
import mail from './picture/mail.png'

import moduleName from './Location.module.css'


function LocationBlockContact({ picture, title, text, text2, id }) {
    return (
        <div className={moduleName.block}>
            <img id={id} className={moduleName.block_img} src={picture} alt="" />
            <h1 className={moduleName.block_title}>{title}</h1>
            <p className={moduleName.block_text}>{text} <br /> {text2}</p>
        </div>
    )
}

export const Location = () => {
    return (
        <div className={moduleName.body}>
            <LocationBlockContact picture={pin} title={'Biznig manzli'} text={'10022, 9 str, Mirzo Ulugbek'} text2={' dst, Tashkent, Uzbekistan'} id={moduleName.pin}/>
            <LocationBlockContact picture={phone} title={'Ishonch telefoni'} text={'+99890 123-45-67'} text2={'+99891 123-45-67'}  id={moduleName.tel}/>
            <LocationBlockContact picture={mail} title={'Email'} text={'example@info.com'} text2={'typo@graphy.com'} id={moduleName.mail}/>
        </div>
    )
}
