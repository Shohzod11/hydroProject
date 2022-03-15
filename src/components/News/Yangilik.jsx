import React, { useEffect } from 'react';
import style from "./MainNews.module.css"
import video from "./Imgs/video3.mp4"
import { Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Yangilik = () => {
       useEffect(() => {
              AOS.init();
    })
       return (
              <div>
                     <div className={style.HeaderNews}>
                            <video src={video} autoPlay loop muted/>
                            <div  className={style.BlockLink}>     <h1 data-aos="fade-up" data-aos-duration="1000">Kun yangiliklari</h1>
                                   <Link data-aos="fade-up" data-aos-duration="700" to="/" className={style.Block1}>Bosh menu/</Link>
                                   <a data-aos="fade-up" data-aos-duration="700" href="/" className={style.Block2}>Yangiliklar</a>
                            </div>
                     </div>
              </div>
       );
};
export default Yangilik;