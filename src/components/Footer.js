import React from 'react'
import './Footer.scss'
import {Container,Row,Col} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhoneAlt,faEnvelope,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF,faTelegramPlane,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/forfooter.png'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='footer'>
            <div className='wrapper'>
                <Container>
                    <Row>
                        <Col md="6" className="left">
                            <div className='description'>
                                <a href="">
                                    <img src={logo} />
                                </a>
                                <p>We build low-cost, carbon-free power for neighborhoods. We ensure the functionality of reservoirs to supply water to farming </p>
                            </div>
                        </Col>
                        <Col md="6" className="right">
                            <div className="links">
                                <h6>
                                    Additional Links
                                </h6>
                                <ul>
                                    <li><a href="">Faoliyatlar</a></li>
                                    <li><Link to="/korporativ">Korporativ qomita</Link></li>
                                    <li><a href="">Yangiliklar</a></li>
                                    <li><a href="">Texnik imkoniyatlar</a></li>
                                    <li><Link to="/iqtisodiy">Iqtisodiy ko'rsatgichlar</Link></li>
                                    <li><a href="/about">Biz haqimizda</a></li>
                                    <li><a href="/contact">Bog'lanish</a></li>
                                </ul>
                            </div>
                            <div className='socials_div'>
                                <h6>Contact Our Team</h6>
                                <ul  className='about_ul'>
                                    <li><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>+998 90 806 20 04</li>
                                    <li><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>example@gmail.com</li>
                                    <li><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>10022,9 str,,Mirzo Ulug'bek dst,Tashkent, Uzbekistan</li>
                                </ul>
                                <ul className="socials">
                                    <li><a href=""><FontAwesomeIcon icon={faFacebookF} ></FontAwesomeIcon></a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faTelegramPlane} ></FontAwesomeIcon></a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon></a></li>
                                    <li><a href=""><FontAwesomeIcon icon={faYoutube} ></FontAwesomeIcon></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <p className='the_end'>© 2010-2021 Hydro Company.  All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
