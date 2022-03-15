import React, { useEffect } from 'react';
import style from './Contrubutors.module.scss'
import contrubutor1 from '../assets/contrubutor1.png'
import contrubutor2 from '../assets/contrubutor2.png'
import contrubutor3 from '../assets/contrubutor3.png'
import contrubutor4 from '../assets/contrubutor4.png'
import contrubutor5 from '../assets/contrubutor5.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Contrubutors() {
	useEffect(() => {
		AOS.init();
	   })
	const map2=[
		{img:contrubutor1},
		{img:contrubutor2},
		{img:contrubutor3},
		{img:contrubutor4},
		{img:contrubutor5}
	]
	const map3=map2.map(a=><div key={a.img} className={style.slide} data-aos="fade-up" data-aos-duration="1000">
		<img src={a.img} alt="" />
	</div>)
    return (
        <div className={style.contrubutor_sec}>
            <div className='intro'><h2>Hamkorlar</h2>
            <p>Bular nafaqat hamkorlarimiz, Balki yaqin do`stlarimiz</p></div>
            <div className={style.slider}>
	<div className={style.slide_track}>
		{map3}
		{map3}
		{map3}
	</div>
</div>
        </div>
    )
}

export default Contrubutors
