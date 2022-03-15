import React from 'react'
import './TopHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF , faTelegramPlane , faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faChevronDown, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import uzFlag from '../assets/uz_flag.jpg'
import ruFlag from '../assets/russian_flag.png'
import engFlag from '../assets/britanflag.png'
import logo from '../assets/logo.png'


function TopHeader() {
   
    return (
        <div className='top_header'>
          <div className='bContainer'>
            <div className='wrapper'>
                <div className='socials'>
                    <ul>
                        <li><a className='facebook_icon' href="/"><FontAwesomeIcon icon={faFacebookF} ></FontAwesomeIcon></a></li>
                        <li><a className='telegram_icon' href="/"><FontAwesomeIcon icon={faTelegramPlane} ></FontAwesomeIcon></a></li>
                        <li><a className='instagram_icon' href="/"><FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon></a></li>
                    </ul>
                    </div>
                    <div className='right_box'>
                        <div className='lang'>
                            <ul>
                                <li className='active'><button >UZ<FontAwesomeIcon icon={faChevronDown} ></FontAwesomeIcon> </button>
                                    <ul className='inner_ul'>
                                        <li><a href="/">RU <img alt="" src={ ruFlag} /></a></li>
                                        <li><a href="/">EN <img alt="" src={ engFlag} /></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className='email'>
                            <p><FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon>infothis@gmail.com</p>
                        </div>
                        <div className='phone_num'>
                            <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> +99890 123 21 22</p>
                        </div>
                    </div>
                    
            </div>
        </div>
    </div>
    );
};



export default TopHeader;