import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './MainHeader.scss'
import './MainHeader.css'
function MainHeader() {
    const [isMobile, setIsMobile] = useState(false)
    const [scroll, setScroll] = useState('')
    window.addEventListener("scroll", () => {
        if (window.scrollY < 600) {
            setScroll('')
        } else {
            setScroll('scroll23')
       
        }
      });
    return (
        <div className={'main_header '+ scroll}>
            <div className='bContainer'>
                <div className='wrapper'>
                    <div className='logo'>
                        <a href='#'><img src={logo} /> </a>
                    </div>
                    <div className='main_parts'>
                        <ul className={isMobile? 'nav-links-mobile' : 'parent_ul'}>
                            <li>
                            <NavLink className={'pagesLink '} to="/">Bosh sahifa</NavLink>
                            </li>                     
                            <li className='wrap_li1'>
                                <NavLink className={'pagesLink'} to="activitiesPage/activities">Faoliyatlar</NavLink>
                                <ul className='small_ul1'>
                                <li>
                                       <NavLink to="activitiesPage/past-activities"> Yakunlangan loyihalar</NavLink>
                                </li>
                                 <li><NavLink to="activitiesPage/present-activities"> Jarayondagi loyihalar</NavLink></li>
                                    <li><NavLink to="activitiesPage/future-activities"> Kelgusi loyihalar</NavLink></li>
                                    
                                </ul>
                            </li>
                            <li className='wrap_li2'>
                                <NavLink className={'pagesLink'} to='/korporativ'>Korporativ qo'mita </NavLink>
                                <ul className='small_ul2'>
                                    <li><a href="/korporativ/#xalqaro">Xalqaro hamkorlar</a></li>
                                    <li><a href="/korporativ/#mahalliy">Mahalliy hamkorlar</a></li>
                                    <li><a href="/korporativ/#yutuqlar">Erishilgan yutuqlar</a></li>
                                    <li><a href="/korporativ/#lavhalar">Yutuqlar lavhalarda</a></li>
                                </ul>
                            </li>
                            <li className='wrap_li3'>
                            <NavLink to="news" className={'pagesLink'}>Yangiliklar</NavLink>
                                <ul className='small_ul3'>
                                    <li >
                                        <Link to="news/day">Kun yangiliklari</Link>
                                    </li>
                                    <li>
                                        <Link to="news/advertisement">E'lonlar</Link>
                                    </li>
                                    <li>
                                        <Link to="news/job">Bo`sh ish joylari</Link>
                                    </li>
                                    <li>
                                        <Link to="news/measure">Tadbirlar</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='wrap_li4'> <NavLink className={'pagesLink'} to="/texnika">Texnik imkoniyatlar</NavLink>
                                <ul className='small_ul4'>
                                    <li><a href="/texnika/#stat">Statistika</a></li>
                                    <li><a href="/texnika/#video">Videolar</a></li>
                                    <li><a href="/texnika/#texnik">Barcha texnologiyalar</a></li>
                                    <li><a href="/texnika/#texnik">Avtotransportlar</a></li>
                                    <li><a href="/texnika/#texnik">Mexanizimlar</a></li>
                                </ul>
                            </li>
                            <li className='wrap_li5'><NavLink className={'pagesLink'} to='/iqtisodiy'>Iqtisodiy ko'rsatkichlar</NavLink>
                                <ul className='small_ul5'>
                                    <li><a href="/iqtisodiy/#chartet">Yillik ko'rsatgichlar</a></li>
                                    <li><a href="/iqtisodiy/#ochiq-malumotlar">Ochiq ma'lumotlar</a></li>
                                    <li><a href="/iqtisodiy/#malumotlar">Shartnomalar</a></li>
                                    <li><a href="/iqtisodiy#tendir-malumotlari">Tender ma'lumotlari</a></li>
                                </ul>
                            </li>
                            <li className='wrap_li6'>
                                <NavLink className={'_aboutLink pagesLink'} to={'/about'}> Biz haqimizda </NavLink>
                                <ul className='small_ul6'>
                                    <li><Link to="about/history">Tashkilot tarixi</Link></li>
                                    <li><Link to="about/meeting">Missiya</Link></li>
                                    <li className='manage_sys'>
                                        <Link to="about/teamMembers">Boshqaruv tuzilmasi </Link><FontAwesomeIcon icon={faChevronRight}/>
                                        <ul className='additional_ul'>
                                            <li><Link to="about/director">Rahbariyat</Link></li>
                                            <li><Link to="about/worker">Hodimlar</Link></li>
                                            <li><Link to="about/veteran">Faxriylar</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="about/whyWe">Nega biz?</Link></li>
                                    <li><Link to="about/report">Statistika</Link></li>
                                </ul>
                            </li>
                            <li className='contact_me pages_link'><NavLink className={'pagesLink'} to="/contact" >Bog'lanish</NavLink></li>
                            <li className='fa-envelope-icon'><FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon>     infothis@gmail.com</li>
                        </ul>
                        <button className='mobile-menu-icon'
                            onClick={() => setIsMobile(!isMobile)}
                        >
                            {isMobile ? <i className='fas fa-times'></i>: <i className='fas fa-bars'></i>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader
