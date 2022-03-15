import React, { useEffect } from 'react';
import style from "./MainNews.module.css"
import MobileNav1 from   "../MobileNav1"
import img1 from "./Imgs/house5.jpg"
import img2 from "./Imgs/2.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
const SingleNews = () => {
    useEffect(() => {
        AOS.init();
 })
    const map = [
        { title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta nam impedit, repudiandae temporibus necessitatibus optio fugit veniam libero id odit. Officia reiciendis consectetur, ab consequuntur distinctio, excepturi dolore quae aut fugiat architecto ipsa. Perspiciatis adipisci recusandae asperiores consequatur perferendis temporibus omnis qui, voluptas, commodi sint cumque quam molestias ad. Accusantium, optio sed nesciunt aut vel labore fugiat repellat dolores! Alias neque fuga quasi odit aspernatur aliquam, eveniet laboriosam aut itaque odio? Veritatis sed impedit sint fugiat dolore consequatur, odit similique magnam corrupti obcaecati quas. Vitae, dolore cumque laudantium laborum, nostrum, odio quod illo suscipit ducimus eius dolorum! Odit, ut ea." }
    ]
    const map2 = map.map(a => <p key={a.title}>{a.title}</p>)
    return (
        <div>
            <MobileNav1/>
            <div className={style.HeaderNews2}>
                <h1 data-aos="fade-up" data-aos-duration="1000" >O`zbekistonda energetika quvvatlari oshib boradi</h1>
            </div>
            <div className={style.SingleKatalog} data-aos="fade-up" data-aos-duration="1000" >
                <div className={style.discription}>
                    <h1>O`zbekistonda energetika quvvatlarini oshirish</h1>
                    {map2}
                    {map2}
                    {map2}
                </div>
                <div className={style.data} data-aos="fade-up" data-aos-duration="1000" >
                    <div className={style.BlockSinglur}>
                       <img src={img1} alt="" />
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos asperiores, distinctio exercitationem libero fuga consectetur? Deleniti harum suscipit nemo maxime!</h3>  
                    </div>
                   <div className={style.BlockSinglur}>
                      <img src={img2} alt="" />
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos asperiores, distinctio exercitationem libero fuga consectetur? Deleniti harum suscipit nemo maxime!</h3>  
                   </div>
                   
                </div>
            </div>
        </div>
    );
};
export default SingleNews;