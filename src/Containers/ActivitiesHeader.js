import React from "react";
import "./activitiesHeader.scss";

export default function activitiesHeader (props) {
    return (
        <div className={`banner ${props.type}`}>
                <div className="banner-text">
                    <div data-aos="fade-up" data-aos-once='true' data-aos-duration="1500">Faoliyatlar</div>
                    <span data-aos="fade-up" data-aos-once='true' data-aos-duration="2000"  ><a href="/">Bosh menu</a><span> / {props.type}</span></span>
                </div>
            </div>
    )
}