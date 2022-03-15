import React, { useEffect } from 'react';
import style from "./MainNews.module.css"
import video from "./Imgs/video3.mp4"
import { Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Elonlar = () => {
       useEffect(() => {
              AOS.init();
    })
       return (
              <div>
                     <div className={style.HeaderNews}>
                            <video src={video} autoPlay loop muted/>
                            <div  className={style.BlockLink}>     <h1 data-aos="fade-up" data-aos-duration="1000">E`lonlar</h1>
                                   <Link to="/" data-aos="fade-up" data-aos-duration="700" className={style.Block1}>Bosh menu/</Link>
                                   <a href="/" data-aos="fade-up" data-aos-duration="700" className={style.Block2}>Yangiliklar</a>
                            </div>
                     </div>
              </div>
       );
};
export default Elonlar;