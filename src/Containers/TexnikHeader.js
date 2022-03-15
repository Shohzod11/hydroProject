import React from "react"
import "./texnikHeader.scss"
import aos from "aos"

export default function texnikHeader (){
    aos.init()
    return(
        <>
            <div className="banner Texnik">
                <div className="banner-text">
                    <div data-aos="fade-up" data-aos-once='true' data-aos-duration="1500">Texnik imkoniyatlar</div>
                    <span data-aos="fade-up" data-aos-once='true' data-aos-duration="2000" ><a href="/">Bosh menu</a><span> / Texnikalar</span></span>
                </div>
            </div>
        </>
    )
}