import React , {useState} from 'react'
import { Button, Offcanvas,DropdownButton,Dropdown} from 'react-bootstrap'
import logo from '../assets/logo.png'
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF , faTelegramPlane , faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import uzFlag from '../assets/uz_flag.jpg'
import ruFlag from '../assets/russian_flag.png'
import engFlag from '../assets/britanflag.png'
import './MobileNav1.scss'
function MobileNav1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='mob_nav'>
      <div className='wrapper'>
        <div className='left'>
        <DropdownButton id="dropdown-basic-button" title="UZ">
          <Dropdown.Item href="/"><img src={ruFlag} /></Dropdown.Item>
          <Dropdown.Item href="/"><img className='eng_flag' src={engFlag} /></Dropdown.Item>
        </DropdownButton>
        
        </div>
        <div className='centre'>
            <a href="/"><img src={logo} /></a>
        </div>
        <button  onClick={handleShow}>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </button>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <div className='socials'>
                    <ul>
                        <li><a className='facebook_icon' href="/"><FontAwesomeIcon icon={faFacebookF} ></FontAwesomeIcon></a></li>
                        <li><a className='telegram_icon' href="/"><FontAwesomeIcon icon={faTelegramPlane} ></FontAwesomeIcon></a></li>
                        <li><a className='instagram_icon' href="/"><FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon></a></li>
                    </ul>
                    </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className='quick_links'>
            <li>
              <NavLink to="/">Bosh sahifa</NavLink>
            </li>
            <li><NavLink to="/activitiesPage/activities">Faoliyatlar</NavLink></li>
            <li><NavLink to="/korporativ">Korporativ qo'mita</NavLink></li>
            <li><NavLink to="/news">Yangiliklar</NavLink></li>
            <li><NavLink to="/texnika">Texnik imkoniyatlar</NavLink></li>
            <li><NavLink to="/iqtisodiy">Iqtisodiy ko'rsatgichlar</NavLink></li>
            <li><NavLink to={'/about'}>Biz haqimizda</NavLink></li>
            <li><NavLink to="/contact">Bog'lanish</NavLink></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default MobileNav1