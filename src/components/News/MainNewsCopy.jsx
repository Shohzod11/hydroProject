import React, { useEffect, useReducer } from 'react';
import style from "./MainNews.module.css";
import "./MainNewsCopy.css";
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
<link href='https://fonts.googleapis.com/css?family=Raleway:400,800,300' rel='stylesheet' type='text/css'></link>
export const MainNewsCopy = ({ title, img1, img2, img3 }) => {

       useEffect(() => {
              AOS.init();
       })

       const NewsReducer = (state, action) => {
              switch (action.type) {
                     case "News_CLICK":
                            return {
                                   show: !state.show,
                                   text: state.text
                            };
                     default:
                            return state;
              }
       };
       const [state, dispatch] = useReducer(NewsReducer, { show: false, text: "ko'proq ko'rish" });
       const Click = () => {
              dispatch({ type: "News_CLICK" });
       };
       const map = [
              { img: img1 },
              { img: img2 },
              { img: img3 }
       ];

       const map2 = map.map(a => <div key={a.img} data-aos="fade-up" data-aos-duration="700" className={style.Kategoriya}>
            <div className="content">
				<div className="grid">
					<figure className="effect-bubba">
						<img src={a.img} alt="img02"/>
						<figcaption>
                                                 <NavLink to="/newsSingilur"></NavLink>
							<h2><span>Yangiliklar</span></h2>
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae officia sint quos vero reiciendis explicabo, soluta repellendus delectus molestias porro.</p>
						</figcaption>			
					</figure>
				</div>
			</div>
                   
       </div>);
       return (
              <div>
                     <div className={style.Katalog}>
                            <div style={{width:'100%'}}> <h1>{title}</h1></div>
                           
                              {map2}  
                            
                                                    
                            {state.show && <> {map2} </>}
                            <div className={style.MoreSee}>
                                   <button onClick={Click} className={style.Button}>{state.show === false ? state.text : "Berkitish"}</button>
                            </div>
                     </div>
              </div>
       );
};
