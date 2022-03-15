import React, { useEffect } from 'react';
import style from "./MainNews.module.css"
import { NewsDay } from './NewsDay';
import MobileNav1 from '../MobileNav1'
import { Advertisement } from './Advertisement';
import Job from './Job';
import video from "./Imgs/video-2.mp4"
import { Measure } from './Measure';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
const MainNews = () => {
       useEffect(() => {
              AOS.init();
       })
       return (
              <div>
                     <MobileNav1 />
                     <div className={style.HeaderNews}>
                            <video src={video} autoPlay loop muted />
                            <div className={style.BlockLink}>
                                   <h1 data-aos="fade-up" data-aos-duration="1000" >Kun yangiliklari</h1>
                                   <NavLink data-aos="fade-up" data-aos-duration="700"  to="/" className={style.Block1}>Bosh menu/</NavLink>
                                   <a data-aos="fade-up" data-aos-duration="700"  href="/" className={style.Block2}>Yangiliklar</a>
                            </div>
                     </div>
                     <NewsDay />
                     <Advertisement />
                     <Measure />
                     <Job />
              </div>
       );
};
export default MainNews;